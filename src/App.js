import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Carrosel from './components/Carrosel/Carrosel';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Nav from './components/Nav/Nav';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Services from './components/Services/Services';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Carrosel></Carrosel>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/about' element={<RequireAuth><About/></RequireAuth>
        }></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
