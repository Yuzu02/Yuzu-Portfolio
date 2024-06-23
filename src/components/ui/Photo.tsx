"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Photo() {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="flex justify-center items-center w-full h-full"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten"
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt="Yuzu"
            className="object-contain rounded-full opacity-75"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
