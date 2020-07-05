import React from 'react';
import { Select, MenuItem, TextField} from '@material-ui/core';
import {KeyboardDatePicker,MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';

export default function AppliedInquiryComponent() {
    
    const [inquiry, setRecordType] = React.useState('');
    const handleInquiry = (event) => {
        setRecordType(event.target.value);
    }

    return (
        <div className="questionnaire-content">
            <Select value={inquiry}
                    onChange={handleInquiry}
                    displayEmpty
                    >
                <MenuItem value='' disabled><div className='PLACEHOLDER'>Select</div></MenuItem>
                <MenuItem value={1}>
                        Yes
                </MenuItem>
                <MenuItem value={0}>
                        No
                </MenuItem>
            </Select>
            <div>
                {inquiry ?  (<ContinueInquiry/>) : (<div></div>)}
            </div>
        </div>
    
  
    );
}

function ContinueInquiry(){
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const [inquiry, setRecordType] = React.useState('');
    const handleInquiry = (event) => {
        setRecordType(event.target.value);
    }
    return(
        <div style={{padding: 8}}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}> 
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <div>Date (if known)</div>
                    <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                    'aria-label': 'change date',
                    }}
                    />
                </Grid>
                
                <Grid item xs={4}>
                    <div>Can you provide documentation?</div>
                    <Select value={inquiry}
                            onChange={handleInquiry}
                            displayEmpty
                            label="Can you provide documentation?"
                            >
                        <MenuItem value='' disabled><div className='PLACEHOLDER'>Select</div></MenuItem>
                        <MenuItem value={1}>
                                Yes
                        </MenuItem>
                        <MenuItem value={0}>
                                No
                        </MenuItem>
                    </Select>
                </Grid>

                <Grid item xs = {4}>
                    <div>Charge (if known)</div>
                    <TextField 
                        variant="outlined"
                        style={{background: "white"}}/>
                </Grid>
                <Grid item xs={12}>
                    <div>Please provide any additional details</div>
                    <TextField 
                        style={{background: "white"}}
                        variant="outlined"
                        multiline
                        rowsMax={6}
                        fullWidth/>
                </Grid>

            </Grid>
        </MuiPickersUtilsProvider>
        </div>
        

    )
}
