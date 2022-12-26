import { useSelector } from 'react-redux';
import RoutesApp from './routes/RoutesApp';

export function App() {
  const state = useSelector((state: unknown) => state);

  console.log(state);

  return <RoutesApp auth={true} />;
}

export default App;
