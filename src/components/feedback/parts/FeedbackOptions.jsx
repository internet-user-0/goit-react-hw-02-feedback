import React from 'react';
import css from './FeedbackOptions.module.css';

// options
const FeedbackOptions = ({options, onLeaveFeedback }) => (
   <div>
      {options.map(option =>(
         <button
         onClick={() => onLeaveFeedback(option)}
         type="button"
         key={option}
         className={css.button}
      >
         {option}
      </button>
      ))}
   </div>
);

export default FeedbackOptions;
