import { useLocalStorage } from '@mantine/hooks';
import RoutesApp from './routes/RoutesApp';

export function App() {
  const [role] = useLocalStorage<string>({
    key: 'role',
    defaultValue: 'guest',
  });
  return <RoutesApp role={role} />;
}

export default App;
