import FriendItem from '../FriendItem/FriendItem';

const FriendsList = ({ friends }) => {
  return (
    <div className="container">
      <ul>
        {friends.map(friend => (
          <FriendItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            status={friend.isOnline}
          />
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;
