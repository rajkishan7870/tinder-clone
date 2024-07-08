import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/homePage';
import SignUp from './pages/signUp/signUp';
import Login from './pages/login/login';
import ProfilePage from './pages/profile/ProfilePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path= '/profile' element = {<ProfilePage/>} />
      </Routes>
    </div>
  );
}

export default App;
