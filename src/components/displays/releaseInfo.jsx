import React from 'react';
import { evenOddClass, stepIDName } from '../../css.js'
import { TextField} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

export default function ReleaseInfo(props) {
  return (
    <div
      className={`step ${evenOddClass(props.stepNumber)}`}
      id={stepIDName(props.stepNumber)}
    >
        <div className='step-content'>
            <h3 className='h3'>{ props.headerText }</h3> 
            <p className='waiver-body-text' dangerouslySetInnerHTML={{__html: props.bodyText}}></p> 
            <p className='waiver-body-text'>
                <Grid>
                    <Grid item xs={2}>
                        <b>Initial Below:</b>
                    </Grid>
                    <Grid item xs={1}>
                        <TextField 
                            style={{background: "white"}}
                            variant="outlined"
                            rowsMax={1}/>
                    </Grid>
                </Grid>
                
            </p>  
        </div>
    </div>
  );
}
