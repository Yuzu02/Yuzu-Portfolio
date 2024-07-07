import { redirect } from "next/navigation";

export default function RootPage() {
  const userLanguage = navigator.language;

  if (userLanguage.startsWith("es")) {
    redirect("/es");
  } else {
    redirect("/en");
  }
}
