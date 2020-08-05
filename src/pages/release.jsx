import React from 'react'
import ReleaseInfo from '../components/displays/releaseInfo';
import Grid from '@material-ui/core/Grid';
import {TextField} from '@material-ui/core';
import {KeyboardDatePicker,MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


const WaiverInfo = require("../data/waiver");



export default function Release() {

    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    return (
        <div className='content'>
           <div className='question-header-box'>
                <h3 className='question-header'>
                    Expungement Clinic Preliminary Screening
                </h3>
                <h3 className='question-header'>
                    Record Inquiry Release & Waiver
                </h3>
            </div>
            <div className='steps'>
                {WaiverInfo.waiverInfo.map((data, index) => {
                    return (
                    <ReleaseInfo
                        key={index.toString()}
                        stepNumber={index}
                        {...data}
                    />
                    );
                })}
            </div>
            <div className='even'>
                <div className='waiver-signature'>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid>
                            <Grid item xs={6}>
                                <TextField 
                                    style={{background: "white"}}
                                    variant="outlined"
                                    rowsMax={1}
                                    fullWidth/>
                                <b>Signature - To apply your signature electronically, type /s/ and your full name, e.g. /s/ Jane Marie Brown.</b>
                            </Grid>
                            <Grid item xs={12}>
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
                            <Grid item xs={12}>
                                <b>Date</b>
                            </Grid>
                        </Grid>
                    </MuiPickersUtilsProvider>
                </div>
            </div>
        </div>
      );
};

