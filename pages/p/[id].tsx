import Photo from "../../components/frame";
import React from "react";
import usePhoto from "@/utils/usePhoto";
import { useRouter } from "next/router";
import { Box, CircularProgress, Container, Grid, IconButton } from "@mui/material";
import Header from "@/components/Header";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

export default function PhotoPage() {
  const router = useRouter();
  const { id } = router.query;
  const [photo, photoIsLoading] = usePhoto(id);

  return (
    <Container fixed>
      <Header />
      {photo ? (
        <Grid container spacing={2}>
          <Grid item xs={1}>
            <IconButton
              onClick={() => {
                router.push(`/p/${photo.id - 1}`)
              }}>
              <ArrowBack />
            </IconButton>

          </Grid>
          <Grid item xs={10}>
            <Photo photo={photo} />
          </Grid>
          <Grid item xs={1}>
            <IconButton
              onClick={() => {
                router.push(`/p/${photo.id + 1}`)
              }}>
              <ArrowForward />
            </IconButton>
          </Grid>
        </Grid>
      ) : (
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <CircularProgress disableShrink />
        </Box>
      )
      }
    </Container>
  );
}
