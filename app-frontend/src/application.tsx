import { HashRouter, Route, Routes } from 'react-router-dom';
import Login from './home/login';
import 'antd/dist/antd.css';
import HomeMenu from './home/homeMenu';
import UserHeader from './components/headers/usersHeader';
import DashboardHeader from './components/headers/dashboardHeader';

function Application() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<HomeMenu />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<HomeMenu />} />

        <Route path='app' >
          <Route path='dashboard' element={<DashboardHeader />} />
          <Route path='users' element={<UserHeader />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default Application;
