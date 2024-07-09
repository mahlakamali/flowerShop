import React from "react";
import Banner from "./Banner";
import GoodSlider from "./GoodSlider";
import Collection from "./Collection";
import Asks from "./Asks";

import { Box, Stack } from "@mui/material";

export default function Home() {
  return (
    <>
      {/* banner  */}
      <Banner />
      <br /> <br /> <br /> <br />
      {/* what we good at slider  */}
      <GoodSlider />
      <Stack
        height={"400px"}
        sx={{
          backgroundAttachment: "fixed",
          backgroundImage: `url(/public/assets/Floral-Arrangements.jpg)`,
          backgroundSize:'cover'
        }}
      ></Stack>
      {/* collection slider */}
      <br /> <br /> <br />
      <Collection />
      <br />
      {/* asks */}
      <Asks />
      <Stack
        height={"400px"}
        sx={{
          backgroundAttachment: "fixed",
          backgroundImage: `url(/public/assets/Woman.jpg)`,
             backgroundSize:'cover'
        }}
      ></Stack>
    </>
  );
}
