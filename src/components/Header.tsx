import { Button } from "./ui/button";
import { Volume2, VolumeX, Menu } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

interface HeaderProps {
  isSpeaking: boolean;
  toggleSpeech: () => void;
}

export const Header = ({ isSpeaking, toggleSpeech }: HeaderProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="border-b p-3 sm:p-4 bg-gradient-to-r from-purple-100 to-blue-100 sticky top-0 z-50 shadow-sm">
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
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden hover:bg-purple-200 transition-colors"
              >
                <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 pt-10">
                <Button
                  variant="ghost"
                  className="justify-start"
                  onClick={() => setIsOpen(false)}
                >
                  {t('Quick Choices')}
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start"
                  onClick={() => setIsOpen(false)}
                >
                  {t('Custom Response')}
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start"
                  onClick={() => setIsOpen(false)}
                >
                  {t('Voice Input')}
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};