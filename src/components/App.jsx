import React, { useEffect, useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export function App() {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPercentage] = useState(0);
 
  const addPositiveFeedback = (evt) => {
    setGood(good + 1);
  };

  const addNeutralFeedback = (evt) => {
    setNeutral(neutral + 1);
  };

  const addBadFeedback = (evt) => {
    setBad(bad + 1);
  };

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [good, neutral, bad]);

  useEffect(() => {
    setPercentage(Math.round((good / total) * 100));
  }, [good, total]);
   

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
          addPositiveFeedback={addPositiveFeedback}
          addNeutralFeedback={addNeutralFeedback}
          addBadFeedback={addBadFeedback}
          ></FeedbackOptions>
          {total === 0 ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            ></Statistics>
          )}
        </Section>
      </>
    );
  }
 
