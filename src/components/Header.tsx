import { Button } from "./ui/button";
import { Volume2, VolumeX } from "lucide-react";
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  isSpeaking: boolean;
  toggleSpeech: () => void;
}

export const Header = ({ isSpeaking, toggleSpeech }: HeaderProps) => {
  const { t } = useTranslation();
  
  return (
    <header className="border-b p-3 sm:p-4 bg-gradient-to-r from-purple-100 to-blue-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 tracking-tight">
          {t('Mythic Mind Labs')}
        </h1>
        <div className="flex items-center gap-2 sm:gap-4">
          <Button
            onClick={toggleSpeech}
            variant="ghost"
            size="icon"
            className="hover:bg-purple-200 transition-colors"
          >
            {isSpeaking ? (
              <Volume2 className="h-4 w-4 sm:h-5 sm:w-5 text-purple-700" />
            ) : (
              <VolumeX className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};