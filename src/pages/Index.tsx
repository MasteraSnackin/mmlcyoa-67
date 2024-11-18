import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useSpeech } from "@/hooks/useSpeech";
import { ChatContainer } from "@/components/ChatContainer";
import { SceneImage } from "@/components/SceneImage";
import { Header } from "@/components/Header";
import { GameControls } from "@/components/GameControls";
import { useGameState } from "@/hooks/useGameState";
import { useVoiceControl } from "@/hooks/useVoiceControl";
import { useMessageHandler } from "@/hooks/useMessageHandler";
import { GameActions } from "@/components/GameActions";
import { VoiceSettingsPanel } from "@/components/VoiceSettingsPanel";
import { useTranslation } from 'react-i18next';
import '../i18n/config';

const Index = () => {
  const { toast } = useToast();
  const { 
    speak, 
    stopSpeaking, 
    setVoice, 
    currentVoice,
    speed,
    setSpeed,
    pitch,
    setPitch,
    volume,
    setVolume 
  } = useSpeech();
  const { messages, setMessages, isTyping, setIsTyping } = useGameState();
  const [isSpeaking, setIsSpeaking] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const { selectedOption, setSelectedOption, handleSendMessage } = useMessageHandler(
    isSpeaking,
    speak,
    setMessages,
    messages,
    setIsTyping
  );
  
  const { isListening, toggleVoiceRecognition } = useVoiceControl({ 
    handleSendMessage, 
    toast 
  });

  const toggleSpeech = () => {
    if (isSpeaking) {
      stopSpeaking();
    }
    setIsSpeaking(!isSpeaking);
  };

  const lastBotMessage = messages[messages.length - 1]?.isBot 
    ? messages[messages.length - 1].text 
    : null;
    
  const options = lastBotMessage ? extractOptions(lastBotMessage) : [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Header
        isSpeaking={isSpeaking}
        toggleSpeech={toggleSpeech}
      />
      
      <main className="flex-1 container mx-auto p-4 flex flex-col lg:flex-row gap-4">
        <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col order-2 lg:order-1">
          <div className="flex-1 overflow-hidden">
            <ChatContainer messages={messages} isTyping={isTyping} />
          </div>
          
          <GameControls
            options={options}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            handleSendMessage={handleSendMessage}
            isTyping={isTyping}
            isListening={isListening}
            toggleVoiceRecognition={toggleVoiceRecognition}
          />
        </div>
        
        <div className="w-full lg:w-[512px] flex flex-col gap-4 order-1 lg:order-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
            {lastBotMessage && <SceneImage message={lastBotMessage} />}
          </div>
          
          {isSpeaking && (
            <VoiceSettingsPanel
              onVoiceChange={setVoice}
              currentVoice={currentVoice}
              onSpeedChange={setSpeed}
              onPitchChange={setPitch}
              onVolumeChange={setVolume}
              speed={speed}
              pitch={pitch}
              volume={volume}
            />
          )}

          <div className="fixed bottom-4 right-4 z-50 lg:relative lg:bottom-0 lg:right-0">
            <GameActions
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
              messages={messages}
              setMessages={setMessages}
              toast={toast}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

const extractOptions = (message: string) => {
  const lines = message.split('\n');
  const options: string[] = [];
  
  for (const line of lines) {
    const match = line.match(/^\d+\.\s(.+)$/);
    if (match) {
      options.push(match[1].trim());
    }
  }
  
  return options;
};

export default Index;