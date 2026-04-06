import { LanguageProvider } from "@/components/LanguageProvider";
import LandingPage from "@/components/LandingPage";

export default function Home() {
  return (
    <LanguageProvider>
      <LandingPage />
    </LanguageProvider>
  );
}
