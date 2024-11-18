import VoiceSettings from "./VoiceSettings";

interface VoiceSettingsPanelProps {
  onVoiceChange: (voice: SpeechSynthesisVoice) => void;
  currentVoice: SpeechSynthesisVoice | null;
  onSpeedChange: (speed: number) => void;
  onPitchChange: (pitch: number) => void;
  onVolumeChange: (volume: number) => void;
  speed: number;
  pitch: number;
  volume: number;
}

export const VoiceSettingsPanel = (props: VoiceSettingsPanelProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <VoiceSettings {...props} />
    </div>
  );
};