import { Link } from 'react-router-dom';
import RoutesApp from './routes/RoutesApp';

export function App() {
  return (
    <>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      <RoutesApp />
      {/* END: routes */}
    </>
  );
}

export default App;
