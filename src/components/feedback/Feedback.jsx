import React, { Component } from 'react';
import Section from './parts/Section';
import FeedbackOptions from './parts/FeedbackOptions';
import Statistics from './parts/Statistics';
import Notification from './parts/Notification';
import css from './Feedback.module.css';

class Feedback extends Component {
   state = {
      good: 0,
      neutral: 0,
      bad: 0,
   };

   // [options]: state[options] +1
   onLeaveFeedback = (label) => {
      this.setState(prevState => ({
         [label]: prevState[label] + 1,
      }));
   };

   countTotalFeedback = () => {
      return this.state.good + this.state.neutral + this.state.bad;
   };

   countPositiveFeedbackPercentage = () => {
      return (
         this.countTotalFeedback() &&
         Math.round((this.state.good / this.countTotalFeedback()) * 100)
      );
   };
   render() {
      return (
         <div className={css.feedback__all}>
            <Section title="Please leave feedback">
               <FeedbackOptions options={['good', 'neutral','bad' ]} onLeaveFeedback={this.onLeaveFeedback} />
            </Section>

            {this.countTotalFeedback() ? (
               <Section title="Statistics">
                  <Statistics
                     good={this.state.good}
                     neutral={this.state.neutral}
                     bad={this.state.bad}
                     total={this.countTotalFeedback()}
                     positivePercentage={this.countPositiveFeedbackPercentage()}
                  />
               </Section>
            ) : (
               <Notification message="There is no feedback" />
            )}
         </div>
      );
   }
}

export default Feedback;
