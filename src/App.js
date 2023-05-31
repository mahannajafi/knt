import Home from './Pages/Home';
import Design from "./Pages/Design"
import SingleProduct from "./Pages/SingleProduct"
import SingleRawProduct from "./Pages/SingleRawProduct"
import MyMessages from "./Pages/MyMessages";
import MyDesigns from "./Pages/MyDesigns";
import MySaleStatistics from "./Pages/MySaleStatistics";
import MyOrders from "./Pages/MyOrders";
import MyAddresses from "./Pages/MyAddresses";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Pages/Login";
import ForgetPass from "./Pages/ForgetPass";
import RecoveryPass from "./Pages/RecoveryPass";
import Register from "./Pages/Register";
import VerificationCode from "./Pages/VereficationCode";
import SetPass from "./Pages/SetPass";
import ProviderLogin from "./Pages/ProviderLogin";
import DesignerDashboard from "./components/Dashboard/DesignerDashboard";
import Learn from './components/Learn/Learn';
import ChooseSingleProduct from './Pages/ChooseSingleProduct';
import Basket from "./Pages/Basket";
import ChooseAddress from "./Pages/ChooseAddress";
import ProviderDashboard from "./Pages/ProviderDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route path='' element={<Home />} />
          <Route path='*' element={<Home />} />
          <Route path='SingleProduct' element={<SingleProduct />} />
          <Route path='SingleRawProduct' element={<SingleRawProduct />} />
          <Route path='Design' element={<Design />} />
          <Route path="Login" element={<Login />}></Route>
          <Route path="ForgetPass" element={<ForgetPass />}></Route>
          <Route path="RecoveryPass" element={<RecoveryPass />}></Route>
          <Route path="Register" element={<Register />}></Route>
          <Route path="VerificationCode" element={<VerificationCode />}></Route>
          <Route path="SetPass" element={<SetPass />}></Route>
          <Route path="ProviderLogin" element={<ProviderLogin />}></Route>
          <Route path="DesignerDashboard" element={<DesignerDashboard />}></Route>
          <Route path="MyMessages" element={<MyMessages />}></Route>
          <Route path="MyDesigns" element={<MyDesigns />}></Route>
          <Route path="MySaleStatistics" element={<MySaleStatistics />}></Route>
          <Route path="MyOrders" element={<MyOrders />}></Route>
          <Route path="MyAddresses" element={<MyAddresses />}></Route>
          <Route path='Learn' element={<Learn />}></Route>
          <Route path='ChooseSingleProduct' element={<ChooseSingleProduct />}></Route>
          <Route path="Basket" element={<Basket />}></Route>
          <Route path="ChooseAddress" element={<ChooseAddress />}></Route>
          <Route path="ProviderDashboard" element={<ProviderDashboard />}></Route>
        </Route>

      </Routes >
    </BrowserRouter >
  );
}

export default App;
