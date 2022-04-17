import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Services from './components/Services/Services';
import SignIn from './components/SignIn/SignIn';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/about' element={<Services/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
