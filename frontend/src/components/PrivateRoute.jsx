import { Navigate, useLocation } from 'react-router-dom';
import ChatPage from './pages/ChatPage';

const getAuthHeader = () => {
  const token = JSON.parse(localStorage.getItem('userId'));
  return token ? { Authorization: `Bearer ${token}` } : null;
};

const PrivateRoute = () => {
  const location = useLocation();
  const tokenJSON = getAuthHeader();
  return (
    tokenJSON ? <ChatPage tokenJSON={tokenJSON} /> : <Navigate to="/login" state={{ from: location }} />
  );
};

export default PrivateRoute;
