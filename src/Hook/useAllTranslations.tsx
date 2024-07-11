import { useTranslations } from "next-intl";

// Future Hook to use all translations in the app without importing useTranslations in every component and using variables instead of t("").

export const useAllTranslations = () => {
  const t = useTranslations();

  return {
    Header: {
      hireMe: t("Header.hireMe"),
      logo: t("Header.logo"),
      logoPoint: t("Header.logoPoint"),
    },
    HeaderMenu: {
      logo: t("HeaderMenu.logo"),
      logoPoint: t("HeaderMenu.logoPoint"),
      home: t("HeaderMenu.home"),
      services: t("HeaderMenu.services"),
      resume: t("HeaderMenu.resume"),
      work: t("HeaderMenu.work"),
      contact: t("HeaderMenu.contact"),
      LanguagePicker: {
        language: t("HeaderMenu.LanguagePicker.language"),
        languages: {
          en: t("HeaderMenu.LanguagePicker.languages.en"),
          es: t("HeaderMenu.LanguagePicker.languages.es"),
        },
      },
      Theme: {
        toggleTheme: t("HeaderMenu.Theme.toggleTheme"),
        light: t("HeaderMenu.Theme.light"),
        dark: t("HeaderMenu.Theme.dark"),
        system: t("HeaderMenu.Theme.system"),
      },
    },
    Hero: {
      heroTitle: t("Hero.heroTitle"),
      heroSubTitle: t("Hero.heroSubTitle"),
      heroName: t("Hero.heroName"),
      heroPhrase: t("Hero.heroPhrase"),
      DownloadCV: t("Hero.DownloadCV"),
    },
    Stats: {
      statsTitle: t("Stats.statsTitle"),
    },
    statsList: {
      YearsExperience: {
        num: t("statsList.YearsExperience.num"),
        text: t("statsList.YearsExperience.text"),
      },
      ProjectsCompleted: {
        num: t("statsList.ProjectsCompleted.num"),
        text: t("statsList.ProjectsCompleted.text"),
      },
      TechMastered: {
        num: t("statsList.TechMastered.num"),
        text: t("statsList.TechMastered.text"),
      },
      CodeCommits: {
        num: t("statsList.CodeCommits.num"),
        text: t("statsList.CodeCommits.text"),
      },
    },
    ServicesTabs: {
      title: t("ServicesTabs.title"),
      web: t("ServicesTabs.web"),
      api: t("ServicesTabs.api"),
      automatization: t("ServicesTabs.automatization"),
      consulting: t("ServicesTabs.consulting"),
    },
    servicesList: {
      Service1: {
        num: t("servicesList.Service1.num"),
        text: t("servicesList.Service1.text"),
        description: t("servicesList.Service1.description"),
      },
      Service2: {
        num: t("servicesList.Service2.num"),
        text: t("servicesList.Service2.text"),
        description: t("servicesList.Service2.description"),
      },
      Service3: {
        num: t("servicesList.Service3.num"),
        text: t("servicesList.Service3.text"),
        description: t("servicesList.Service3.description"),
      },
      Service4: {
        num: t("servicesList.Service4.num"),
        text: t("servicesList.Service4.text"),
        description: t("servicesList.Service4.description"),
      },
    },
    Resume: {
      Education: t("Resume.Education"),
      Experience: t("Resume.Experience"),
      Skills: t("Resume.Skills"),
      About: t("Resume.About"),
    },
    About: {
      title: t("About.title"),
      description: t("About.description"),
    },
    AboutInfo: {
      Name: {
        fieldName: t("AboutInfo.Name.fieldName"),
        fieldValue: t("AboutInfo.Name.fieldValue"),
      },
      Phone: {
        fieldName: t("AboutInfo.Phone.fieldName"),
        fieldValue: t("AboutInfo.Phone.fieldValue"),
      },
      Experience: {
        fieldName: t("AboutInfo.Experience.fieldName"),
        fieldValue: t("AboutInfo.Experience.fieldValue"),
      },
      Telegram: {
        fieldName: t("AboutInfo.Telegram.fieldName"),
        fieldValue: t("AboutInfo.Telegram.fieldValue"),
      },
      Nationality: {
        fieldName: t("AboutInfo.Nationality.fieldName"),
        fieldValue: t("AboutInfo.Nationality.fieldValue"),
      },
      Freelance: {
        fieldName: t("AboutInfo.Freelance.fieldName"),
        fieldValue: t("AboutInfo.Freelance.fieldValue"),
      },
      Languages: {
        fieldName: t("AboutInfo.Languages.fieldName"),
        fieldValue: t("AboutInfo.Languages.fieldValue"),
      },
      Email: {
        fieldName: t("AboutInfo.Email.fieldName"),
        fieldValue: t("AboutInfo.Email.fieldValue"),
      },
    },
    Education: {
      icon: t("Education.icon"),
      title: t("Education.title"),
      description: t("Education.description"),
    },
    EducationList: {
      Education1: {
        number: t("EducationList.Education1.number"),
        institution: t("EducationList.Education1.institution"),
        degree: t("EducationList.Education1.degree"),
        date: t("EducationList.Education1.date"),
      },
    },
    Experience: {
      icon: t("Experience.icon"),
      title: t("Experience.title"),
      description: t("Experience.description"),
    },
    ExperienceList: {
      Experience1: {
        number: t("ExperienceList.Experience1.number"),
        company: t("ExperienceList.Experience1.company"),
        position: t("ExperienceList.Experience1.position"),
        date: t("ExperienceList.Experience1.date"),
        description: t("ExperienceList.Experience1.description"),
      },
      Experience2: {
        number: t("ExperienceList.Experience2.number"),
        company: t("ExperienceList.Experience2.company"),
        position: t("ExperienceList.Experience2.position"),
        date: t("ExperienceList.Experience2.date"),
        description: t("ExperienceList.Experience2.description"),
      },
    },
    Skill: {
      title: t("Skill.title"),
      description: t("Skill.description"),
    },
    Projects: {
      liveProject: t("Projects.liveProject"),
      githubRepo: t("Projects.githubRepo"),
      Project1: {
        num: t("Projects.Project1.num"),
        category: t("Projects.Project1.category"),
        title: t("Projects.Project1.title"),
        description: t("Projects.Project1.description"),
        stack: {
          "1": { name: t("Projects.Project1.stack.1.name") },
          "2": { name: t("Projects.Project1.stack.2.name") },
          "3": { name: t("Projects.Project1.stack.3.name") },
          "4": { name: t("Projects.Project1.stack.4.name") },
        },
        image: t("Projects.Project1.image"),
        live: t("Projects.Project1.live"),
        github: t("Projects.Project1.github"),
      },
      Project2: {
        num: t("Projects.Project2.num"),
        category: t("Projects.Project2.category"),
        title: t("Projects.Project2.title"),
        description: t("Projects.Project2.description"),
        stack: {
          "1": { name: t("Projects.Project2.stack.1.name") },
          "2": { name: t("Projects.Project2.stack.2.name") },
          "3": { name: t("Projects.Project2.stack.3.name") },
          "4": { name: t("Projects.Project2.stack.4.name") },
        },
        image: t("Projects.Project2.image"),
        live: t("Projects.Project2.live"),
        github: t("Projects.Project2.github"),
      },
      Project3: {
        num: t("Projects.Project3.num"),
        category: t("Projects.Project3.category"),
        title: t("Projects.Project3.title"),
        description: t("Projects.Project3.description"),
        stack: {
          "1": { name: t("Projects.Project3.stack.1.name") },
          "2": { name: t("Projects.Project3.stack.2.name") },
          "3": { name: t("Projects.Project3.stack.3.name") },
          "4": { name: t("Projects.Project3.stack.4.name") },
        },
        image: t("Projects.Project3.image"),
        live: t("Projects.Project3.live"),
        github: t("Projects.Project3.github"),
      },
    },
    Contact: {
      formData: {
        title: t("Contact.formData.title"),
        description: t("Contact.formData.description"),
        firstname: t("Contact.formData.firstname"),
        lastname: t("Contact.formData.lastname"),
        email: t("Contact.formData.email"),
        phone: t("Contact.formData.phone"),
        message: t("Contact.formData.message"),
        send: t("Contact.formData.send"),
      },
      formMessages: {
        success: t("Contact.formMessages.success"),
        error: t("Contact.formMessages.error"),
      },

      formErrorMessages: {
        required: t("Contact.formErrorMessages.required"),
        selectService: t("Contact.formErrorMessages.selectService"),
        invalidEmail: t("Contact.formErrorMessages.invalidEmail"),
        invalidPhone: t("Contact.formErrorMessages.invalidPhone"),
        minLength: t("Contact.formErrorMessages.minLength"),
        maxLength: t("Contact.formErrorMessages.maxLength"),
        invalidMessage: t("Contact.formErrorMessages.invalidMessage"),
        textAreaMinLength: t("Contact.formErrorMessages.textAreaMinLength"),
        textAreaMaxLength: t("Contact.formErrorMessages.textAreaMaxLength"),
      },

      ServicesTabs: {
        title: t("Contact.ServicesTabs.title"),
        web: t("Contact.ServicesTabs.web"),
        api: t("Contact.ServicesTabs.api"),
        automatization: t("Contact.ServicesTabs.automatization"),
        consulting: t("Contact.ServicesTabs.consulting"),
      },
      Phone: t("Contact.Phone"),
      Email: t("Contact.Email"),
      Telegram: t("Contact.Telegram"),
    },
    Toaster: {
      Form: {
        success: t("Toaster.Form.success"),
        error: t("Toaster.Form.error"),
        loading: t("Toaster.Form.loading"),
      },
      Theme: {
        light: t("Toaster.Theme.light"),
        dark: t("Toaster.Theme.dark"),
        system: t("Toaster.Theme.system"),
      },
      Download: {
        DownloadCV: t("Toaster.Download.DownloadCV"),
        downloadSuccess: t("Toaster.Download.downloadSuccess"),
        downloadError: t("Toaster.Download.downloadError"),
      },
    },
  };
};
