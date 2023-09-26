import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Step 1",
    "Step 2",
    "Step 3",
    "Step 4"
  ];
}

function LinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const [formData, setFormData] = useState({
    financialaid: "",
    age: "",
    living_arrangement: "",
    martial: "",
    children: "",
    numberinfamily: "",
    numberincollage: "",
    household: "",
  });
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  const handleFinish = () => {
    // Display all collected data when the user clicks "Finish"
    console.log(formData);

    // Reset the formData and activeStep to start over
    setFormData({
      financialaid: "",
      age: "",
      living_arrangement: "",
      martial: "",
      children: "",
      numberinfamily: "",
      numberincollage: "",
      household: "",
    });
    setActiveStep(0);
  };








  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const getSummary = () => {
    // Create a summary of collected data for the last step
    return (
      <div>
        <Typography variant="h6">Summary of Collected Data:</Typography>
        {Object.entries(formData).map(([key, value]) => (
          <Typography key={key}>
            {key.replace(/_/g, " ")}: {value}
          </Typography>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <div>
          <Typography variant="h3" align="center">
            Thank You
          </Typography>
          {getSummary()}
        </div>
      ) : (
        <>
          <form>
            {getStepContent(activeStep, formData, handleChange)}
            {activeStep !== 0 && (
              <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>
            )}
            {isStepOptional(activeStep) && (
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={handleSkip}
              >
                Skip
              </Button>
            )}
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={activeStep === steps.length - 1 ? handleFinish : handleNext}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </form>
        </>
      )}
    </div>
  );
}

function getStepContent(step, formData, handleChange) {
  switch (step) {
    case 0:
      return (
        <>
          <TextField
            id="financialaid"
            label="Financial aid"
            variant="outlined"
            placeholder="Do you plan to apply for financial aid?"
            fullWidth
            margin="normal"
            name="financialaid"
            value={formData.financialaid}
            onChange={handleChange}
          />
          <TextField
            id="age"
            label="Age"
            variant="outlined"
            placeholder="How old are you?"
            fullWidth
            margin="normal"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          <TextField
            id="living_arrangement"
            label="Living-Arrangement"
            variant="outlined"
            placeholder="Where do you plan to live while attending this institution?"
            fullWidth
            margin="normal"
            name="living_arrangement"
            value={formData.living_arrangement}
            onChange={handleChange}
          />
        </>
      );

    case 1:
      return (
        <>
          <TextField
            id="martial"
            label="Marital Status"
            variant="outlined"
            placeholder="Are you (the student) married? Answer 'yes' if you are separated but not divorced."
            fullWidth
            margin="normal"
            name="martial"
            value={formData.martial}
            onChange={handleChange}
          />
          <TextField
            id="children"
            label="Children"
            variant="outlined"
            placeholder="Are you (the student) the primary source of financial support for any children?"
            fullWidth
            margin="normal"
            name="children"
            value={formData.children}
            onChange={handleChange}
          />
          {/* <TextField
            id="alternate-phone"
            label="Alternate Phone"
            variant="outlined"
            placeholder="Enter Your Alternate Phone"
            fullWidth
            margin="normal"
            name="alternatePhone"
            value={formData.alternatePhone}
            onChange={handleChange}
          /> */}
        </>
      );
    case 2:
      return (
        <>
          <TextField
            id="numberinfamily"
            label="Number in Family"
            variant="outlined"
            placeholder="How many people are in your family's household?"
            fullWidth
            margin="normal"
            name="numberinfamily"
            value={formData.numberinfamily}
            onChange={handleChange}
          />
          <TextField
            id="numberincollage"
            label="Number in College"
            variant="outlined"
            placeholder="Of the number in your family above, how many will be in college next year?   Count yourself, your spouse (if applicable), and any dependent children."
            fullWidth
            margin="normal"
            name="numberincollage"
            value={formData.numberincollage}
            onChange={handleChange}
          />
          <TextField
            id="household"
            label="Household Income"
            variant="outlined"
            placeholder="What is your annual household income after taxes?  Include income from work, child support, and other sources
If you are married, include your spouse's income."
            fullWidth
            margin="normal"
            name="household"
            value={formData.household}
            onChange={handleChange}
          />
        </>
      );
      case 3:
        return (
          <>
            <Typography variant="h6">Collected Data:</Typography>
            {Object.entries(formData).map(([key, value]) => (
              <Typography key={key}>
                {key.replace(/_/g, " ")}: {value}
              </Typography>
            ))}
          </>
        );
    default:
      return "unknown step";
  }
}

export default LinearStepper;
