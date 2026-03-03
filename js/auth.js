import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { CONFIG } from "./config.js";

export const supabase = createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_ANON_KEY);

export async function requireSessionOrRedirect() {
  const { data } = await supabase.auth.getSession();
  if (!data.session) {
    window.location.href = "./conta.html";
    return null;
  }
  return data.session;
}

export async function signOut() {
  await supabase.auth.signOut();
  window.location.href = "./conta.html";
}
