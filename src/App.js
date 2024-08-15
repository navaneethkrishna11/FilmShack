import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Rowpost from './components/Rowpost/Rowpost';
import { orginals,actions, adventure, love, horror, doccumentries, comedy } from './urls';
import Footer from './components/Footer/Footer';
import { Helmet } from 'react-helmet';
import Rowone from './components/rowone/Rowone';
import Rowtwo from './components/RowTwo/Rowtwo';
import { Route,BrowserRouter,Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Movies from './components/Movies/Movies';
import About from './components/About/About';
import Rent from './components/Rent/Rent';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path='/movie' element={<Movies/>}/>
        <Route path='/rent' element={<Rent/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
