import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

interface GuardedRouteProps {
  auth: boolean;
  children: ReactElement;
  redirectPath: string;
}

function GuardedRoute({
  auth,
  children,
  redirectPath = '/login',
}: GuardedRouteProps) {
  if (!auth) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
}

export default GuardedRoute;
