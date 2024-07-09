"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState, useEffect } from "react";

const ThemedImage = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
      }}
      className="w-[260px] h-[260px] xl:w-[460px] xl:h-[460px] dark:mix-blend-lighten
          absolute rounded-full z-10"
    >
      <div className="relative w-full h-full">
        <Image
          src={
            currentTheme === "dark"
              ? "/assets/Roze/photo5.png"
              : "/assets/Roze/photo2.png"
          }
          priority
          quality={100}
          fill
          alt="Yuzu"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain rounded-full opacity-80 w-auto h-auto"
        />
      </div>
    </motion.div>
  );
};

export default ThemedImage;
