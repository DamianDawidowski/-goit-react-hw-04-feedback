import propTypes from 'prop-types';

const Notification = ({ message }) => <div> {message}</div>;

export default Notification;

Notification.propTypes = {
  message: propTypes.string,
};