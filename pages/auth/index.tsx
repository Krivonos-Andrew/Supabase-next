import { useRouter } from "next/router";
import { forwardRef, useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import { Box, Button, Container, Grid, Snackbar, TextField, Typography } from "@mui/material";

import Stack from '@mui/material/Stack';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Header from "@/components/Header";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Auth() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [isRegister, setIsRegister] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [open, setOpen] = useState(false)
  const [error, setError] = useState("")


  const handleAction = async () => {
    try {
      setLoading(true);
      if (isRegister) {
        const { data, error } = await supabase.auth.signUp({
          email: email,
          password: password,
          options: {
            data: {
              name_first: firstName,
              name_last: lastName,
            },
          },
        })
        if (error) {
          setError(error.message)
          setOpen(true)
          throw error
        }
        await supabase.from("users").insert([
          {
            id: data.user?.id,
            user_id: data.user?.id,
            email: email,
            name_first: firstName,
            name_last: lastName,
          },
        ]);
        router.push("/")
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        if (error) {
          setError(error.message)
          setOpen(true)
          throw error
        }
        router.push("/")
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container fixed>
      <Snackbar open={open} autoHideDuration={6000}>
        <Alert severity="error">{error}</Alert>
      </Snackbar>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h2" component="h1" gutterBottom>
          <a style={{
            textDecoration: "none",
            color: "black"
          }} href="/">NextGram</a>
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          Auth
        </Typography>
      </Box>
      <Grid
        container
        direction="column"
        alignItems={"center"}
      >
        <TextField
          id="standard-basic"
          label="Your email"
          variant="standard"
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Your password"
          variant="standard"
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isRegister ? (
          <>
            <TextField
              id="standard-basic"
              label="First name"
              variant="standard"
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              id="standard-basic"
              label="Last name"
              variant="standard"
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

          </>
        ) : (
          <></>
        )}
        <Button onClick={handleAction} variant="text">
          {loading ? "Loading" : isRegister ? "Sign up" : "Sign in"}
        </Button>

        <Button onClick={(e) => {
          setIsRegister(!isRegister)
        }} variant="text"
        >
          {!isRegister ? "Still have no account" : "Already have no account"}
        </Button>
      </Grid>
    </Container>
  );
}
