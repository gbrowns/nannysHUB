import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from './useUser'


export const AdminProtectedRoutes = ({ children }) => {
      const admin = true//useUser();

      return admin ? <Outlet /> : <Navigate to='/login' />;
}