import BlurImage from "../components/BlurImage";
import Link from "next/link";
import usePhoto from "../utils/usePhoto";
import usePhotos from "../utils/usePhotos";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import Photo from "@/components/frame";
import { Box, Button, Container, Grid, Modal } from "@mui/material";
import Header from "@/components/Header";
// const user = supabase.auth.user()

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
}


// import  UserResponse  from "../generated-types"

export default function Home() {
  const router = useRouter();
  const { photoId } = router.query;


  const [photo, photoIsLoading] = usePhoto(photoId);

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  useEffect(() => {
    if (photo) handleOpen()
    else handleClose()
  }, [photo])

  const [photos, isLoading] = usePhotos();



  return (

    <Container fixed>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style }}>
          <Photo photo={photo} />
        </Box>

      </Modal>
      <Header />
      <Grid container spacing={2}>
        {isLoading ? (
          <p> Loading </p>
        ) : (
          photos.map(({ id, url }: any) => (
            <Grid item xs={4}>
              <Link
                href={{ pathname: "/", query: { photoId: id } }}
                as={`/p/${encodeURI(id)}`}
                shallow
                scroll={false}
              >
                <BlurImage
                  alt=""
                  src={url}
                  height={500}
                  width={500}
                  objectFit="cover"
                />
              </Link>
            </Grid>
          ))
        )}
      </Grid>
    </Container>

  );
}
