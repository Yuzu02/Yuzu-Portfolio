interface Service {
  num: number | string;
  text: string;
  description: string;
  href?: string;
}

const ServicesList: Service[] = [
  {
    num: 1,
    text: "Web Development",
    description:
      "I can build you a website from scratch or maintain an existing one. I use the latest technologies to provide you with the best solutions.",
    href: "",
  },

  {
    num: 2,
    text: "API Development",
    description:
      "Develop and maintain Restful APIs for your web or mobile applications. I can also help you with the integration of third-party APIs.",
    href: "",
  },

  {
    num: 3,
    text: "Automatization",
    description:
      "Automate your business processes and save time and money in the long run by using the latest technologies.",
    href: "",
  },

  {
    num: 4,
    text: "Consulting",
    description:
      "I can help you with your technical decisions and provide you with the best solutions for your business.",
    href: "",
  },
];

export default ServicesList;
