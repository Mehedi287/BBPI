import React from "react";
import { useForm } from "react-hook-form";
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { TextField } from "@mui/material";
import { useState } from "react";
import { createTheme, ThemeProvider, colors } from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import MuiDateTimePicker from "./MuiDateTimePicker";
const Class = () => {
  const [value, setValue] = React.useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [selectedTime, setSelectedTime] = useState(null)

  console.log({
    selectedTime: selectedTime && selectedTime.toLocaleTimeString(),
  })
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      s
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className='App'>
          <MuiDateTimePicker />
        </div>
      </LocalizationProvider>
    </div>

  );
};

export default Class;
