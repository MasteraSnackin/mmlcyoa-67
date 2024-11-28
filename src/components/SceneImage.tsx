import { useDallE } from "@/hooks/useDallE";
import { ImagePreview } from "./image-generation/ImagePreview";

interface SceneImageProps {
  message: string;
}

export const SceneImage = ({ message }: SceneImageProps) => {
  const { isLoading, imageUrl, generateImage } = useDallE();

  const handleGenerate = () => {
    generateImage(message);
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