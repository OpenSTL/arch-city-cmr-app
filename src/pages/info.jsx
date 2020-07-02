import React, { useState, useEffect } from 'react';

import Step from '../components/displays/step';
import NavBar from '../components/displays/sideNav';
import Hidden from '@material-ui/core/Hidden';

import { stepIDName } from '../css.js'

const Steps = require("../data/config");

export default function Info() {
  const [currentStepNumber, setCurrentStepNumber] = useState(1); // Hook for visible section state

  const doScroll = id => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  // Gets the top and bottom y offsets of a given element
  const getDimensions = ele => {
    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;

    return {
      height,
      offsetTop,
      offsetBottom
    };
  };

  // Finds the current visible section
  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--header-height'), 
        10);

      const scrollPosition = window.scrollY + headerHeight;

      const currentIndex = Steps.steps.findIndex( (_, index) =>  {
        const ele = document.getElementById(stepIDName(index + 1))

        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition >= offsetTop && scrollPosition < offsetBottom;
        }
        return false
      });

      if (currentIndex === undefined) {
        return 
      };

      const stepNumber = currentIndex + 1

      if (stepNumber !== currentStepNumber) {
        setCurrentStepNumber(stepNumber);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentStepNumber]);

  return (
    <div className='info'>
      <div className='content'>
        <div className='steps'>
          {Steps.steps.map((data, index) => {
            return (
              <Step
                key={index.toString()}
                stepNumber={index + 1}
                {...data}
              />
            );
          })}
        </div>
      </div>
      <Hidden mdDown>
        <div className='navbar'>
          <ol className='navbar-sticky'>
            {Steps.steps.map((step, index) => {
              return (
                <NavBar
                  key={index.toString()}
                  onClick={() => doScroll(stepIDName(index + 1))}
                  isCurrent={currentStepNumber === index + 1}
                  name={step.navName}
                />
              );
            })}
          </ol>
        </div>
      </Hidden>
      <div className='bottom-spacer' />
    </div>
  );
}