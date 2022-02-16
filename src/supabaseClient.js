import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://magomretapvzwepvnkiv.supabase.co",
  `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
   eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hZ29tcmV0YXB2endlcHZua2l2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ2NjgwMzgsImV4cCI6MTk2MDI0NDAzOH0.
   f2Cmnv4Fxwsp1DdV-zujupT9cGgj9Q-Cg0AMlwkUWGk`
);
