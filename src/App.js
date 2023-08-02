import './App.css';
import Login from './pages/login';
import { Routes, Route } from 'react-router-dom';
// import New from './pages/new';
import List from './pages/list';
import NewUser from './pages/new-user';
import UpdateUser from './pages/update';

export default function App() {


  const route = window.location.pathname;
  const accessToken = localStorage.getItem("access_token")

  // visiting invalid page
  if (!["/login", "/list", "/new-user", "/update"].includes(route)) {
    window.location.href = "/login"
  }

  // unauth access
  if (!accessToken && route !== "/login") {
    window.location.href = "/login"
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/new" element={<New />} /> */}
        <Route path="/list" element={<List />} />
        <Route path="/new-user" element={<NewUser />} />
        <Route path="/update" element={<UpdateUser />} />



      </Routes>
    </div>
  )
}

