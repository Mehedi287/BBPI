import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const Info = ({ errors, register }) => {
  return (
    <div>
      <div className="text-xl text-center my-5">Fill up form to  </div>

      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <TextField
            {...register("institute", {
              required: true,
            })}
            id="standard-search"
            label="Institute Name"
            type="search"
            variant="standard"
            sx={{ width: '100%' }}
            color="success"
          />
          <div>
            <span className="text-red-700">
              {errors.institute?.type === "required" &&
                "*institute name is required"} </span>
          </div>

        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            {...register("department", { required: true })}
            id="standard-search"
            label="Department"
            type="search"
            variant="standard"
            color="success"
            sx={{ width: '100%' }}
          />

          <div>
            <span className="text-red-700">
              {errors.department?.type === "required" &&
                "*department name is required"} </span>
          </div>

        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            {...register("semester", { required: true })}
            id="standard-search"
            label="Semester"
            type="search"
            variant="standard"
            color="success"
            sx={{ width: '100%' }}
          />


          <div>
            <span className="text-red-700">
              {errors.semester && <p>*Semester name is required</p>} </span>
          </div>

        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            {...register("shift", { required: true })}
            id="standard-search"
            label="Shift"
            type="search"
            variant="standard"
            color="success"
            sx={{ width: '100%' }}
          />


          <div>
            <span className="text-red-700">
              {errors.shift && <p>*Shift name is required</p>}</span>
          </div>

        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            {...register("section", { required: true })}
            label="Section"
            variant="standard"
            color="success"
            type="search"
            id="standard-search"
            sx={{ width: '100%' }}
          />

          <div>
            <span className="text-red-700">
              {errors.section && <p>*Section name is required</p>}
            </span>
          </div>

        </Grid>
      </Grid>
    </div >
  );
};

export default Info;
