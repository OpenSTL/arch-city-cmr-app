import React from 'react';
import { Select, MenuItem} from '@material-ui/core';

export default function GrantedInquiryComponent(props) {
    const [inquiry, setRecordType] = React.useState('');
    const handleInquiry = (event) => {
        setRecordType(event.target.value);
        {props.type == 'MO' ? (props.values.grantedMO.response = event.target.value) : (props.values.grantedOutside.response = event.target.value)}
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
    
    const [inquiry, setRecordType] = React.useState('');
    const handleInquiry = (event) => {
        setRecordType(event.target.value);
        {props.type == 'MO' ? (props.values.grantedMO.answer = event.target.value) : (props.values.grantedOutside.answer = event.target.value)}
        console.log(props.values)
        
    }
    
    return(
        <div style={{padding: 8}}>
            <div>Was the granted expungment a felony or misdemeanor?</div>
            <Select value={inquiry}
                    onChange={handleInquiry}
                    displayEmpty
                    label="Was the granted expungement a felony or misdemeanor?"
                    >
                <MenuItem value='' disabled><div className='PLACEHOLDER'>Select</div></MenuItem>
                <MenuItem value={1}>
                        Felony
                </MenuItem>
                <MenuItem value={0}>
                        Misdemeanor
                </MenuItem>
            </Select>
        </div>
    )
}