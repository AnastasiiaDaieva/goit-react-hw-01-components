import PropTypes from 'prop-types';
import defaultPic from 'images/defaultpic.png';
import s from './FriendListItem.module.css';

function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <li className={s.item} key={id}>
      <span
        className={s.status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      >
        {isOnline}
      </span>
      <img className={s.avatar} src={avatar} alt="" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.defaultProps = {
  avatar: defaultPic,
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
