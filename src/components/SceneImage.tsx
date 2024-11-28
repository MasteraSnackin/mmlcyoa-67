import { useDallE } from "@/hooks/useDallE";
import { ImagePreview } from "./image-generation/ImagePreview";

interface SceneImageProps {
  message: string;
}

export const SceneImage = ({ message }: SceneImageProps) => {
  const { isLoading, imageUrl, generateImage } = useDallE();

  const extractNarrative = (text: string): string => {
    // Split by numbered options (1., 2., etc)
    const parts = text.split(/\d+\./);
    // Return the first part (narrative before options)
    return parts[0].trim();
  };

  const handleGenerate = () => {
    const narrativeText = extractNarrative(message);
    console.log("Generating image for narrative:", narrativeText);
    generateImage(narrativeText);
  };

  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm space-y-4">
      <ImagePreview 
        imageUrl={imageUrl}
        isLoading={isLoading}
        onGenerate={handleGenerate}
      />
    </div>
  );
};