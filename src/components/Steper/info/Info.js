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
        <input
          placeholder="Institute"
          {...register("firstName", { required: true, Placeholder: "instute" })}
        />
        {errors.firstName?.type === "required" && "First name is required"}
        <br />
        <input
          placeholder="Department"
          {...register("lastName", { required: true })}
        />
        {errors.lastName && <p>Last name is required</p>}
        <br />
        <input
          placeholder="Semester"
          {...register("lastName", { required: true })}
        />
        {errors.lastName && <p>Last name is required</p>}
        <br />
        <input
          placeholder="shift"
          {...register("mail", { required: "Email Address is required" })}
        />
        <br />
        <input
          placeholder="Section"
          {...register("mail", { required: "Email Address is required" })}
        />
        <br />
        <p>{errors.mail?.message}</p>
        <br />
        <input value="Next" type="submit" />
      </form>
    </div>
  );
};

export default Info;
