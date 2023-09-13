import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Blog from './pages/Blog';
import Pages from './pages/Pages';
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/menu' element={<Menu/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/pages' element={<Pages/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/shop' element={<Shop/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
