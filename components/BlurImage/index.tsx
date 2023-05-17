import Image from "next/image";
// import styles from "./styles.module.css";
import { useState } from "react";
import cn from "clsx";

export default function BlurImage(props: any) {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      {...props}

      onLoadingComplete={() => setLoading(false)}
    />
  );
}
