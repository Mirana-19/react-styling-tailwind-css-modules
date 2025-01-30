import user from './assets/user.json';
import statistics from "./assets/statistics.json"

import './App.css';
import { Profile } from './components/Profile/Profile';
import { Container } from './components/Container/Container';
import { Statistics } from './components/Statistics/Statistics';

function App() {
  return (
    <Container>
      <Profile user={user} />
      <Statistics stats={statistics} />
    </Container>
  );
}

export default App;
