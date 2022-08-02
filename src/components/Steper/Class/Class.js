import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';

import { useState } from "react";
import { createTheme, ThemeProvider, colors } from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import MuiDateTimePicker from "./MuiDateTimePicker";
const Class = ({ register, errors, watch, setValue }) => {

  // const [selectedTime, setSelectedTime] = useState(null)

  // console.log({
  //   selectedTime: selectedTime && selectedTime.toLocaleTimeString(),
  // })
  // 
  // handle Day input
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = [
    "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
  ];
  // const handleChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event; 
  // };


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
            sx={{ width: '100%' }}
            color="success"
          />
          <div>
            <span className="text-red-700">
              {errors.subjectName?.type === "required" &&
                "*institute name is required"} </span>
          </div>

        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            {...register("subjectCode", { required: true })}

            label="Subject Code"
            type="number"
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
            {...register("teacherName", { required: true })}

            label="Teacher Name"
            type="name"
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
          <FormControl variant="standard" sx={{ width: '100%' }}>
            <InputLabel id="demo-simple-select-filled-label">Select day</InputLabel>
            <Select
              labelId="demo-multiple-name-labels"
              id="demo-multiple-name"
              sx={{ p: 0 }}
              label="Select Day"
              {...register("day", {
                required: true,
              })}
              value={watch('day') ? watch('day') : ''}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

        </Grid>
        <Grid item xs={12} md={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MuiDateTimePicker register={register} label="Start Time" watch={watch} setValue={setValue} name='startTime' />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} md={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MuiDateTimePicker label='End Time' register={register} watch={watch} setValue={setValue} name='endTime' />
          </LocalizationProvider>
        </Grid>

      </Grid>


    </div>

  );
};

export default Class;
