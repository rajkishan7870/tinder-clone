import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/homePage';
import SignUp from './pages/signUp/signUp';
import Login from './pages/login/login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
