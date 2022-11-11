import './App.css';
import React from 'react';
// components
import Counter from './components/Counter/Counter';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendsList/FriendsList';
// data
import userdata from './data/user.json';
import statisticData from './data/statistic.json';
import friendList from './data/friendsList.json';
import Dropdown from './components/Dropdown/Dropdown';

// <Counter /> //* можно так initialValue = {10}

const App = () => {
  return (
    <div>
      <Dropdown />
      <Counter />
      <Profile
        username={userdata.username}
        tag={userdata.tag}
        location={userdata.location}
        avatar={userdata.avatar}
        stats={userdata.stats}
      />
      <Statistics title="Title" stats={statisticData} />
      <FriendList friends={friendList} />
    </div>
  );
};

export default App;
