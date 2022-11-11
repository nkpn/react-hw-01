import s from './StatElement.module.scss';
import { randomColor } from '../../helpers/randomColor';

const StatElement = ({ label, percentage }) => {
  return (
    <li className={s.item} style={{ backgroundColor: randomColor() }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
};

export default StatElement;
