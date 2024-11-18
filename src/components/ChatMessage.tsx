import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  message: string;
  isBot: boolean;
}

export const ChatMessage = ({ message, isBot }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "flex w-full animate-message-fade-in gap-2 md:gap-3 px-2 md:px-4",
        isBot ? "justify-start" : "justify-end"
      )}
    >
      {isBot && (
        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
          <Bot className="h-3 w-3 md:h-4 md:w-4 text-purple-600" />
        </div>
      )}
      
      <div
        className={cn(
          "max-w-[85%] md:max-w-[80%] rounded-2xl px-3 py-2 md:px-4 md:py-3",
          isBot ? "bg-gray-50 border border-gray-100" : "bg-purple-600 text-white",
          "shadow-sm"
        )}
      >
        <p className={cn(
          "text-sm leading-relaxed",
          isBot ? "text-gray-800" : "text-white"
        )}>
          {message}
        </p>
      </div>
      
      {!isBot && (
        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
          <User className="h-3 w-3 md:h-4 md:w-4 text-white" />
        </div>
      )}
    </div>
  );
};