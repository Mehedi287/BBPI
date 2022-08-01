import { TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
const Class = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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

        <input type="submit" />
      </form>
    </div>
  );
};

export default Class;
