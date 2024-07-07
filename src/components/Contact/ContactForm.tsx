"use client";
import { useTranslations } from "next-intl";
import { Button } from "@/components/common/button";
import { Input } from "@/components/common/input";
import { Textarea } from "@/components/common/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/common/select";

export default function ContactForm() {
  const t = useTranslations("Contact");

  const formData = {
    title: t("formData.title"),
    description: t("formData.description"),
    firstname: t("formData.firstname"),
    lastname: t("formData.lastname"),
    email: t("formData.email"),
    phone: t("formData.phone"),
    message: t("formData.message"),
    send: t("formData.send"),
  };

  const servicesTabs = {
    title: t("ServicesTabs.title"),
    web: t("ServicesTabs.web"),
    api: t("ServicesTabs.api"),
    automatization: t("ServicesTabs.automatization"),
    consulting: t("ServicesTabs.consulting"),
  };

  return (
    <form className="flex flex-col gap-6 p-10 bg-gray-200/80 dark:bg-list rounded-xl">
      <h3 className="text-accent text-4xl">{formData.title}</h3>
      <p className="dark:text-white/60 text-primary/70">
        {formData.description}
      </p>
      {/* Input */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input type="text" placeholder={formData.firstname} />
        <Input type="text" placeholder={formData.lastname} />
        <Input type="email" placeholder={formData.email} />
        <Input type="tel" placeholder={formData.phone} />
      </div>
      {/* Select */}
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={servicesTabs.title} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{servicesTabs.title}</SelectLabel>
            <SelectItem value="web">{servicesTabs.web}</SelectItem>
            <SelectItem value="api">{servicesTabs.api}</SelectItem>
            <SelectItem value="aut">{servicesTabs.automatization}</SelectItem>
            <SelectItem value="cons">{servicesTabs.consulting}</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {/* Textarea */}
      <Textarea
        className="h-[100px] w-full resize-none overflow-hidden"
        placeholder={formData.message}
      />
      {/* Button */}
      <Button
        size="md"
        className="max-w-40 font-semibold text-primary bg-accent hover:bg-accent-hover dark:text-primary dark:hover:bg-accent-hover"
        variant="default"
      >
        {formData.send}
      </Button>
    </form>
  );
}
