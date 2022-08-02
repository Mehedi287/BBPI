import { Grid, TextField } from "@mui/material";
import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";

import { useState } from "react";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import MuiDateTimePicker from "./MuiDateTimePicker";
const Class = ({ register, errors }) => {
  const [selectedTime, setSelectedTime] = useState(null);

  console.log({
    selectedTime: selectedTime && selectedTime.toLocaleTimeString(),
  });

  return (
    <div>
      {/* register your input into the hook by invoking the "register" function */}
      <h2 className="text-2xl text-center py-5"> Enter Class routine</h2>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <TextField
            {...register("subjectName", {
              required: true,
            })}
            id="standard-search"
            label="Subject Name"
            type="name"
            variant="standard"
            sx={{ width: "100%" }}
            color="success"
          />
          <div>
            <span className="text-red-700">
              {errors.subjectName?.type === "required" &&
                "*institute name is required"}{" "}
            </span>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            {...register("subjectCode", { required: true })}
            label="Subject Code"
            type="number"
            variant="standard"
            color="success"
            sx={{ width: "100%" }}
          />

          <div>
            <span className="text-red-700">
              {errors.department?.type === "required" &&
                "*department name is required"}{" "}
            </span>
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
            sx={{ width: "100%" }}
          />

          <div>
            <span className="text-red-700">
              {errors.semester && <p>*Semester name is required</p>}{" "}
            </span>
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
            sx={{ width: "100%" }}
          />

          <div>
            <span className="text-red-700">
              {errors.shift && <p>*Shift name is required</p>}
            </span>
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
            sx={{ width: "100%" }}
          />

          <div>
            <span className="text-red-700">
              {errors.section && <p>*Section name is required</p>}
            </span>
          </div>
        </Grid>
      </Grid>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MuiDateTimePicker />
      </LocalizationProvider>
    </div>
  );
};

export default Class;
