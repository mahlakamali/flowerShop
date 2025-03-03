import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Input, Stack } from "@mui/material";
import useForm from "../../../Utils/useForm";
import fetchData from "../../../Utils/fetchData";

export default function Register({ handlePageType }) {
  const [field, handleChange] = useForm();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        import.meta.env.VITE_API + "auth/local/register",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(field),
        }
      );
      const data = await res.json();
      if (data?.jwt) {
        handlePageType();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      sx={{ bgcolor: "rgba(0,0,0,0.5)" }}
      component="main"
      maxWidth={"xs"}
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "pink" }}>
          <LockOpenIcon />
        </Avatar>
        <Typography component="h1" sx={{ color: "white", fontFamily:"jaques francois"}} variant="h5">
          Register
        </Typography>
        <Stack
          gap={"10px"}
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <Input
            required
            fullWidth
            id="username"
            onChange={handleChange}
            type="text"
            label="Username"
            name="username"
            autoFocus
            placeholder="Username"
            sx={{
              bgcolor: "rgba(255,255,255,1)",
              p: "5px 10px",
              borderRadius: "5px",
              fontFamily:"jaques francois"
            }}
          />
          <Input
            required
            fullWidth
            id="email"
            onChange={handleChange}
            type="email"
            label="Email Address"
            name="email"
            autoFocus
            placeholder="Email Address"
            sx={{
              bgcolor: "rgba(255,255,255,1)",
              p: "5px 10px",
              borderRadius: "5px",
              fontFamily:"jaques francois"
            }}
          />
          <Input
            required
            fullWidth
            id="password"
            onChange={handleChange}
            type="password"
            label="Password"
            name="password"
            autoFocus
            placeholder="Password"
            sx={{
              bgcolor: "rgba(255,255,255,1)",
              p: "5px 10px",
              borderRadius: "5px",
              fontFamily:"jaques francois"
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item>
              <Button onClick={handlePageType} sx={{ color: "white" }}>
                {"Don't have an account? Log In"}
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Container>
  );
}
