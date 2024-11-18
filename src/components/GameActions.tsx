import { Button } from "./ui/button";
import { Copy, RefreshCw, Download, Moon, Sun } from "lucide-react";
import { LanguageSelector } from "./LanguageSelector";
import { useTranslation } from 'react-i18next';
import { toast } from "@/components/ui/use-toast";

interface GameActionsProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  messages: Array<{ text: string; isBot: boolean }>;
  setMessages: (messages: Array<{ text: string; isBot: boolean }>) => void;
  toast: typeof toast;
}

export const GameActions = ({
  isDarkMode,
  setIsDarkMode,
  messages,
  setMessages,
  toast
}: GameActionsProps) => {
  const { t } = useTranslation();

  const copyChatlogs = () => {
    const chatLogs = messages
      .map(msg => `${msg.isBot ? "Game Master" : "Player"}: ${msg.text}`)
      .join("\n\n");
    
    navigator.clipboard.writeText(chatLogs).then(() => {
      toast({
        title: "Chat logs copied!",
        description: "The chat history has been copied to your clipboard.",
      });
    }).catch(() => {
      toast({
        title: "Failed to copy",
        description: "Could not copy chat logs to clipboard.",
        variant: "destructive",
      });
    });
  };

  const exportChat = () => {
    const chatLogs = messages
      .map(msg => `${msg.isBot ? "Game Master" : "Player"}: ${msg.text}`)
      .join("\n\n");
    
    const blob = new Blob([chatLogs], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'chat-export.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Chat exported!",
      description: "The chat history has been downloaded as a text file.",
    });
  };

  const restartChat = () => {
    setMessages([{ text: messages[0].text, isBot: true }]);
    toast({
      title: "Chat Restarted",
      description: "The chat has been reset to the beginning.",
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex flex-row lg:flex-col gap-2">
      <Button
        variant="outline"
        size="sm"
        className="flex-1 lg:flex-none flex items-center justify-center gap-2"
        onClick={copyChatlogs}
      >
        <Copy className="w-4 h-4" />
        <span className="hidden lg:inline">{t('Copy Chat Logs')}</span>
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="flex-1 lg:flex-none flex items-center justify-center gap-2"
        onClick={exportChat}
      >
        <Download className="w-4 h-4" />
        <span className="hidden lg:inline">{t('Export Chat')}</span>
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="flex-1 lg:flex-none flex items-center justify-center gap-2"
        onClick={restartChat}
      >
        <RefreshCw className="w-4 h-4" />
        <span className="hidden lg:inline">{t('Restart Chat')}</span>
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="flex-1 lg:flex-none flex items-center justify-center gap-2"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        <span className="hidden lg:inline">{t('Dark Mode')}</span>
      </Button>
      <div className="flex-1 lg:flex-none">
        <LanguageSelector />
      </div>
    </div>
  );
};