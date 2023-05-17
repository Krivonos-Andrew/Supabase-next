import router, { useRouter } from "next/router";
import { Typography, Box, Grid, Link as MLink, Button } from "@mui/material";
import { supabase } from "@/utils/supabaseClient";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useEffect, useState } from "react";





export default function Header() {
  const router = useRouter()
  let [user, userSetState] = useState()
  // useEffect(() => userSetState(supabase.auth.user()), [])


  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/")
  }

  return (
    <Grid
      container
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Grid item >
        <Typography variant="h3" component="h1" gutterBottom>
          <a style={{
            textDecoration: "none",
            color: "black"
          }} href="/">NextGram</a>
        </Typography>
      </Grid>
      <Grid item>
        <Button variant="text" onClick={() => router.push("/upload")}>Upload
        </Button>
      </Grid>
      <Grid item>
        {(user && (
          <>
            <Typography variant="h3" component="div" gutterBottom>
              samficher1979@gmail.com
            </Typography>

            <Typography variant="subtitle2" component="div" gutterBottom>
              <MLink href="#"
                style={{
                  textDecoration: "none",
                  color: "black"
                }}
                onClick={handleLogout}>
                Sign out
              </MLink>
            </Typography>


          </>
        )) ||
          <Typography variant="subtitle2" component="div" gutterBottom>
            <MLink href="/auth"
              style={{
                textDecoration: "none",
                color: "black"
              }}
              onClick={handleLogout}>
              Sign in
            </MLink>
          </Typography>
        }
      </Grid>
    </Grid>
  )
}