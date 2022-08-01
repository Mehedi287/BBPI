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

const Stepper = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = [
    {
      element: <Info errors={errors} register={register}></Info>,
    },
    {
      element: <Class errors={errors} register={register}></Class>,
    },
  ];

  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const onSubmit = (data) => console.log(data);
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="text-green-400">dfkdjd</div>
        <Box sx={{ flexGrow: 1 }}>
          <Paper
            square
            elevation={1}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
          </Paper>
          <Box >
            {steps[activeStep].element}
          </Box>
          <MobileStepper
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
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
