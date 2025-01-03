import { ChatMessage } from "./ChatMessage";
import { TypingIndicator } from "./TypingIndicator";

interface Message {
  text: string;
  isBot: boolean;
}

interface ChatContainerProps {
  messages: Message[];
  isTyping: boolean;
}

export const ChatContainer = ({ messages, isTyping }: ChatContainerProps) => {
  return (
    <div className="flex-1 overflow-y-auto p-2 md:p-4 space-y-4">
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message.text} isBot={message.isBot} />
      ))}
      {isTyping && <TypingIndicator />}
    </div>
  );
};