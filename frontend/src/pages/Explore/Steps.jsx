import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import Options from "./Options";
import PropTypes from "prop-types";
export default function VerticalLinearStepper({
  name,
  image,
  desc,
  setLocation,
  setType,
  location,
  type,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  budget,
  setBudget,
}) {
  const [activeStep, setActiveStep] = React.useState(1);
  React.useEffect(() => {
    setStartDate("");
    setEndDate("");
    setType("solo");
    setActiveStep(0);
  }, [name, image, desc, location]);
  React.useEffect(() => {
    setLocation("");
  }, [name, image, desc]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const steps = [
    {
      label: "Enter your trip destination",
      description: (
        <>
          <TextField
            id="filled-basic"
            label="destination"
            variant="filled"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </>
      ),
    },
    {
      label: "Enter your trip duration(days)",
      description: (
        <>
          <div
            className="input-group date flex items-center"
            data-provide="datepicker"
          >
            <h2>Start date:</h2> &nbsp;
            <input
              type="date"
              className="form-control"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <div className="input-group-addon">
              <span className="glyphicon glyphicon-th"></span>
            </div>
          </div>
          <div
            className="input-group date flex items-center"
            data-provide="datepicker"
          >
            <h2>End date:</h2> &nbsp;
            <input
              type="date"
              className="form-control"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
            <div className="input-group-addon">
              <span className="glyphicon glyphicon-th"></span>
            </div>
          </div>
        </>
      ),
    },
    {
      label: "Enter your Trip Budget",
      description: (
        <>
          <TextField
            id="filled-basic"
            label="budget"
            variant="filled"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </>
      ),
    },
    {
      label: "Enter your trip type",
      description: <Options type={type} setType={setType} />,
    },
  ];

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 3 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
VerticalLinearStepper.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  desc: PropTypes.string,
  setLocation: PropTypes.func,
  setType: PropTypes.func,
  location: PropTypes.string,
  type: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  setStartDate: PropTypes.func,
  setEndDate: PropTypes.func,
  budget: PropTypes.string,
  setBudget: PropTypes.func,
};