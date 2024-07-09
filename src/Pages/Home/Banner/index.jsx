import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import fetchData from "../../../Utils/fetchData";
import { Atom } from "react-loading-indicators";
import Loading from "../../../Components/Loading";

export default function Banner() {
  const [banner, setBanner] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetchData("banners?populate=*");
      setBanner(res);
    })();
  }, []);
  return (
    <>
      <Stack direction={"row"} width={"100%"} height={"90vh"}>
        {/* text */}
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          width="50%"
          sx={{ px: "20px", bgcolor: "bglight" }}
        >
          <Stack gap={"20px"}>
            <Typography
              fontFamily={"jaques francois"}
              component={"h1"}
              fontSize={"4em"}
              color={"txt"}
              sx={{ fontSize: { md: "50px", sm: "no-wrap", sm: "50px" } }}
            >
              The rare heavenly
              <br />
              fresh flowers
            </Typography>
            <Typography
              sx={{ fontSize: { md: "20px" } }}
              fontSize={"1.5em"}
              fontFamily={"jaques francois"}
              color={"txt"}
            >
              You can find the rarest and most beautiful
              <br /> types of flowers here!
            </Typography>
          </Stack>
        </Stack>
        <Stack width="50%">
          {banner ? (
            <img
              width={"100%"}
              height={"100%"}
              alt={banner.attributes?.name}
              src={
                import.meta.env.VITE_URL +
                banner[0]?.attributes?.image?.data?.attributes?.url
              }
            />
          ) : (
            <Loading />
          )}
        </Stack>
      </Stack>
    </>
  );
}
