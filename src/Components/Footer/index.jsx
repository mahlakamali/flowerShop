import {
  Box,
  Button,
  Divider,
  Input,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import bg from "./../../../public/assets/bg.jpg";
import logo from "./../../../public/assets/logo.png";

import EmailIcon from "@mui/icons-material/Email";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import { Link } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function Footer() {
  return (
    <>
      <Stack
        width={"100%"}
        height={"400px"}
        p={" 50px 270px"}
        sx={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
      
        }}>
        <Divider />
        <Stack mt={"20px"} direction={"row"} gap={"50px"}>
          {/* first items */}
          <Stack gap={"10px"}>
            {/* logo */}
            <Stack>
              <img
                style={{ mixBlendMode: "darken" }}
                src={logo}
                alt='logo'
                width={"150px"}
                height={"50px"}
              />
            </Stack>
            <Typography sx={{fontFamily:'jaques francois'}}>
            We are glad that you chose our store <br/> to choose your beautiful moments
            </Typography>
          </Stack>
          {/* second */}
          <Stack gap={"10px"}>
            <Typography sx={{ fontSize: "1.5em", color: "txt",fontFamily:'jaques francois' }}>
              Get In Touch
            </Typography>
            <Input
            sx={{fontFamily:'jaques francois'}}
              value={"Iran,KhorasanRazavi"}
              readOnly
              disableUnderline={true}
              startAdornment={
                <InputAdornment position='start'>
               <LocationOnIcon/>
                </InputAdornment>
              }
            />
            <Input
            sx={{fontFamily:'jaques francois'}}
              value={"mahlakamalip@gmail.com"}
              readOnly
              disableUnderline={true}
              startAdornment={
                <InputAdornment position='start'>
                  <EmailIcon />
                </InputAdornment>
              }
            />
            <Input
            sx={{fontFamily:'jaques francois'}}
              value={"+98 9153276575"}
              readOnly
              disableUnderline={true}
              startAdornment={
                <InputAdornment position='start'>
                  <AddIcCallIcon />
                </InputAdornment>
              }
            />
          </Stack>
          {/* third */}
          <Stack >
            <Typography  sx={{ fontSize: "1.5em", color: "txt",fontFamily:'jaques francois' }}>
              Quick Links
            </Typography>
            <Link to={"/"}>
              <Button sx={{ color: "black",fontFamily:'jaques francois' }}>Home</Button>
            </Link>
            <Link to={"/products"}>
              <Button sx={{ color: "black",fontFamily:'jaques francois' }}>Products</Button>
            </Link>
            <Link to={"/Auth"}>
              <Button sx={{ color: "black",fontFamily:'jaques francois' }}>Login/Register</Button>
            </Link>
         
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
