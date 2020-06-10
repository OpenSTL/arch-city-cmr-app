import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button'

export default function dashboard() {
	return (
    <div className='content'>
      <h3>Welcome to the application!</h3>
      <div className='release'>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            
            
          >
            <h3>Release and Waiver</h3>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </p>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
      <div className='release'>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            
            
          >
            <h3>Limited Representation Agreement</h3>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </p>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
      <div className='release'>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            
            
          >
            <h3>Questionaire</h3>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
              <br/><br/><br/>
             <Button href='/questionnaire'>
              Go to Questionaire
            </Button>

            </p>
            
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
      <div className='release'>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            
            
          >
            <h3>Acknowledgement</h3>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </p>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
      <div className='release'>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            
            
          >
            <h3>Summary</h3>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </p>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
      <div className='bottom-spacer' />  
    </div>
    
  );
};