"use server";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function joinWaitlist(email: string): Promise<{ status: "success" | "duplicate" | "error" }> {
  const trimmed = email.trim().toLowerCase();
  if (!trimmed) return { status: "error" };

  const { error } = await supabase.from("waitlist").insert({ email: trimmed });

  if (error) {
    if (error.code === "23505") return { status: "duplicate" };
    console.error("Waitlist error:", error.code, error.message);
    return { status: "error" };
  }

  return { status: "success" };
}

export async function getWaitlistCount(): Promise<number> {
  const { data, error } = await supabase.rpc("waitlist_count");
  if (error || data === null) return 0;
  return data;
}
