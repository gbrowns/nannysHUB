import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from './useUser'


export const AdminProtectedRoutes = ({ children }) => {
      const admin = useUser();

      return admin ? <Outlet /> : <Navigate to='/auth/login' />;
}