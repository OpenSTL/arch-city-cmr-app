import React from 'react';
import { evenOddClass, stepIDName } from '../../css.js'

export default function Step(props) {
  return (
    <div 
      className={`step ${evenOddClass(props.stepNumber)}`}
      id={stepIDName(props.stepNumber)}
    >
      <div className='step-content'>
        <h3 className='step-header-text'>{ props.headerText }</h3> 
        <p className='step-body-text' dangerouslySetInnerHTML={{__html: props.bodyText}}></p> 
      </div>
    </div>
  );
}
