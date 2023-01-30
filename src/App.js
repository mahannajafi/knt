import Home from './Pages/Home';
import Design from "./Pages/Design"
import SingleProduct from "./Pages/SingleProduct"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import DesignerDashboard from "./components/DesignerDashboard";
import MyMessages from "./components/MyMessages";
import MyDesigns from "./components/MyDesigns";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route path='' element={<Home />} />
          <Route path='*' element={<Home />} />
          <Route path='SingleProduct' element={<SingleProduct />} />
          <Route path='Design' element={<Design />} />
          <Route path="SignUp" element={<SignUp />}></Route>
          <Route path="SendCode" element={<SendCode />}></Route>
          <Route path="ChoosePass" element={<ChoosePass />}></Route>
          <Route path="Login" element={<Login />}></Route>
          <Route path="ForgetPass" element={<ForgetPass />}></Route>
          <Route path="ResetPassCode" element={<ResetPassCode />}></Route>
          <Route path="ResetPass" element={<ResetPass />}></Route>
          <Route path="DesignerDashboard" element={<DesignerDashboard />}></Route>
          <Route path="MyMessages" element={<MyMessages />}></Route>
          <Route path="MyDesigns" element={<MyDesigns />}></Route>
        </Route>

      </Routes >
    </BrowserRouter >
  );
}

export default App;
