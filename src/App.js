import logo from './logo.svg';
import './App.css';
import Meals from './components/Meals/Meals';

import Header from './components/Layout/Header';
function App() {
  return (
    <div className="App">
     <Header/>
     <main>
      <Meals></Meals>
     </main>
    </div>
  );
}

export default App;
