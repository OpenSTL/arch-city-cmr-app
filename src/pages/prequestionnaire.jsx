import React, {Component} from 'react';
import { Formik } from 'formik';
import { MenuItem, Select, Tooltip} from '@material-ui/core';

class Prequestionnaire extends Component{
  

  render(){

    return (
        <Formik
            onSubmit={values => console.log(values)}
            initialValues={{preAns: []}}
            render={({ values }) => (
                <div className='content'>
                    <div className='odd'>
                    <div className='question-header-box'>
                        <div className='question-header'>
                            Expungement Clinic: 
                        </div>
                        <div className='question-header'> 
                            Preliminary Questionnaire
                        </div>
                        <div className='prelim-subtext'> 
                            Answering YES to any of the following questions may indicate you are NOT a candidate for services. You are free to still apply to apply.
                        </div>
                    </div>
                    </div>
                    <div className='even'>
                        <div className='question-main'>
                            <div className="inline-text">1) Regarding the offense you want to expunge, indicate if your offense any of the following:</div> 
                            <div className="inline-text"><Tooltip title="The following offenses, violations, and infractions shall not be eligible for expungement under this section: (1) Any class A felony offense; (2) Any dangerous felony as that term is defined in section 556.061; (3) Any offense that requires registration as a sex offender; (4) Any felony offense where death is an element of the offense; (5) Any felony offense of assault; misdemeanor or felony offense of domestic assault; or felony offense of kidnapping;(6) Any offense listed, or previously listed, in chapter 566 or section [specific laws listed]; (7) Any offense eligible for expungement under section 577.0542 or 610.130; (8) Any intoxication-related traffic or boating offense as defined in section 577.001, or any offense of operating an aircraft with an excessive blood alcohol content or while in an intoxicated condition; (9) Any ordinance violation that is the substantial equivalent of any offense that is not eligible for expungement under this section; (10) Any violation of any state law or county or municipal ordinance regulating the operation of motor vehicles when committed by an individual who has been issued a commercial driver’s license or is required to possess a commercial driver’s license issued by this state or any other state; and (11) Any offense of section 571.030, except any offense under subdivision (1) of subsection 1 of section 571.030 where the person was convicted or found guilty prior to January 1, 2017. RSMo §610.140.2"><div className='hover-text'>  [EXCLUDED OFFENSES § 610.140.2 (1-6)]  </div></Tooltip></div>
                        </div>         
                        <ul className="prelim-question-sub">  
                            <li>Class A felony</li>
                            <li>A felony offense related to the violation of a law starting with 556</li>
                            <li>An offense that requires registration as a sex offender</li>
                            <li>A felony offense where death is an element of the offense</li>
                            <li>Felony assault</li>
                            <li>Misdemeanor offense of domestic violence</li>
                            <li>Felony offense of domestic violence</li>
                            <li>Felony offense of kidnapping</li>
                            <li>An intoxication related traffic or boating offense</li>
                        </ul>
                        <div><Selector values={values} qNum='1'/></div>
                    </div>
                    <div className='odd'>
                        <div className='question-main'>
                            <div className="inline-text">2) If the offense you want expunged is related to a felony offense, has it been less than 7 years since you: </div>
                            <div className="inline-text"><div className="prelim-clarity-text">(only one will apply)</div></div>
                            <div className="inline-text"><Tooltip title="At the time the petition is filed, it has been at least seven years if the offense is a felony...from the date the petitioner completed any authorized disposition imposed... RSMo § 610.140.5 (1)"><div className='hover-text'>  [FELONY WAITING PERIOD § 610.140.5 (1)] </div></Tooltip></div> 
                        </div>         
                        <ul className="prelim-question-sub">  
                            <li>completed the sentencing requirements, or</li>
                            <li>were dismissed from the charge(s)?</li>
                        </ul>
                        <div><Selector values={values} qNum='2'/></div>
                    </div>
                    <div className='even'>
                        <div className='question-main'>
                            <div className="inline-text">3) If the offense you want expunged is related to a misdemeanor or ordinance violation (municipal offense), has it been less than 3 years since you: </div> 
                            <div className="inline-text"><div className="prelim-clarity-text">(only one will apply)</div></div>
                            <div className="inline-text"><Tooltip title="At the time the petition is filed, it has been at least...three years if the offense is a misdemeanor, municipal offense, or infraction from the date the petitioner completed any authorized disposition imposed... RSMo § 610.140.5 (1)"><div className='hover-text'>  [NON-FELONY WAITING PERIOD § 610.140.5 (1)] </div></Tooltip></div>
                        </div>         
                        <ul className="prelim-question-sub">  
                            <li>completed the sentencing requirements, or</li>
                            <li>were dismissed from the charge(s)?</li>
                        </ul>
                        <div><Selector values={values} qNum='3'/></div>
                    </div>
                    <div className='odd'>
                        <div className='question-main'>
                            <div className="inline-text"> 4) Are you currently on probation or parole for any offense?</div> 
                            <div className="inline-text"><Tooltip title="The person has satisfied all obligations relating to any such disposition... RSMo § 610.140.5 (3)"><div className='hover-text'>   [DISPOSITION COMPLETE §  610.140.5 (1)] </div></Tooltip></div>
                        </div>         
                        <ul className="prelim-question-sub"/>  
                        <div><Selector values={values} qNum='4'/></div>
                    </div>
                    <div className='even'>
                        <div className='question-main'>
                            <div className="inline-text">5) Do you have any charges pending, including traffic charges?</div> 
                            <div className="inline-text"><Tooltip title="The person does not have charges pending... RSMo § 610.140.5 (4)"><div className='hover-text'>  [PENDING CHARGES PERIOD §  610.140.5 (4)]  </div></Tooltip></div>
                        </div>         
                        <ul className="prelim-question-sub"/>
                        <div><Selector values={values} qNum='5'/></div>
                    </div>
                    <div className='odd'>
                        <div className='question-main'>
                            <div className="inline-text">6) Have you been granted an expungement for a felony in Missouri before?</div> 
                            <div className="inline-text"><Tooltip title="the person shall not exceed the following limits [of expungement]...[n]ot more than one felony offense RSMo § 610.140.12 (2)"><div className='hover-text'>   [EXPUNGEMENT LIMIT § 610.140.12 (2)] </div></Tooltip></div>
                        </div>         
                        <ul className="prelim-question-sub"/>
                        <div><Selector values={values} qNum='6'/></div>
                    </div>
                    <div className='even'>
                        <div className='question-main'>
                            <div className="inline-text">7) Have you ever been granted an expungement for a misdemeanor offense in Missouri? </div> 
                            <div className="inline-text"><Tooltip title="the person shall not exceed the following limits [of expungement]...[n]ot more than two misdemeanor offenses RSMo § 610.140.12 (2)"><div className='hover-text'>  [EXPUNGEMENT LIMIT § 610.140.12 (1)] </div></Tooltip></div> 
                        </div>         
                        <ul className="prelim-question-sub"/>
                        <div><Selector values={values} qNum='7'/></div>
                    </div>
                    <div className='odd'>
                        <div className='question-main'>
                            <div className="inline-text">8) Have you ever been granted an expungement for an ordinance violation in Missouri?</div> 
                            <div className="inline-text"><Tooltip title="the person shall not exceed the following limits [of expungement]...[n]ot more than two...ordinance violations that have an authorized term of imprisonment RSMo § 610.140.12 (2)"><div className='hover-text'> [EXPUNGEMENT LIMIT § 610.140.12 (1)] </div></Tooltip></div>
                        </div>         
                        <ul className="prelim-question-sub"/>
                        <div><Selector values={values} qNum='8'/></div>
                    </div>
                    <div className='even'>
                        <div className='question-main'>
                            <div className="inline-text">9) Have you filled a petition for expungement, for the same offense you are applying for today, in Missouri within the past year?</div> 
                            <div className="inline-text"><Tooltip title="If the court determines that the petitioner has not met the criteria for any of the offenses, violations, or infractions listed in the petition for expungement or the petitioner has knowingly provided false information in the petition, the court shall enter an order dismissing the petition. Any person whose petition for expungement has been dismissed by the court for failure to meet the criteria set forth in subsection 5 of this section may not refile another petition until a year has passed since the date of filing for the previous petition. RSMo §610.140.11"><div className='hover-text'>  [DISMISSED PETITIONS § 610.140.11] </div></Tooltip></div>
                        </div>         
                        <ul className="prelim-question-sub"/>
                        <div><Selector values={values} qNum='9'/></div>
                    </div>
                    <div className='odd'>
                        <div className='question-main'>
                            <div className="inline-text">10) Do you currently have income or any other financial resources that would allow you to afford hiring a private attorney?</div> 
                        </div>         
                        <ul className="prelim-question-sub"/>
                        <div><Selector values={values} qNum='10'/></div>
                    </div>
                </div>
            )}
        />
      
  );
  }
}

function Selector(props) {
    
    const [inquiry, setRecordType] = React.useState('');
    const handleInquiry = (event) => {
        setRecordType(event.target.value)
        switch(props.qNum){
            case '1':
                props.values.preAns.q1 = event.target.value
                break;
            case '2':
                props.values.preAns.q2 = event.target.value
                break;
            case '3':
                props.values.preAns.q3 = event.target.value
                break;
            case '4':
                props.values.preAns.q4 = event.target.value
                break;
            case '5':
                props.values.preAns.q5 = event.target.value
                break;
            case '6':
                props.values.preAns.q6 = event.target.value
                break;
            case '7':
                props.values.preAns.q7 = event.target.value
                break;
            case '8':
                props.values.preAns.q8 = event.target.value
                break;
            case '9':
                props.values.preAns.q9 = event.target.value
                break;
            case '10':
                props.values.preAns.q10 = event.target.value
                break;
            default:
                alert('Invalid')
        }
    }

    return (
        <div className="prelim-selector">
            <Select value={inquiry}
                    onChange={handleInquiry}
                    displayEmpty
                    label="Can you provide documentation?"
                    >
                <MenuItem value='' disabled><div className='PLACEHOLDER'>Select</div></MenuItem>
                <MenuItem value='yes'>
                        Yes
                </MenuItem>
                <MenuItem value='no'>
                        No
                </MenuItem>
            </Select>
        </div>
    
  
    );
}


export default Prequestionnaire;

