import s from './Statistics.module.scss';
import { PropTypes } from 'prop-types';
import StatElement from '../StatElement/StatElement';

export default function Statistics({ title, stats }) {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        {title && <h2>{title}</h2>}
        <ul className={s.list}>
          {stats.map(item => (
            <StatElement label={item.label} percentage={item.percentage} key={item.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
