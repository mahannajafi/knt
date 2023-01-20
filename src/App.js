import Home from './Pages/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import MiniNavbar from './components/MiniNavbar';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <MiniNavbar/>
      <Routes>  
        <Route path='/'>
        <Route path='' element={<Home/>}/>
        <Route path='*' element={<Home/>}/>
        <Route path='products' element={<></>}/>

        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
