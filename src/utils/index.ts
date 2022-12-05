import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://oxrwnfzebsivkjjpljmx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94cnduZnplYnNpdmtqanBsam14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE0MTQ4NDYsImV4cCI6MTk3Njk5MDg0Nn0.rnKYJsAMRv5Oo6xKMIfXXM9RrvhRDEBGmv50MzYpCuc"
);
