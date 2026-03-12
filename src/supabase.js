import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zvzqqrwaphonkofquapv.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2enFxcndhcGhvbmtvZnF1YXB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwMTM0ODgsImV4cCI6MjA4ODU4OTQ4OH0.NX9B46sizaY0vz08nsjQ7IBLXkZGjKAeiXxu3U2Ze0k";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);