import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Release from '../pages/release';
import Questionnaire from '../pages/questionnaire';
import Terms from '../pages/terms';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Release Form', 'Terms of Service', 'Questionnaire'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Release/>;
    case 1:
      return <Terms/>;
    case 2:
      return <Questionnaire/> ;
    default:
      return 'Unknown stepIndex';
  }
}
const App = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
    const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };  
    
    const handleFinish = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        }; 
    
    const handleReset = () => {
        setActiveStep(0);
    };
    return(
        <div id='application' className='classes.root'>
            <div className='stepper-container'>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                    ))}
                </Stepper>
            </div>
            <div className='app-content'>
                <div>
                    {activeStep === steps.length ? (
                    <div>
                        <br/>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                    ) : (

                    <div className='app-content'>
                        
                        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                        <br/>
                        <div className='buttons-container'>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.backButton}
                            >
                                Back
                            </Button>
                            <Button variant="contained" color="primary" onClick={activeStep === steps.length - 1 ? handleFinish : handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                    </div>
                    )}
                </div>              
            </div>
            <div className='bottom-spacer'></div>
        </div>
    )
}

export default App;