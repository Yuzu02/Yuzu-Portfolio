// Components
import HeroText from "@/components/Hero/HeroText";
import Social from "@/components/Hero/Social";
import Photo from "@/components/Hero/Photo";
import Stats from "@/components/Hero/Stats";
import DownloadCV from "@/components/Hero/DownloadCV";

export default function Home() {
  /*  Before the change to the DownloadCV component
            <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 hover:text-white"
                >
                  <span className="mr-2 dark:hover:font-semibold">
                    {Hero("DownloadCV")}
                  </span>
                  <FiDownload className="text-xl " />
                </Button>
  */

  /* Before the change to the Hero component 
                <span className="text-xl">{Hero("heroTitle")}</span>
            <h1 className="h1 mb-6">
              {Hero("heroSubTitle")}
              <br /> <span className="text-accent"> {Hero("heroName")}</span>
            </h1>
            <p className="max-w-[500px] mb-9 dark:text-white/80 text-primary">
              {Hero("heroPhrase")}
            </p>
  */

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div
          className="flex flex-col xl:flex-row items-center justify-between xl:pt-8
        xl:pb-2"
        >
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <HeroText />
            {/* btn & socials*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <DownloadCV />
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-white dark:hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Photo*/}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
