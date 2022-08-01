import React from "react";

import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { unstable_HistoryRouter, useLocation } from "react-router-dom";
import UseFirebase from "../../Hook/UseFirebase";
import { Box, Typography } from "@mui/material";
const Login = () => {
  const navigate = useNavigate();

  const { signInWithGoogle } = UseFirebase();
  const loginWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        navigate("/classRoutines");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Box
        sx={{
          p: 5,
        }}
      >
        <Typography variant="h3">Welcome to our application</Typography>

        <Stack spacing={2} direction="row">
          <Typography
            sx={{ textAlign: "center", background: "red" }}
            variant="h5"
          >
            Please Login
          </Typography>

          <Button sx={{}} onClick={loginWithGoogle} variant="contained">
            Contained
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default Login;
