import { Route, Routes } from 'react-router-dom';
import './App.css';
// import About from './components/About/About';
// import Blog from './components/Blog/Blog';
import Blog from '../src/pages/NavPart/Blog/Blog'
import About from '../src/pages/NavPart/About/About'

// import Carrosel from './components/Carrosel/Carrosel';
import Carrosel from '../src/pages/HomeSection/Carrosel/Carrosel'


import CheckOut from '../src/pages/NavPart/CheckOut/CheckOut';
import Footer from '../src/pages/Shared/Footer/Footer';
import Header from '../src/pages/Shared/Header/Header';
import Home from '../src/pages/HomeSection/Home/Home';
import Login from '../src/pages/LoginFolder/Login/Login';
import Nav from '../src/pages/Shared/Nav/Nav';
import NotFound from '../src/pages/Shared/NotFound/NotFound';
import RequireAuth from '../src/pages/LoginFolder/RequireAuth/RequireAuth';
import Services from '../src/pages/HomeSection/Home/Home';
import SignUp from '../src/pages/LoginFolder/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header></Header>
       
      {/* <Nav></Nav> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/about' element={<RequireAuth><About/></RequireAuth>
        }></Route>
        <Route path='/services' element={<RequireAuth><Services/></RequireAuth>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/checkout' element={<RequireAuth><CheckOut/></RequireAuth>
        }></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
