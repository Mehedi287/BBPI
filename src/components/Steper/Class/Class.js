import { TextField } from "@mui/material";
import React from "react";
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';

import { useState } from "react";
import { createTheme, ThemeProvider, colors } from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import MuiDateTimePicker from "./MuiDateTimePicker";
const Class = ({ register, errors }) => {
  const [value, setValue] = React.useState(null);

  const [selectedTime, setSelectedTime] = useState(null)

  console.log({
    selectedTime: selectedTime && selectedTime.toLocaleTimeString(),
  })

  return (
    <div>
      {/* register your input into the hook by invoking the "register" function */}

      <TextField
        defaultValue="test"
        {...register("example")}
        label="Filled success"
        variant="filled"
        color="success"
        focused
      />
      <br />
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      <br />
      {errors.exampleRequired && <span>This field is required</span>}


      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className='App'>
          <MuiDateTimePicker />
        </div>
      </LocalizationProvider>
    </div>

  );
};

export default Class;
