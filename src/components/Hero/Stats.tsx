"use client";

import { useTranslations } from "next-intl";
import CountUp from "react-countup";

export default function Stats() {
  const stats = useTranslations("statsList");
  const statsList = [
    "YearsExperience",
    "ProjectsCompleted",
    "TechMastered",
    "CodeCommits",
  ] as const;

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-6">
      <div className="container mx-auto xl:pt-8">
        <div className="flex flex-wrap gap-6 max-w-[90vw] mx-auto xl:max-w-none">
          {statsList.map((item) => {
            return (
              <div
                key={item}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start pl-4 xl:pl-0"
              >
                <CountUp
                  end={Number(stats(`${item}.num`))}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold text-primary dark:text-white"
                />
                <p
                  className={
                    String(stats(`${item}.text`)).length < 15
                      ? "max-w-[100px] leading-snug dark:text-white/80 text-primary/80"
                      : "max-w-[150px] leading-snug dark:text-white/80 text-primary/80"
                  }
                >
                  {stats(`${item}.text`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
