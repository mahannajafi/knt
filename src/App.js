import Home from './Pages/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import MiniNavbar from './components/MiniNavbar';
import Footer from './components/Footer';
import SignUp from "./components/SignUp";
import SendCode from "./components/SendCode";
import ChoosePass from "./components/ChoosePass";
import Login from "./components/Login";
import ForgetPass from "./components/ForgetPass";
import ResetPassCode from "./components/ResetPassCode";
import ResetPass from "./components/ResetPass";

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

        <Route path="/SignUp" element={<SignUp/>}></Route>
        <Route path="/SendCode" element={<SendCode/>}></Route>
        <Route path="/ChoosePass" element={<ChoosePass/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/ForgetPass" element={<ForgetPass/>}></Route>
        <Route path="/ResetPassCode" element={<ResetPassCode/>}></Route>
        <Route path="/ResetPass" element={<ResetPass/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
