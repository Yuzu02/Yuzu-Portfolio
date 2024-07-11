"use client";

import { FiDownload } from "react-icons/fi";
import { Button } from "../common/button";
import { useTranslations, useLocale } from "next-intl";
import { useTheme } from "next-themes";
import { Toaster, toast } from "sonner";

export default function DownloadCV(): JSX.Element {
  const t = useTranslations("Toaster");
  const { theme } = useTheme() as {
    theme: "light" | "dark" | "system" | undefined;
  };
  const locale = useLocale();
  const cvURL = "assets/resume/cv/";
  const cvFileName = "cv_" + locale + ".pdf";
  const toasteMessages = {
    downloadCV: t("Download.DownloadCV"),
    toasterSuccess: t("Download.downloadSuccess"),
    toasterError: t("Download.downloadError"),
  };
  return (
    <>
      <Button
        variant="outline"
        size="lg"
        className="uppercase flex items-center gap-2"
        onClick={() => {
          try {
            const link = document.createElement("a");
            link.href = cvURL + cvFileName;
            link.download = cvFileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            toast.success(toasteMessages.toasterSuccess, {
              duration: 5000,
            });
          } catch (error) {
            toast.error(toasteMessages.toasterError, {
              duration: 5000,
            });
          }
        }}
      >
        <span className="mr-2 dark:hover:font-semibold">
          {toasteMessages.downloadCV}
        </span>
        <FiDownload className="text-xl" />
      </Button>
      <Toaster theme={theme} />
    </>
  );
}
