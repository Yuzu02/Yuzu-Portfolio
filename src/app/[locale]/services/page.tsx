"use client";

// Translation
import { useTranslations } from "next-intl";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Services() {
  // Translation Hook
  const t = useTranslations("servicesList");
  const ServicesList = [
    {
      num: t("Service1.num"),
      text: t("Service1.text"),
      description: t("Service1.description"),
      href: "/contact",
    },
    {
      num: t("Service2.num"),
      text: t("Service2.text"),
      description: t("Service2.description"),
      href: "/contact",
    },
    {
      num: t("Service3.num"),
      text: t("Service3.text"),
      description: t("Service3.description"),
      href: "/contact",
    },
    {
      num: t("Service4.num"),
      text: t("Service4.text"),
      description: t("Service4.description"),
      href: "/contact",
    },
  ];

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-5">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {ServicesList.map((service) => {
            return (
              <div
                key={service.num}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/*Top*/}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline-light dark:text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full dark:bg-white bg-gray-800 group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="dark:text-primary text-white text-3xl" />
                  </Link>
                </div>
                {/*Title*/}
                <h2 className="text-[42px] font-bold leading-none dark:text-white text-primary group-hover:text-accent transition-all duration-500">
                  {service.text}
                </h2>
                {/*Description*/}
                <p className="dark:text-white/60 text-primary/60">
                  {service.description}
                </p>
                {/*Border*/}
                <div className="border-b dark:border-white/20 border-primary/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
