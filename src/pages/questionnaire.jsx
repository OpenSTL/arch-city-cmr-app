import React, {Component} from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { Button } from '@material-ui/core';
import RecordComponent from '../components/displays/qRecordType';
import AppliedInquiryComponent from '../components/displays/appliedInquirySelect';
import GrantedInquiryComponent from '../components/displays/grantedInquirySelect';


class Questionnaire extends Component{

  render(){
    
    return (
      <Formik
        onSubmit={values => console.log(values)}
        initialValues={{ seekingRecords: [],
                         grantedMO: [],
                         deniedMO: [],
                         grantedOutside: [],
                         deniedOutside: [],
                         stlRecords: [],
                         missouriRecords: [],
                         usRecords: [],
                         nonusRecords: [] 
                      }}
        render={({ values, setFieldValue }) => (
          <div className='content'>
            <div className='odd'>
              <div className='question-header-box'>
                <div className='question-header'>
                  Expungement Clinic: 
                </div>
                <div className='question-header'> 
                  Information for Record Inquiry
                </div>
              </div>
            </div>
            <Form>
              <FieldArray
                name='seekingRecords'
                render={arrayhelpers => (
                  <div className='even'>
                    <div className='question-main'>
                      1) What criminal records are you seeking to have expunged?
                    </div>
                    {values.seekingRecords.map((data, i) => (
                      <RecordComponent
                        setFieldValue={setFieldValue}
                        arrayhelpers={arrayhelpers}
                        data={data}
                        values={values}
                        key={i}
                        index={i}
                        type='0'
                      />
                    ))}
                    <div>
                      <Button variant='contained'
                        fullWidth='false'
                        onClick={() => {arrayhelpers.push({
                          recordType: '',
                          jurisdiction: '',
                          details: '',
                          arrestDate: '',
                          convictionDate: '',
                          completedSentence: '',
                        })
                        console.log(values.seekingRecords)}}>
                          {values.seekingRecords && values.seekingRecords.length == 0 ? ("Add Record") : ("Add Another Record")}
                      </Button>
                    </div>
                  </div>
                )}
              />
              
              <div className='odd'>
                <div className='question-main'>
                  2) Have you ever been granted an expungement in Missouri?
                </div>
                <div>
                  <GrantedInquiryComponent values={values} type='MO'/>
                </div>
              </div>
              <div className='even'>
                <div className='question-main'>
                  3) Have you ever applied for an expungement in Missouri that was not granted by the court?
                </div>
                <div>
                  <AppliedInquiryComponent values={values} type='MO'/>
                </div>
              </div>
              <div className='odd'>
                <div className='question-main'>
                  4) Have you ever been granted an expungement anywhere other than Missouri?
                </div>
                <div>
                  <GrantedInquiryComponent values={values} type='OUT'/>
                </div>
              </div>
              <div className='even'>
                <div className='question-main'>
                  5) Have you ever applied for an expungement anywhere other than Missouri that was not granted by the court?
                </div>
                <div>
                  <AppliedInquiryComponent values={values} type='OUT'/>
                </div>
              </div>
              <div className='odd'>
                <div className='question-main'>
                  6) Please list any known records (Including charges/tickets that are completed, sealed, or pending) in:
                </div>
                <FieldArray
                  name='stlRecords'
                  render={arrayhelpers => (
                    <div>
                      <div className='question-main'>a) St. Louis Region</div>
                      {values.stlRecords.map((data, i) => (
                        <RecordComponent
                        arrayhelpers={arrayhelpers}
                        data={data}
                        values={values}
                        key={i}
                        index={i}
                        type='1'
                      />
                      )) }
                      <div>
                        <Button variant='contained'
                          fullWidth='false'
                          onClick={() => {arrayhelpers.push({
                            recordType: '',
                            jurisdiction: '',
                            details: '',
                            arrestDate: '',
                            convictionDate: '',
                            completedSentence: '',
                          })
                          console.log(values)}}>
                            {values.stlRecords && values.stlRecords.length == 0 ? ("Add Record") : ("Add Another Record")}
                        </Button>
                      </div>
                    </div>
                  )} 
                />
                <FieldArray
                  name='missouriRecords'
                  render={arrayhelpers => (
                    <div>
                        <div className='question-main'>b) Missouri (excluding St. Louis Region)</div>
                        {values.missouriRecords.map((data, i) => (
                          <RecordComponent
                          arrayhelpers={arrayhelpers}
                          data={data}
                          values={values}
                          key={i}
                          index={i}
                          type='2'
                          />
                        )) }
                        <div>
                          <Button variant='contained'
                            fullWidth='false'
                            onClick={() => {arrayhelpers.push({
                              recordType: '',
                              jurisdiction: '',
                              details: '',
                              arrestDate: '',
                              convictionDate: '',
                              completedSentence: '',
                            })
                            console.log(values)}}>
                              {values.missouriRecords && values.missouriRecords.length == 0 ? ("Add Record") : ("Add Another Record")}
                          </Button>
                        </div>
                    </div>
                  )}
                />
                <FieldArray
                  name='usRecords'
                  render={arrayhelpers => (
                    <div>
                      <div className='question-main'>c) United States (excluding Missouri)</div>
                      {values.usRecords.map((data, i) => (
                          <RecordComponent
                          arrayhelpers={arrayhelpers}
                          data={data}
                          values={values}
                          key={i}
                          index={i}
                          type='3'
                          />
                        )) }
                      <div>
                        <Button variant='contained'
                          fullWidth='false'
                          onClick={() => {arrayhelpers.push({
                            recordType: '',
                            jurisdiction: '',
                            details: '',
                            arrestDate: '',
                            convictionDate: '',
                            completedSentence: '',
                          })
                          console.log(values)}}>
                            {values.usRecords && values.usRecords.length == 0 ? ("Add Record") : ("Add Another Record")}
                        </Button>
                      </div>
                    </div>
                  )}
                />
                <FieldArray
                  name='nonusRecords'
                  render={arrayhelpers => (
                    <div>
                      <div className='question-main'>d) Outside of United States</div>
                      {values.nonusRecords.map((data, i) => (
                          <RecordComponent
                          arrayhelpers={arrayhelpers}
                          data={data}
                          values={values}
                          key={i}
                          index={i}
                          type='4'
                          />
                        )) }
                      <div>
                        <Button variant='contained'
                          fullWidth='false'
                          onClick={() => {arrayhelpers.push({
                            recordType: '',
                            jurisdiction: '',
                            details: '',
                            arrestDate: '',
                            convictionDate: '',
                            completedSentence: '',
                          })
                          console.log(values)}}>
                            {values.nonusRecords && values.nonusRecords.length == 0 ? ("Add Record") : ("Add Another Record")}
                        </Button>
                      </div>
                    </div>
                  )}
                />
                
              </div>
            </Form>
          </div>
        )}
      />
      
  );
  }
  onAddRecord = () => {
    this.setState({numRecords: this.state.numRecords + 1
    });
  }
}


export default Questionnaire;