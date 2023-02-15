import React, { Component } from 'react';

class Feedback extends Component {
   state = {
      good: 0,
      neutral: 0,
      bad: 0,
   };

   statisticsUpdate = e => {
      if (e.target.id === 'Good') {
         this.setState(prevState => ({
            good: prevState.good + 1,
         }));
      }
      if (e.target.id === 'Neutral') {
         this.setState(prevState => ({
            neutral: prevState.neutral + 1,
         }));
      }
      if (e.target.id === 'Bad') {
         this.setState(prevState => ({
            bad: prevState.bad + 1,
         }));
      }
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
         <div>
            <h1>Please leave feedback</h1>
            {/* <Section title=""> это секция с заголовком и детьми  */}

            {/* это вывести в отдельный модуль <FeedbackOptions options={} onLeaveFeedback={}>*/}
            <button onClick={this.statisticsUpdate} type="button" id="Good">
               Good
            </button>
            <button onClick={this.statisticsUpdate} type="button" id="Neutral">
               Neutral
            </button>
            <button onClick={this.statisticsUpdate} type="button" id="Bad">
               Bad
            </button>
            {/* это вывести в отдельный модуль */}

            {/* это вывести в отдельный модуль <Statistics good={} neutral={} bad={} total={} positivePercentage={}>*/}
            <h2>Statistics</h2>
            {/* <Section title=""> это секция с заголовком и детьми  */}
            <ul>
               <li>Good: {this.state.good}</li>
               <li>Neutral: {this.state.neutral}</li>
               <li>Bad: {this.state.bad}</li>
               <li>Total: {this.countTotalFeedback()}</li>
               <li>
                  Positive feedback: {this.countPositiveFeedbackPercentage()}%
               </li>
            </ul>
            {/* это вывести в отдельный модуль */}
         </div>
      );
   }
}

export default Feedback;
