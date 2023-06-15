import propTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ title, children }) => (
  <section className={css.section}>
    <h4> {title}</h4>
    {children}
  </section>
);

export default Section;

Section.propTypes = {
  title: propTypes.string,
  childen: propTypes.element,
};
