import Home from './Pages/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import MiniNavbar from './components/MiniNavbar';
import Footer from './components/Footer';
import SignUp1 from "./components/SignUp1";
import SignUp2 from "./components/SignUp2";


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

        <Route path="/SignUp1" element={<SignUp1/>}></Route>
        <Route path="/SignUp2" element={<SignUp2/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
