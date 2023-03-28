import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PersonalDetails from "./PersonalDetails";
import Qualifications from "./Qualifications";
import Experience from "./Experience";
import { useDispatch } from "react-redux";
import { personalData } from "../../Slice/Slice";
const steps = ["Personal Details", "Qualifications", "Experience"];

export default function Checkout() {
  const dispatch = useDispatch();
  const [userDetailObject, setUserDetailObject] = useState();

  const [activeStep, setActiveStep] = React.useState(0);
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <PersonalDetails handleChangeObject={handleChangeObject} />;
      case 1:
        return <Qualifications handleChangeObject={handleChangeObject} />;
      case 2:
        return <Experience handleChangeObject={handleChangeObject} />;
      default:
        throw new Error("Unknown step");
    }
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const onSubmit = () => {
    handleNext();
    dispatch(personalData(userDetailObject));
  };

  const handleChangeObject = (data) => {
    setUserDetailObject(data);
  };

  return (
    <>
      <Container component="main" maxWidth="sm" sx={{ mt: 4 }}>
        <Paper
          variant="outlined"
          sx={{
            my: { xs: 4, md: 8 },
            p: { xs: 3, md: 4 },
            backgroundColor:'blueviolet',
            background:"aqua"
          }}
        >
          <Typography component="h1" variant="h4" align="center">
            User Personal Details
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Your Information has been Stored in The console.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button
                    variant="contained"
                    onClick={handleBack}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={onSubmit}
                  sx={{ mt: 3, ml: 1 }}
                  // onChange={onSubmit}
                >
                  {activeStep === steps.length - 1 ? "Submit" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </>
  );
}
