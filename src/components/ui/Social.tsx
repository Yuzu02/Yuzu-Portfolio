import Link from "next/link";
import { FaInstagram, FaTwitter, FaDiscord, FaGithub } from "react-icons/fa";

const socials = [
  { name: "Github", icon: <FaGithub />, path: "https://github.com/Yuzu02" },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    path: "https://www.instagram.com/yuzuchi_02/",
  },
  {
    name: "Discord",
    icon: <FaDiscord />,
    path: "https://discordapp.com/users/483845680469901317",
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    path: "https://x.com/Yuzucchi0204",
  },
];

interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

export default function Social({
  containerStyles,
  iconStyles,
}: Readonly<SocialProps>) {
  return (
    <div className={containerStyles}>
      {socials.map((item) => (
        <Link key={item.name} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
}
