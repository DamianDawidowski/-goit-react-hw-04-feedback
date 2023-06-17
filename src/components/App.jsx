import React, {useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export function App() {
  
  const [options, setStats] = useState({ good: 0,
      neutral: 0,
      bad: 0}); 

  const optionNames = ['good', 'neutral', 'bad']; 

  const clickHandler = option => {
    option === `${option}` &&
      setStats(stat => ({
        ...stat,
        [option]: stat[option] + 1,
      })); 
  }; 
  const countTotalFeedback = () => {
     
    return   options.good +  options.neutral +  options.bad;
  }; 

 const countPositiveFeedbackPercentage = () => {
    return Math.round((options.good /  countTotalFeedback()) * 100);
  };
 
    return (
      <>
        <Section title="Please leave feedback">
        <FeedbackOptions
            options={optionNames} 
            onLeaveFeedback={ clickHandler}
          ></FeedbackOptions>
          {countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={options.good}
              neutral={options.neutral}
              bad={options.bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            ></Statistics>
          )}
        </Section>
      </>
    );
  }
 
