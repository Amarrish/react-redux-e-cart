import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Whishlist from './Pages/Whishlist';
import Footers from './components/Footers'; 
import Headers from './components/Headers';


function App() {
  return (
    <>
    <Headers/>
     <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
    <Route path='/whishlist' element={<Whishlist/>}></Route>
     </Routes>
     <Footers/>
    </>
  );
}

export default App;
