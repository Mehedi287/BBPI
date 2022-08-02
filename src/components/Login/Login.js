import React from "react";

import { NavLink, useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { unstable_HistoryRouter, useLocation } from "react-router-dom";
import UseFirebase from "../../Hook/UseFirebase";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
const Login = () => {
  const location = useLocation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="h-screen  flex items-center justify-center flex-col ">
      <div className="w-11/12	shadow-md md:w-1/3 md:h-3/5 px-3 py-8 rounded-lg">
        <h2 className="font-bold text-xl mb-2">Login Form</h2>
        <hr className="w-10   border-t-4 rounded-full" />
        <form className="flex flex-col">
          <input
            className="placeholder-gray-500 bg-transparent border border-gray-300 mt-4 px-4 py-2 rounded-full"
            placeholder="Email"
            label="Email"
            variant="standard"
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && <div>This filed is required</div>}
          <input
            className="placeholder-gray-500 bg-transparent border border-gray-300 mt-4 px-4 py-2 rounded-full"
            placeholder="Password"
            label="Password"
            name="password"
            variant="standard"
            {...register("password", { required: true, minLength: 6 })}
          />
          {errors.password && <div>password must be 6 length</div>}
          <div>
            <input
              className="my-3 text-lg py-2 font-bold px-6 border border-gary-300 text-black rounded-full cursor-pointer transition-all hover:shadow-md"
              type="submit"
              value="Login"
            />
          </div>
        </form>

        <Button
          sx={{
            px: 3,
            py: 1.3,
            color: "gray",
            borderRadius: 30,
            border: "1px solid rgba(0, 0, 0,.3)",
          }}
          to="/signUp"
          component={NavLink}
        >
          Dont have Account?{" "}
        </Button>
      </div>
    </div>
  );
};

export default Login;
