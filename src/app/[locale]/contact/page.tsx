"use client";
import { motion } from "framer-motion";
import ContactForm from "@/components/Contact/Form/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="pt-6 pb-5"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <ContactForm />
          <div className="flex-1 flex items-center xl:ml-36 order-1 xl:order-none mb-8 xl:mb-0">
            <ContactInfo />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
