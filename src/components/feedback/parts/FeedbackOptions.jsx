import React from 'react';
import css from './FeedbackOptions.module.css';

// options
const FeedbackOptions = ({ onLeaveFeedback }) => (
   <div>
      <button
         onClick={onLeaveFeedback}
         type="button"
         id="Good"
         className={css.button}
      >
         Good
      </button>
      <button
         onClick={onLeaveFeedback}
         type="button"
         id="Neutral"
         className={css.button}
      >
         Neutral
      </button>
      <button
         onClick={onLeaveFeedback}
         type="button"
         id="Bad"
         className={css.button}
      >
         Bad
      </button>
   </div>
);

export default FeedbackOptions;
