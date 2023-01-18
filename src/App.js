import logo from './logo.svg';
import './App.css';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import { useState } from 'react';
function App() {
  const[launchCart, setlaunchCart] = useState(false)

  const showcart = () => {
    setlaunchCart(true);
  }
  const hidecart =() => {
    setlaunchCart(false);
  }
  return (
    <div className="App">
      {launchCart && <Cart onClose ={hidecart} /> }
     <Header onshowCart={showcart}/>
     <main>
      <Meals></Meals>
     </main>
    </div>
  );
}

export default App;
