import { redirect } from "next/navigation";

export default function RootPage() {
  if (typeof navigator === "undefined") {
    redirect("/en");
  }
  const userLanguage = navigator.language;

  if (userLanguage.startsWith("es")) {
    redirect("/es");
  } else {
    redirect("/en");
  }
}
