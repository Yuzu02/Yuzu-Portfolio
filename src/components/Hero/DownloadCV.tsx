"use client";

import { FiDownload } from "react-icons/fi";
import { Button } from "../common/button";
import { useTranslations, useLocale } from "next-intl";

export default function DownloadCV(): JSX.Element {
  const t = useTranslations("Hero");
  const locale = useLocale();
  const cvURL = "assets/resume/cv/";
  const cvFileName = "cv_" + locale + ".pdf";

  return (
    <Button
      variant="outline"
      size="lg"
      className="uppercase flex items-center gap-2 hover:text-white"
    >
      <span className="mr-2 dark:hover:font-semibold">
        <a download href={cvURL + cvFileName}>
          {t("DownloadCV")}
        </a>
      </span>
      <FiDownload className="text-xl " />
    </Button>
  );
}
