import './App.css';
import Profile from 'components/Profile/Profile';
import user from 'data/user.json';
import Statistics from 'components/Statistics/Statistics';
import statisticalData from 'data/statistical-data.json';
import FriendList from 'components/Friends/FriendList';
import friends from 'data/friends.json';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import transactions from 'data/transactions.json';

const { name, tag, location, avatar, stats } = user;

function App() {
  return (
    <div className="App">
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />,
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
