import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://zbhierpdyhrythbiiivk.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpiaGllcnBkeWhyeXRoYmlpaXZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA0MzgwMTksImV4cCI6MTk5NjAxNDAxOX0.CLZ8F7IGnLBWswYRrZ-zK_y26WkLnGWF27zfOfB3uVY"
);
