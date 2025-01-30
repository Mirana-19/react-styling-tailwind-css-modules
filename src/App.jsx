import user from './assets/user.json';
import statistics from './assets/statistics.json';
import friends from './assets/friends.json';
import transactions from './assets/transactions.json';

import './App.css';
import { Profile } from './components/Profile/Profile';
import { Container } from './components/Container/Container';
import { Statistics } from './components/Statistics/Statistics';
import { FriendsList } from './components/FriendsList/FriendsList';
import { Transactions } from './components/Transactions/Transactions';

function App() {
  return (
    <Container>
      <Profile user={user} />
      <Statistics stats={statistics} />
      <FriendsList friends={friends} />
      <Transactions transactions={transactions} />
    </Container>
  );
}

export default App;
