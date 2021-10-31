import PropTypes from 'prop-types';

import StatisticsItem from './StatisticsItem';

import s from './Statistics.module.css';
function Statistics({ title, stats }) {
  console.log(stats);
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.length > 0 &&
          stats.map(({ id, label, percentage }) => {
            return (
              <StatisticsItem key={id} label={label} percentage={percentage} />
            );
          })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
