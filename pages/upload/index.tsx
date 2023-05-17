import React, { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import { Button, Container, Grid } from "@mui/material";
import Header from "@/components/Header";
import { useRouter } from "next/router";

export default function Upload() {
  const [uploading, setUploading] = useState(false);

  const uploadAvatar = async (event: any) => {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error: uploadError, data } = await supabase.storage
        .from("photos")
        .upload(filePath, file, { upsert: true });

      if (uploadError) {
        throw uploadError;
      }
      const { publicURL }: any = supabase.storage
        .from("photos")
        .getPublicUrl(filePath);
      const newItem = await supabase.from("photos").insert({
        user_id: "503d4ef9-01ec-4564-aa11-1f88f170462f",
        url: publicURL,
      }).single;

      // useRouter().push(`/p/${newItem.data["id"]}`)
    } catch (error: any) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <Container fixed>
      <Header />
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <label htmlFor="contained-button-file">
          <input
            style={{
              visibility: "hidden",
              position: "absolute",
            }}
            type="file"
            id="contained-button-file"
            accept="image/*"
            onChange={uploadAvatar}
            disabled={uploading}
          />
          <Button variant="contained" component="span">
            {uploading ? "Uploading ..." : "Upload"}
          </Button>
        </label>
      </Grid>
    </Container>
  );
}
