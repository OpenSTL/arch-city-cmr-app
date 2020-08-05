import React from 'react';
import { evenOddClass, stepIDName } from '../../css.js'


export default function TermsInformation(props) {
  return (
    <div
      className={`step ${evenOddClass(props.stepNumber)}`}
      id={stepIDName(props.stepNumber)}
    >
        <div className='step-content'>
            <p className='waiver-body-text' dangerouslySetInnerHTML={{__html: props.bodyText}}></p>
        </div>
    </div>
  );
}