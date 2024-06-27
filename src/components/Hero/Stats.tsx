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
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {statsList.map((item) => {
            return (
              <div
                key={item}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp
                  end={Number(stats(`${item}.num`))}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={
                    String(stats(`${item}.text`)).length < 15
                      ? "max-w-[100px] leading-snug text-white/80"
                      : "max-w-[150px] leading-snug text-white/80"
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
