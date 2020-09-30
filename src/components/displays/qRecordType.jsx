import React from 'react';
import { Tooltip, Select, MenuItem, TextField, Button} from '@material-ui/core';
import {KeyboardDatePicker,MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import { Field } from 'formik'
import Grid from '@material-ui/core/Grid';


export default function RecordComponent(props) {
    const { index, values, arrayHelpers, data, type } = props
    const [recordType, setRecordType] = React.useState('');
    const handleRecordType = (event) => {
        setRecordType(event.target.value);
        console.log(type)
        switch(type) {
            case '0':
                values.seekingRecords[index].recordType = event.target.value
                break;
            case '1':
                values.stlRecords[index].recordType = event.target.value
                break;
            case '2':
                values.missouriRecords[index].recordType = event.target.value
                break;
            case '3':
                values.usRecords[index].recordType = event.target.value
                break;
            case '4':
                values.nonusRecords[index].recordType = event.target.value
                break;
            default: 
                console.log('error!')
        }
    }

    
    
    return (
        <div className="questionnaire-content">
            <h5>
                Record Information
            </h5>
            <div style={{padding: 8}}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container spacing={3}>
                        <Grid item xs={5}>
                            <div>
                                <div className='inline-text'>If known, please indicate whether this record was {' '}</div>
                                <div className='inline-text'><Tooltip title="Arrested, but did not (i) go to court or (ii) enter a plea agreement"><div className='hover-text'>arrest only </div></Tooltip></div>
                                <div className='inline-text'>or a{' '}</div>
                                <div className='inline-text'><Tooltip title="Plead or ruled guilty in court"><div className='hover-text'>*conviction  </div></Tooltip></div>
                                <div className='inline-text' style = {{padding:'0px'}}>.</div>
                                <div className='disclaimer-text'>*for the purpose of this form, also include charges that resulted in either a suspended imposition of sentence ("S.I.S.") or suspended execution of sentence ("S.E.S.")</div>
                            </div>
                            <Field
                                component={Select}
                                name="recordType"
                                value={recordType}
                                onChange={handleRecordType}
                                displayEmpty
                            >
                                <MenuItem value='' disabled><div className='PLACEHOLDER'>Record Type</div></MenuItem>
                                <MenuItem value={0}>Arrest Only</MenuItem>
                                <MenuItem value={1}>Conviction</MenuItem>
                            </Field>
                        </Grid>
                        <Grid item xs={7}>
                            <div>Jurisdiction (if known)</div>
                            <Field
                                component={TextField}
                                name='jurisdiction'
                                variant="outlined"
                                onChange={(event) =>{
                                    switch(type) {
                                        case '0':
                                            values.seekingRecords[index].jurisdiction = event.target.value
                                            break;
                                        case '1':
                                            values.stlRecords[index].jurisdiction = event.target.value
                                            break;
                                        case '2':
                                            values.missouriRecords[index].jurisdiction = event.target.value
                                            break;
                                        case '3':
                                            values.usRecords[index].jurisdiction = event.target.value
                                            break;
                                        case '4':
                                            values.nonusRecords[index].jurisdiction = event.target.value
                                            break;
                                        default: 
                                            console.log('error!')
                                    }
                                }}
                                style={{background: "white"}}/>
                        </Grid>
                        <Grid item xs={12}>
                            <div>
                                {recordType ?  (<Conviction {...props}/>) : (<ArrestOnly {...props}/>)}
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                        <div>Please provide any additional details</div>
                        <Field 
                            component={TextField}
                            name='details'
                            onChange={(event) =>{
                                switch(props.type) {
                                    case '0':
                                        values.seekingRecords[index].details = event.target.value
                                        break;
                                    case '1':
                                        values.stlRecords[index].details = event.target.value
                                        break;
                                    case '2':
                                        values.missouriRecords[index].details = event.target.value
                                        break;
                                    case '3':
                                        values.usRecords[index].details = event.target.value
                                        break;
                                    case '4':
                                        values.nonusRecords[index].details = event.target.value
                                        break;
                                    default: 
                                        console.log('error!')
                                }
                            }}
                            variant="outlined"
                            style={{background: "white"}}
                            multiline
                            rowsMax={6}
                            fullWidth/>
                        <br/>
                        <div>
                        
                        </div>
                        </Grid>
                    </Grid>
                </MuiPickersUtilsProvider>
            </div>
        </div>
    );
}

function ArrestOnly(props){
    const { index, values, arrayHelpers } = props
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
      setSelectedDate(date);
      switch(props.type) {
        case '0':
            values.seekingRecords[index].arrestDate = date.toISOString().substr(0,10)
            break;
        case '1':
            values.stlRecords[index].arrestDate = date.toISOString().substr(0,10)
            break;
        case '2':
            values.missouriRecords[index].arrestDate = date.toISOString().substr(0,10)
            break;
        case '3':
            values.usRecords[index].arrestDate = date.toISOString().substr(0,10)
            break;
        case '4':
            values.nonusRecords[index].arrestDate = date.toISOString().substr(0,10)
            break;
        default: 
            console.log('error!')
    }
    };

    return(
        <div style={{padding: 8}}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid item xs={4}>
                    <div>Date of Arrest (if known)</div>
                    <Field
                    component={KeyboardDatePicker}
                    name='arrestDate'
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
            </MuiPickersUtilsProvider>
        </div>
        

    )
}

function Conviction(props){
    const { index, values, arrayHelpers } = props
    const [arrestDate, setArrestDate] = React.useState(new Date());
    const [convictionDate, setConvictionDate] = React.useState(new Date());
    const [completedSentence, setCompletedSentence] = React.useState(new Date());

    

    return(
        <div style={{padding: 8}}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <div>Date of Arrest</div>
                        <div>(if known)</div>
                        <Field
                        component={KeyboardDatePicker}
                        name='arrestDate'
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        value={arrestDate}
                        onChange={(date) => {
                            setArrestDate(date)
                            switch(props.type) {
                                case '0':
                                    values.seekingRecords[index].arrestDate = date.toISOString().substr(0,10)
                                    break;
                                case '1':
                                    values.stlRecords[index].arrestDate = date.toISOString().substr(0,10)
                                    break;
                                case '2':
                                    values.missouriRecords[index].arrestDate = date.toISOString().substr(0,10)
                                    break;
                                case '3':
                                    values.usRecords[index].arrestDate = date.toISOString().substr(0,10)
                                    break;
                                case '4':
                                    values.nonusRecords[index].arrestDate = date.toISOString().substr(0,10)
                                    break;
                                default: 
                                    console.log('error!')
                            };
                        }}
                        KeyboardButtonProps={{
                        'aria-label': 'change date',
                        }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <div>Date of Conviction (if known)</div>
                        <Field
                        component={KeyboardDatePicker}
                        name='convictionDate'
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        value={convictionDate}
                        onChange={(date) => {
                            setConvictionDate(date)
                            switch(props.type) {
                                case '0':
                                    values.seekingRecords[index].convictionDate = date.toISOString().substr(0,10)
                                    break;
                                case '1':
                                    values.stlRecords[index].convictionDate = date.toISOString().substr(0,10)
                                    break;
                                case '2':
                                    values.missouriRecords[index].convictionDate = date.toISOString().substr(0,10)
                                    break;
                                case '3':
                                    values.usRecords[index].convictionDate = date.toISOString().substr(0,10)
                                    break;
                                case '4':
                                    values.nonusRecords[index].convictionDate = date.toISOString().substr(0,10)
                                    break;
                                default: 
                                    console.log('error!')
                            }
                        }}
                        KeyboardButtonProps={{
                        'aria-label': 'change date',
                        }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <div>Date of Completed Sentence (if known)</div>
                        <Field
                        component={KeyboardDatePicker}
                        name='completedSentence'
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        value={completedSentence}
                        onChange={(date) => {
                            setCompletedSentence(date)
                            switch(props.type) {
                                case '0':
                                    values.seekingRecords[index].completedSentence = date.toISOString().substr(0,10)
                                    break;
                                case '1':
                                    values.stlRecords[index].completedSentence = date.toISOString().substr(0,10)
                                    break;
                                case '2':
                                    values.missouriRecords[index].completedSentence = date.toISOString().substr(0,10)
                                    break;
                                case '3':
                                    values.usRecords[index].completedSentence = date.toISOString().substr(0,10)
                                    break;
                                case '4':
                                    values.nonusRecords[index].completedSentence = date.toISOString().substr(0,10)
                                    break;
                                default: 
                                    console.log('error!')
                            }
                        }}
                        KeyboardButtonProps={{
                        'aria-label': 'change date',
                        }}
                        />
                    </Grid>
                </Grid>
            </MuiPickersUtilsProvider>
        </div>
        

    )
}