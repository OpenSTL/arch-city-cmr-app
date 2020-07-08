import React, {Component} from 'react';
import { Button } from '@material-ui/core';
import RecordComponent from '../components/displays/qRecordType';
import AppliedInquiryComponent from '../components/displays/appliedInquirySelect';
import GrantedInquiryComponent from '../components/displays/grantedInquirySelect';


class Questionnaire extends Component{
  state = {
    numSeekingRecords: 0,
    numStlRecords: 0,
    numMissouriRecords: 0,
    numUSRecords: 0,
    numNonUSRecords: 0
  }

  render(){
    const seekingRecords = [],stlRecords=[],missouriRecords=[],usRecords=[],nonusRecords=[];
    for (let i = 0; i < this.state.numSeekingRecords+1; i += 1){
      seekingRecords.push(<RecordComponent key={i} number={i} />);
    };
    for (let i = 0; i < this.state.numStlRecords; i += 1){
      stlRecords.push(<RecordComponent key={i} number={i} />);
    };
    for (let i = 0; i < this.state.numMissouriRecords; i += 1){
      missouriRecords.push(<RecordComponent key={i} number={i} />);
    };
    for (let i = 0; i < this.state.numUSRecords; i += 1){
      usRecords.push(<RecordComponent key={i} number={i} />);
    };
    for (let i = 0; i < this.state.numNonUSRecords; i += 1){
      nonusRecords.push(<RecordComponent key={i} number={i} />);
    };



    return (
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
        <div className='even'>
          <div className='question-main'>
            1) What criminal records are you seeking to have expunged?
          </div>
          <div>
            {seekingRecords}
          </div>
          <div>
            <Button variant='contained'
              fullWidth='false'
              onClick={() => this.setState({numSeekingRecords: this.state.numSeekingRecords + 1})}>
                Add Another Record
            </Button>
          </div>
        </div>
        <div className='odd'>
          <div className='question-main'>
            2) Have you ever been granted an expungement in Missouri?
          </div>
          <div>
            <GrantedInquiryComponent/>
          </div>
        </div>
        <div className='even'>
          <div className='question-main'>
            3) Have you ever applied for an expungement in Missouri that was not granted by the court?
          </div>
          <div>
            <AppliedInquiryComponent/>
          </div>
        </div>
        <div className='odd'>
          <div className='question-main'>
            4) Have you ever been granted an expungement anywhere other than Missouri?
          </div>
          <div>
            <GrantedInquiryComponent/>
          </div>
        </div>
        <div className='even'>
          <div className='question-main'>
            5) Have you ever applied for an expungement anywhere other than Missouri that was not granted by the court?
          </div>
          <div>
            <AppliedInquiryComponent/>
          </div>
        </div>
        <div className='odd'>
          <div className='question-main'>
            6) Please list any known records (Including charges/tickets that are completed, sealed, or pending) in:
          </div>
          <div className='question-main'>a) St. Louis Region</div>
          <div>
            {stlRecords}
          </div>
          <div>
            <Button variant='contained'
              fullWidth='false'
              onClick={() => this.setState({numStlRecords: this.state.numStlRecords + 1})}>
                Add Another Record
            </Button>
          </div>
          <div className='question-main'>b) Missouri (excluding St. Louis Region)</div>
          <div>
            {missouriRecords}
          </div>
          <div>
            <Button variant='contained'
              fullWidth='false'
              onClick={() => this.setState({numMissouriRecords: this.state.numMissouriRecords + 1})}>
                Add Another Record
            </Button>
          </div>
          <div className='question-main'>c) United States (excluding Missouri)</div>
          <div>
            {usRecords}
          </div>
          <div>
            <Button variant='contained'
              fullWidth='false'
              onClick={() => this.setState({numUSRecords: this.state.numUSRecords + 1})}>
                Add Another Record
            </Button>
          </div>
          <div className='question-main'>d) Outside of United States</div>
          <div>
            {nonusRecords}
          </div>
          <div>
            <Button variant='contained'
              fullWidth='false'
              onClick={() => this.setState({numNonUSRecords: this.state.numNonUSRecords + 1})}>
                Add Another Record
            </Button>
          </div>
        </div>
      </div>
  );
  }
  onAddRecord = () => {
    this.setState({numRecords: this.state.numRecords + 1
    });
  }
}


export default Questionnaire;