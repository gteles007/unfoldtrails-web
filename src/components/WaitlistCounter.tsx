"use client";

import { useEffect, useState } from "react";
import { getWaitlistCount } from "@/app/actions";
import { useLanguage } from "./LanguageProvider";

export default function WaitlistCounter() {
  const { t } = useLanguage();
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    getWaitlistCount().then(setCount);
  }, []);

  if (count === null || count === 0) return null;

  return (
    <p className="mt-4 text-sm text-purple-300/80">
      {t.waitlistCounter.replace("{count}", count.toString())}
    </p>
  );
}
