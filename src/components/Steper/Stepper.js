import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import Class from "./Class/Class";

import Info from "./info/Info";
import { Container } from "@mui/material";
import { useDispatch } from 'react-redux'
import { addClasses, addInfo } from "../../ManageState/DataSlice/dataSlice";
const Stepper = () => {
  const { register, handleSubmit, watch, setValue, reset, formState: { errors }, } = useForm();
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = React.useState(0);

  const onSubmit = ({ subjectName, subjectCode, teacherName, day, startTime, endTime }) => {
    if (activeStep) {
      console.log(typeof new Date(startTime).toString(),);
      const data = {
        subjectName, subjectCode, teacherName, day, startTime: new Date(startTime).toString(), endTime: new Date(endTime).toString()
      }
      dispatch(addClasses(data))
      reset();

    }
  };

  const steps = [
    {
      element: <Info errors={errors} watch={watch} register={register}></Info>,
    },
    {
      element: <Class errors={errors} watch={watch} setValue={setValue} register={register}></Class>,
    },
  ];

  const maxSteps = steps.length;

  const handleNext = () => {
    if (activeStep === 0) {
      console.log(watch());
      if (
        watch('institute')?.length &&
        watch('department')?.length &&
        watch('semester')?.length &&
        watch('shift')?.length &&
        watch('section')?.length
      ) {
        dispatch(addInfo({
          institute: watch('institute'),
          department: watch('department'),
          semester: watch('semester'),
          shift: watch('shift'),
          section: watch('section'),
        }))
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      } else {
        onSubmit(

          <div className=""></div>
        )
      }
      return
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>

        <Box className="h-screen flex flex-col justify-between ">

          <Box >
            {steps[activeStep].element}
          </Box>
          <MobileStepper
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            sx={{ mt: 2 }}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
                type={activeStep === 0 ? 'submit' : 'button'}
              >
                Next
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}

              >
                Back
              </Button>
            }
          />
        </Box>
      </form>
    </Container>
  );
};

export default Stepper;
