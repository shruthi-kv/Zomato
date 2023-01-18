import logo from './logo.svg';
import './App.css';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
function App() {
  return (
    <div className="App">
      <Cart/>
     <Header/>
     <main>
      <Meals></Meals>
     </main>
    </div>
  );
}

export default App;
