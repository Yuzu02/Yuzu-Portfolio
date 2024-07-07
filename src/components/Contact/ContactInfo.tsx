"use client";
import { useTranslations } from "next-intl";
import { FaPhoneAlt, FaEnvelope, FaTelegram } from "react-icons/fa";
import ContactInfoItem from "./ContactInfoItem";

export default function ContactInfo() {
  const t = useTranslations("Contact");

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

  return (
    <ul className="flex flex-col gap-10">
      {info.map((item) => (
        <ContactInfoItem
          key={item.title}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </ul>
  );
}
