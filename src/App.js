import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import Product from "./component/Product";
import FrontPage from "./component/FrontPage";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Header /> */}
  <Routes>
  <Route path='/' element={<FrontPage/>}></Route>
    <Route path='/shop' element={<Product/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
  </Routes>
  
   
    </div>
  );
}

export default App;
  