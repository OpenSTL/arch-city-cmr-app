import React from 'react';
import { Select, MenuItem} from '@material-ui/core';

export default function GrantedInquiryComponent() {
    
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
    
    const [inquiry, setRecordType] = React.useState('');
    const handleInquiry = (event) => {
        setRecordType(event.target.value);
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