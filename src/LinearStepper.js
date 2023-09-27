import React, { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './stlye.css'; // Imp
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Height } from "@material-ui/icons";

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
    "Step 4",
    "Step 5"
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
    aggreement: "",
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
      aggreement:"",
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
      <p>dawood</p>
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
          <div class="main">
            <div class="leftt"><i class="bi bi-record-circle"></i><span class="bannerhead "><h2>Please Read</h2></span></div>
            <div class="rightt"><i class="bi bi-check-circle-fill"></i></div>
          </div>
          <div>
            <ul>
              <li>The Stellar Career College’s net price calculator is intended to compute the estimated price inclusive of tuition and required fees, books and supplies, room and board (meals), and other related expenses.</li>
              <li>The calculator does not include estimated grant and scholarship aid</li>
              <li>The calculator presents current and prospective students, as well as their families, with results somewhat equivalent to what similar students paid in the previous year</li>
              <li>The estimates provided by this calculator shall not be challenged against the Secretary of Education, the Institution of Higher Education (IHE), or the State</li>
            </ul>
          </div>
          <div>
            <p>
              By ticking the box below, I acknowledge that the estimated cost quantified by this net calculator does not represent a final determination of actual price, definite award allocation, or financial assistance value. Rather, it provides an approximate fee inclusive of the cost of attendance and financial aid provided to students in previous years.
            </p>
            <input type="checkbox" id="vehicle1" name="aggreement"  required onChange={handleChange}></input>
<label for="vehicle1"> I Agree</label><br></br>
          </div>
          <div class="main">
            <div class="leftt"><i class="bi bi-record-circle"></i><span class="bannerhead "><h2>Note</h2></span></div>
            <div class="rightt"><i class="bi bi-check-circle-fill"></i></div>
          </div>
          <p>Any information you provide on this site is confidential. The Net Price Calculator does not store your responses or ask for any kind of personal identification information.</p>
          {/* <p className="npc-section-description">
            Welcome to Stellar Career College's net price calculator. Begin by
            reading and agreeing to the statement below. Then follow the
            instructions on the subsequent screens to receive an estimate of how
            much students similar to you paid to attend Stellar Career College in
            2020-21.
          </p>
          <p
            style={{
              textAlign: 'left',
              fontSize: '16px',
              border: '1px solid #ccc',
              padding: '0px 10px 20px 10px',
              margin: '0px 50px 20px 50px',
            }}
          >
            <strong>Please read:</strong>  This calculator is intended to provide estimated net price
            information (defined as estimated cost of attendance - including tuition
            and required fees, books and supplies, room and board (meals), and other
            related expenses - minus estimated grant and scholarship aid) to current
            and prospective students and their families based on what similar
            students paid in a previous year.
            <br />
            <br />
            By clicking below, I acknowledge that the estimate provided using this
            calculator does not represent a final determination or actual award of
            financial assistance or a final net price; it is an estimate based on
            the cost of attendance and financial aid provided to students in a
            previous year. The cost of attendance and financial aid availability
            change year to year. The estimates shall not be binding on the Secretary
            of Education, the institution of higher education, or the State.
            <br />
            <br />
            Students must complete the Free Application for Federal Student Aid
            (FAFSA) in order to be eligible for and receive an actual financial aid
            award that includes Federal grant, loan, or work-study assistance. For
            more information on applying for Federal student aid, go to{' '}
            <a href="http://studentaid.gov">http://studentaid.gov</a>.
            <br />
            <br />
            <strong>Note:</strong>Any information that you provide on this site is confidential.
            The Net Price Calculator does not store your responses or ask for
            personal identifying information of any kind.
          </p> */}
        </>

      );

    case 1:
      return (
        <>
          <div>
            <div class="main">
              <div class="leftt"><i class="bi bi-record-circle"></i><span class="bannerhead "><h2>Financial Aid</h2></span></div>
              <div class="rightt"><i class="bi bi-check-circle-fill"></i></div>
            </div>
            <div className="inputs-section">
              <h4>Do you plan to apply for financial aid?</h4>
              <input
                type="radio"
                id="financialaid-yes"
                name="financialaid"
                value="yes"
                onChange={handleChange}
              />
              <label htmlFor="financialaid-yes">Yes</label>

              <input
                type="radio"
                id="financialaid-no"
                name="financialaid"
                value="no"
                onChange={handleChange}
              />
              <label htmlFor="financialaid-no">No</label>
            </div>

            <div class="main">
              <div class="leftt"><i class="bi bi-record-circle"></i><span class="bannerhead "><h2>Age</h2></span></div>
              <div class="rightt"><i class="bi bi-check-circle-fill"></i></div>
            </div>
            <div className="inputs-section">
              <h4>How old are you?</h4>
              <input
                style={{ border: '1px solid #69727d', height: '40px', borderRadius: "5px" }}
                type="number"
                id="age"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
              />


            </div>

            <div class="main">
              <div class="leftt"><i class="bi bi-record-circle"></i><span class="bannerhead "><h2>Where do you plan to live while attending this institution?</h2></span></div>
              <div class="rightt"><i class="bi bi-check-circle-fill"></i></div>
            </div>
            <div className="inputs-section">
              <h4>Do you plan to apply for financial aid?</h4>
              <input
                type="radio"
                id="living-own-roommate"
                name="living_arrangement"
                value="Living on my own or with a roommate"
                onChange={handleChange}
              />
              <label htmlFor="living-own-roommate">Living on my own or with a roommate</label>

              <input
                type="radio"
                id="living-parents-family"
                name="living_arrangement"
                value="Living with my parents or other family members"
                onChange={handleChange}
              />
              <label htmlFor="living-parents-family">Living with my parents or other family members</label>
            </div>

          </div>
        </>
      );

    case 2:
      return (
        <>
          <div class="main">
            <div class="leftt"><i class="bi bi-record-circle"></i><span class="bannerhead "><h2>Marital Status</h2></span></div>
            <div class="rightt"><i class="bi bi-check-circle-fill"></i></div>
          </div>
          <div className="inputs-section">
            <h4>Are you (the student) married? Answer 'yes' if you are separated but not divorced.</h4>
            <input
              type="radio"
              id="martial-yes"
              name="martial"
              value="yes"
              onChange={handleChange}
            />
            <label htmlFor="financialaid-yes">Yes</label>

            <input
              type="radio"
              id="martial-no"
              name="martial"
              value="no"
              onChange={handleChange}
            />
            <label htmlFor="financialaid-no">No</label>
          </div>
          <div class="main">
            <div class="leftt"><i class="bi bi-record-circle"></i><span class="bannerhead "><h2>Children</h2></span></div>
            <div class="rightt"><i class="bi bi-check-circle-fill"></i></div>
          </div>
          <div className="inputs-section">
            <h4>Are you (the student) the primary source of financial support for any children?</h4>
            <input
              type="radio"
              id="children-yes"
              name="children"
              value="yes"
              onChange={handleChange}
            />
            <label htmlFor="children-yes">Yes</label>

            <input
              type="radio"
              id="children-no"
              name="children"
              value="no"
              onChange={handleChange}
            />
            <label htmlFor="children-no">No</label>
          </div>
          {/* <TextField
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
          /> */}
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
    case 3:
      return (
        <>
          <p className="npc-section-description-2">
            An independent student is one who is at least 24 years old, married, and/or has legal dependents other than a spouse (e.g., children). A student who does not meet any of the above criteria is considered dependent.


          </p>
          <p className="npc-section-description-2">Please provide the following information and then click Continue.</p>
          <div class="main">
            <div class="leftt"><i class="bi bi-record-circle"></i><span class="bannerhead "><h2>Number in Family</h2></span></div>
            <div class="rightt"><i class="bi bi-check-circle-fill"></i></div>
          </div>
          <div className="inputs-section">
            <h4>How many people are in your family's household?</h4>
            <label>Count yourself, your spouse (if applicable), and any dependent children.
            </label><br></br>
            <select id="people" onChange={handleChange} name="familymember" required="required" aria-required="true">
              <option value="">select</option>
              <option value="Two people" onChange={handleChange} name='numberinfamily'>Two people</option>
              <option name='numberinfamily' value="Three people" onChange={handleChange}>Three people</option>
              <option name='numberinfamily' value="Four people" onChange={handleChange}>Four people</option>
              <option name='numberinfamily' value="Five people" onChange={handleChange}>Five people</option>
              <option name='numberinfamily' value="Six people or  more" onChange={handleChange}>Six people or  more</option>

            </select> <br></br>

            {/* <input
              type="radio"
              id="children-yes"
              name="children"
              value="yes"
              onChange={handleChange}
            />
            <label htmlFor="children-yes">Yes</label>

            <input
              type="radio"
              id="children-no"
              name="children"
              value="no"
              onChange={handleChange}
            />
            <label htmlFor="children-no">No</label> */}
          </div>
          <div class="main">
            <div class="leftt"><i class="bi bi-record-circle"></i><span class="bannerhead "><h2>Number in College</h2></span></div>
            <div class="rightt"><i class="bi bi-check-circle-fill"></i></div>
          </div>
          <div className="inputs-section">
            <h4>Of the number in your family above, how many will be in college next year?</h4>
            <label>Count yourself, your spouse (if applicable), and any dependent children.</label><br></br>
            <input
              type="radio"
              id="numberincollage-yes"
              name="numberincollage"
              value="yes"
              onChange={handleChange}
            />
            <label htmlFor="numberincollage-yes">Yes</label>

            <input
              type="radio"
              id="numberincollage-no"
              name="numberincollage"
              value="no"
              onChange={handleChange}
            />
            <label htmlFor="numberincollage-no">No</label>
          </div>
          <div class="main">
            <div class="leftt"><i class="bi bi-record-circle"></i><span class="bannerhead "><h2>Household Income</h2></span></div>
            <div class="rightt"><i class="bi bi-check-circle-fill"></i></div>
          </div>
          <div className="inputs-section">
            <h4>What is your annual household income after taxes?</h4>
            <label>Include income from work, child support, and other sources. If you are married, include your spouse's income.

            </label><br></br>
            <select onChange={handleChange} id="people" name="household" required="required" aria-required="true">
              <option value="">Select</option>
              <option value="Below $30,000" >Below $30,000</option>
              onChange={handleChange}
              <option onChange={handleChange} name="household" value="Between $30,000-$39,999">Between $30,000-$39,999</option>
              <option onChange={handleChange} name="household" value="Between $40,000-$49,999">Between $40,000-$49,999</option>
              <option onChange={handleChange} name="household" value="Between $60,000-$69,999">Between $60,000-$69,999</option>
              <option onChange={handleChange} name="household" value="Between $70,000-$79,999">Between $70,000-$79,999</option>
              <option onChange={handleChange} name="household" value="Between $80,000-$89,999">Between $80,000-$89,999</option>
              <option onChange={handleChange} name="household" value="Above $99,999">Above $99,999</option>

            </select>
            <br></br>

            {/* <input
              type="radio"
              id="children-yes"
              name="children"
              value="yes"
              onChange={handleChange}
            />
            <label htmlFor="children-yes">Yes</label>

            <input
              type="radio"
              id="children-no"
              name="children"
              value="no"
              onChange={handleChange}
            />
            <label htmlFor="children-no">No</label> */}
          </div>
          {/* <TextField
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
          /> */}
        </>
      );
    case 4:
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
