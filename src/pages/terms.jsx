import React from 'react'
import TermsInformation from '../components/displays/termsInfo';
import Grid from '@material-ui/core/Grid';
import {TextField} from '@material-ui/core';
import {KeyboardDatePicker,MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


const TermsInfo = require("../data/termsOfUse");



export default function Release() {

    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    return (
        <div className='content'>
           <div className='question-header-box'>
                <h3 className='question-header'>
                    Terms of Use
                </h3>
                <h3>
                    The Expungement Program (“the program”) has been created by ArchCity Defenders, Inc. (“ACD”) to promote expungement of criminal records in Missouri. Only individuals who agree to the terms of use may use this service. In order to use the program, you must agree to the following terms:
                </h3>
            </div>
            <div className='steps'>
                {TermsInfo.termsInfo.map((data, index) => {
                    return (
                    <TermsInformation
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
                                <b>Signature</b>
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

