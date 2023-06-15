import propTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
      <div>
        <h4> Statistics</h4>
        <div>Good: {good}</div>
        <div>Neutral: {neutral}</div>
        <div>Bad: {bad}</div>
        <div>Total: {total}</div>
        <div>Positive feedback: {positivePercentage}%</div>
      </div>
    );
};

export default Statistics;

Statistics.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  total: propTypes.number,
  positivePercentage: propTypes.number,
}; 
 