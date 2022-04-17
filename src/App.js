import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Carrosel from './components/Carrosel/Carrosel';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Nav from './components/Nav/Nav';
import NotFound from './components/NotFound/NotFound';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Services from './components/Services/Services';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header></Header>
       
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/about' element={<RequireAuth><About/></RequireAuth>
        }></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>

        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
