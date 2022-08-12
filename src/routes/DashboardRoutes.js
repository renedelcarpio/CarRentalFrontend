import { Route, Routes } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import Navbar from '../components/Navbar/Navbar';
import Cars from '../pages/Cars/Cars';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Rentals from '../pages/Rentals/Rentals';
import Users from '../pages/Users/Users';

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/users" element={<Users />} />
        <Route path="/rentals" element={<Rentals />} />
      </Routes>
    </>
  );
};

export default DashboardRoutes;
