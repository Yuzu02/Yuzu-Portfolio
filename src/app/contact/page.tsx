"use client";

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

//Data
import { contactData } from "./Data/Contact";

import { FaPhoneAlt, FaEnvelope, FaTelegram } from "react-icons/fa";
import { Textarea } from "@/components/common/textarea";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+1) 829-807 5867",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "Yuzu_0204@outlook.com",
  },
  {
    icon: <FaTelegram />,
    title: "Telegram",
    description: "@Yuzu02",
  },
];

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Contact Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-list rounded-xl">
              <h3 className="text-accent text-4xl">
                {contactData.formData.title}
              </h3>
              <p className="text-white/60">
                {contactData.formData.description}
              </p>
              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="e-mail" placeholder="E-mail Address" />
                <Input type="phone" placeholder="Phone Number" />
              </div>
              {/* Select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="api">API Development</SelectItem>
                    <SelectItem value="aut">Automatization</SelectItem>
                    <SelectItem value="cons">Consulting</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Textarea */}
              <Textarea
                className="h-[100px] w-full resize-none overflow-hidden"
                placeholder="Type your message here."
              />
              {/* Button */}
              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          {/* Contact Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item) => (
                <li key={item.title} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-list text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
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
