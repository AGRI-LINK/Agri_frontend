import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div>
        <Sidebar />
        <Outlet />
    </div>
  );
};

export default DashboardLayout;