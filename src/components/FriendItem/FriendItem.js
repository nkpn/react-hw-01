import s from './FriendItem.module.scss';
import { PropTypes } from 'prop-types';

const FriendItem = ({ avatar, name, status }) => {
  return (
    <li className={s.friendItem}>
      <div className={status ? 'online' : 'offline'}></div>
      <img src={avatar} alt={name} />
      <p className={s.name}>{name}</p>
    </li>
  );
};

export default FriendItem;

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
