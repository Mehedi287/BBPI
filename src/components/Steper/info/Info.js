import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const Info = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form className="from" onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <TextField
            {...register("Institute", {
              required: true,
            })}
            id="standard-search"
            label="Search field"
            type="search"
            variant="standard"
            sx={{ m: 1 }}
            color="success"
          />
          {errors.Institute?.type === "required" &&
            "institute name is required"}
          <br />

          <TextField
            {...register("Department", { required: true })}
            id="standard-search"
            label="Department"
            type="search"
            variant="standard"
            color="success"
            sx={{ m: 1 }}
          />
          {errors.Department && (
            <Typography>Department name is required</Typography>
          )}
          <br />

          <TextField
            {...register("Semester", { required: true })}
            id="standard-search"
            label="Semester"
            type="search"
            variant="standard"
            color="success"
            sx={{ m: 1 }}
          />
          {errors.Semester && <p>Semester name is required</p>}
          <br />

          <TextField
            {...register("Shift", { required: true })}
            id="standard-search"
            label="Shift"
            type="search"
            variant="standard"
            color="success"
            sx={{ m: 1 }}
          />
          {errors.Shift && <p>Shift name is required</p>}
          <br />
          <TextField
            {...register("Section", { required: true })}
            label="Section"
            variant="standard"
            color="success"
            type="search"
            id="standard-search"
            sx={{ m: 1 }}
          />

          {errors.Section && <p>Section name is required</p>}
          <br />
          <p>{errors.mail?.message}</p>
          <br />
          <TextField value={"next"} type={"submit"}></TextField>
        </Box>
      </form>
    </div>
  );
};

export default Info;
