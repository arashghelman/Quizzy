import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://magomretapvzwepvnkiv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hZ29tcmV0YXB2endlcHZua2l2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NDY2ODAzOCwiZXhwIjoxOTYwMjQ0MDM4fQ.B3byfneO5brvG0O0O3os7OTMdrhEiC1igsWrvCLrw9U"
);
