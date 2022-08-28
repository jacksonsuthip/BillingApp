import { HashRouter, Outlet, Route, Routes } from 'react-router-dom';
import Login from './users/login';
import 'antd/dist/antd.css';
import AppHome from './home/home';
import AppHeader from './components/headers/appHeader';
import NewUser from './users/newUser';

function Application() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />

        <Route path='app' element={<AppHeader />} >
          <Route path='home' element={<AppHome />} />
          <Route path='users' element={<NewUser />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default Application;
