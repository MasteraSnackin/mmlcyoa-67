import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { VoicePreview } from "./VoicePreview";
import { getDefaultVoice, groupVoicesByLanguage } from "@/utils/voiceUtils";

interface VoiceSettingsProps {
  onVoiceChange: (voice: SpeechSynthesisVoice) => void;
  currentVoice?: SpeechSynthesisVoice | null;
  onSpeedChange?: (speed: number) => void;
  onPitchChange?: (pitch: number) => void;
  onVolumeChange?: (volume: number) => void;
  speed?: number;
  pitch?: number;
  volume?: number;
}

const VoiceSettings = ({ 
  onVoiceChange, 
  currentVoice,
  onSpeedChange = () => {},
  onPitchChange = () => {},
  onVolumeChange = () => {},
  speed = 1,
  pitch = 1,
  volume = 1
}: VoiceSettingsProps) => {
  const [voices, setVoices] = useState<{ name: string; voice: SpeechSynthesisVoice }[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const loadVoices = () => {
      try {
        if (!('speechSynthesis' in window)) {
          toast({
            title: "Browser Not Supported",
            description: "Text-to-speech is not supported in your browser.",
            variant: "destructive",
          });
          setIsLoading(false);
          return;
        }

        const availableVoices = window.speechSynthesis.getVoices();
        const voiceOptions = availableVoices.map((voice) => ({
          name: `${voice.name} (${voice.lang})`,
          voice: voice,
        }));
        
        if (!currentVoice) {
          const defaultVoice = getDefaultVoice(availableVoices);
          if (defaultVoice) {
            onVoiceChange(defaultVoice);
          }
        }
        
        setVoices(voiceOptions);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading voices:", error);
        setIsLoading(false);
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, [onVoiceChange, currentVoice, toast]);

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 h-10 px-3 py-2 text-sm border rounded-md">
        <Loader2 className="w-4 h-4 animate-spin" />
        <span className="text-muted-foreground">Loading voices...</span>
      </div>
    );
  }

  const groupedVoices = groupVoicesByLanguage(voices.map(v => v.voice));

  return (
    <div className="space-y-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="space-y-2">
        <Label>Voice</Label>
        <div className="flex items-center gap-2">
          <Select
            onValueChange={(value) => {
              const selectedVoice = voices.find((v) => v.voice.name === value)?.voice;
              if (selectedVoice) {
                onVoiceChange(selectedVoice);
                toast({
                  title: "Voice Updated",
                  description: `Voice changed to ${selectedVoice.name}`,
                });
              }
            }}
            value={currentVoice?.name}
          >
            <SelectTrigger className="w-[300px]">
              <SelectValue placeholder="Select a voice" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(groupedVoices).map(([lang, langVoices]) => (
                <SelectGroup key={lang}>
                  <SelectLabel>{new Intl.DisplayNames([lang], { type: 'language' }).of(lang)}</SelectLabel>
                  {langVoices.map((voice) => (
                    <SelectItem key={voice.name} value={voice.name}>
                      {voice.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              ))}
            </SelectContent>
          </Select>
          {currentVoice && <VoicePreview voice={currentVoice} />}
        </div>
      </div>

      <div className="space-y-2">
        <Label>Speed</Label>
        <Slider
          value={[speed]}
          onValueChange={([value]) => onSpeedChange(value)}
          min={0.5}
          max={2}
          step={0.1}
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Label>Pitch</Label>
        <Slider
          value={[pitch]}
          onValueChange={([value]) => onPitchChange(value)}
          min={0.5}
          max={2}
          step={0.1}
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Label>Volume</Label>
        <Slider
          value={[volume]}
          onValueChange={([value]) => onVolumeChange(value)}
          min={0}
          max={1}
          step={0.1}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default VoiceSettings;