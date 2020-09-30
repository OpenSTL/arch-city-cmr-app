import React from 'react';
import { Select, MenuItem, TextField} from '@material-ui/core';
import {KeyboardDatePicker,MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';

export default function AppliedInquiryComponent(props) {
    
    const [inquiry, setRecordType] = React.useState('');
    const handleInquiry = (event) => {
        setRecordType(event.target.value);
        {props.type == 'MO' ? (props.values.deniedMO.response = event.target.value) : (props.values.deniedOutside.response = event.target.value)}
        console.log(props.values)
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
                {inquiry ?  (<ContinueInquiry {...props}/>) : (<div></div>)}
            </div>
        </div>
    
  
    );
}

function ContinueInquiry(props){
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
      setSelectedDate(date);
      {props.type == 'MO' ? (props.values.deniedMO.date = date) : (props.values.deniedOutside.date = date)}
    };

    const [inquiry, setRecordType] = React.useState('');
    const handleInquiry = (event) => {
        setRecordType(event.target.value);
        {props.type == 'MO' ? (props.values.deniedMO.docs = event.target.value) : (props.values.deniedOutside.docs = event.target.value)}
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
                        onChange={(event) => {
                            {props.type == 'MO' ? (props.values.deniedMO.charge = event.target.value) : (props.values.deniedOutside.charge = event.target.value)}
                        }}
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
                        onChange={(event) => {
                            {props.type == 'MO' ? (props.values.deniedMO.details = event.target.value) : (props.values.deniedOutside.details = event.target.value)}
                            console.log(props.values)
                        }}
                        fullWidth/>
                </Grid>

            </Grid>
        </MuiPickersUtilsProvider>
        </div>
        

    )
}
