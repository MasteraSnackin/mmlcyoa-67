import { Button } from "./ui/button";
import { Copy, RefreshCw, Download, Moon, Sun } from "lucide-react";
import { LanguageSelector } from "./LanguageSelector";
import { useTranslation } from 'react-i18next';
import { Toast } from "@/components/ui/use-toast";

interface GameActionsProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  messages: Array<{ text: string; isBot: boolean }>;
  setMessages: (messages: Array<{ text: string; isBot: boolean }>) => void;
  toast: (props: Toast) => void;
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
    <div className="flex flex-col gap-2">
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-2 shrink-0"
        onClick={copyChatlogs}
      >
        <Copy className="w-4 h-4" />
        {t('Copy Chat Logs')}
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-2 shrink-0"
        onClick={exportChat}
      >
        <Download className="w-4 h-4" />
        {t('Export Chat')}
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-2 shrink-0"
        onClick={restartChat}
      >
        <RefreshCw className="w-4 h-4" />
        {t('Restart Chat')}
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-2 shrink-0"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        {t('Dark Mode')}
      </Button>
      <LanguageSelector />
    </div>
  );
};