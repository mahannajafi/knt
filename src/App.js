import Home from './Pages/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import MiniNavbar from './components/MiniNavbar';
import Footer from './components/Footer';
import SignUp1 from "./components/SignUp1";
import SignUp2 from "./components/SignUp2";
import SignUp3 from "./components/SignUp3";
import Login from "./components/Login";
import ForgetPassword1 from "./components/ForgetPassword1";
import ForgetPassword2 from "./components/ForgetPassword2";
import ForgetPassword3 from "./components/ForgetPassword3";

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
        <Route path="/SignUp3" element={<SignUp3/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/ForgetPassword1" element={<ForgetPassword1/>}></Route>
        <Route path="/ForgetPassword2" element={<ForgetPassword2/>}></Route>
        <Route path="/ForgetPassword3" element={<ForgetPassword3/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
