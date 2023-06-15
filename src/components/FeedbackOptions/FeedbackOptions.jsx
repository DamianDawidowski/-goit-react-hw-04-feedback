import propTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({addPositiveFeedback, addNeutralFeedback, addBadFeedback}) => {
  return (
    <div> 
        <button
          type="button"
          onClick={addPositiveFeedback}
          className={css.feedbackBtn}>
          good
        </button>
        <button
          type="button"
          onClick={addNeutralFeedback}
          className={css.feedbackBtn}>
          neutral
        </button>
        <button
          type="button"
          onClick={addBadFeedback}
          className={css.feedbackBtn}>
         bad
        </button>


    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = { 
  addPositiveFeedback: propTypes.func.isRequired,
  addNeutralFeedback: propTypes.func.isRequired,
  addBadFeedback: propTypes.func.isRequired,
};