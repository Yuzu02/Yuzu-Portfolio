"use client";
import { useTranslations } from "next-intl";
import { Button } from "@/components/common/button";
import { motion } from "framer-motion";
import { Input } from "@/components/common/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/common/select";

import { FaPhoneAlt, FaEnvelope, FaTelegram } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { Textarea } from "@/components/common/textarea";

export default function Contact() {
  const t = useTranslations("Contact");
  const contactData = {
    formData: {
      title: t("formData.title"),
      description: t("formData.description"),
      firstname: t("formData.firstname"),
      lastname: t("formData.lastname"),
      email: t("formData.email"),
      phone: t("formData.phone"),
      message: t("formData.message"),
      send: t("formData.send"),
    },
    ServicesTabs: {
      title: t("ServicesTabs.title"),
      web: t("ServicesTabs.web"),
      api: t("ServicesTabs.api"),
      automatization: t("ServicesTabs.automatization"),
      consulting: t("ServicesTabs.consulting"),
    },
  };

  const info = [
    {
      icon: <FaPhoneAlt />,
      title: t("Phone"),
      description: "(+1) 829-807 5867",
    },
    {
      icon: <FaEnvelope />,
      title: t("Email"),
      description: "Yuzu_0204@outlook.com",
    },
    {
      icon: <FaTelegram />,
      title: t("Telegram"),
      description: "@Yuzu02",
    },
  ];

  /* Future implementation 
  
    <div className="flex justify-center items-center mb-6 mt-2">
        <RiContactsFill className="hover:text-accent text-6xl bg-gray-200/80 rounded-md" />
    </div>

  */

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
          {/* Contact Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-gray-200/80 dark:bg-list rounded-xl">
              <h3 className="text-accent text-4xl">
                {contactData.formData.title}
              </h3>
              <p className="dark:text-white/60 text-primary/70">
                {contactData.formData.description}
              </p>
              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type={contactData.formData.firstname}
                  placeholder={contactData.formData.firstname}
                />
                <Input
                  type={contactData.formData.lastname}
                  placeholder={contactData.formData.lastname}
                />
                <Input
                  type={contactData.formData.email}
                  placeholder={contactData.formData.email}
                />
                <Input
                  type={contactData.formData.phone}
                  placeholder={contactData.formData.phone}
                />
              </div>
              {/* Select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={contactData.ServicesTabs.title} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>{contactData.ServicesTabs.title}</SelectLabel>
                    <SelectItem value="web">
                      {contactData.ServicesTabs.web}
                    </SelectItem>
                    <SelectItem value="api">
                      {contactData.ServicesTabs.api}
                    </SelectItem>
                    <SelectItem value="aut">
                      {contactData.ServicesTabs.automatization}
                    </SelectItem>
                    <SelectItem value="cons">
                      {contactData.ServicesTabs.consulting}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Textarea */}
              <Textarea
                className="h-[100px] w-full resize-none overflow-hidden"
                placeholder={contactData.formData.message}
              />
              {/* Button */}
              <Button
                size="md"
                className="max-w-40 font-semibold text-primary bg-accent hover:bg-accent-hover dark:text-primary dark:hover:bg-accent-hover"
                variant="default"
              >
                {contactData.formData.send}
              </Button>
            </form>
          </div>
          {/* Contact Info */}
          <div className="flex-1 flex items-center xl:ml-36 order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item) => (
                <li key={item.title} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-gray-200/80 text-accent dark:bg-list dark:text-accent rounded-md flex items-center justify-center ">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="dark:text-white/60 text-primary/60">
                      {item.title}
                    </p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
