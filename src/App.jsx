import Container from './layout/Container';
import Feed from './layout/Feed';
import Sidebar from './layout/Sidebar';
import Trends from './layout/Trends';

function App() {
  return (
    <Container>
      <Sidebar />
      <Feed />
      <Trends />
    </Container>
  );
}

export default App;
