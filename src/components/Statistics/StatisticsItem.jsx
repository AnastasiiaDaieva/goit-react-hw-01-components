import PropTypes from 'prop-types';
import s from './StatisticsItem.module.css';

function StatisticsItem({ id, label, percentage }) {
  return (
    <li className={s.item} key={id}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
}

StatisticsItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default StatisticsItem;
