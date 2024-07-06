import { useTheme } from "next-themes";
import Image from "next/image";

const ThemedImage = () => {
  const { theme } = useTheme();

  return (
    <Image
      src={
        theme === "dark" || theme === "system"
          ? "/assets/Roze/photo5.png"
          : "/assets/Roze/photo2.png"
      }
      priority
      quality={100}
      fill
      alt="Yuzu"
      className="object-contain rounded-full opacity-80"
    />
  );
};

export default ThemedImage;
