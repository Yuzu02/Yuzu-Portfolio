"use client";

// Translation
import { useTranslations } from "next-intl";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Services() {
  // Translation Hook
  const Services = useTranslations("servicesList");
  const ServicesList = [
    "Service1",
    "Service2",
    "Service3",
    "Service4",
  ] as const;

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
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
                key={Services(`${service}.title`)}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/*Top*/}
                <div className="w-full flex justify-between items-center">
                  <div
                    className="text-5xl font-extrabold text-outline
                  text-transparent group-hover:text-outline-hover transition-all duration-500"
                  >
                    {Services(`${service}.num`)}
                  </div>
                  <Link
                    href={Services(`${service}.href`) ?? ""}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/*Title*/}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {Services(`${service}.text`)}
                </h2>
                {/*Description*/}
                <p className="text-white/60">
                  {Services(`${service}.description`)}
                </p>
                {/*Border*/}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
