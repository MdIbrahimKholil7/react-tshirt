import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Shop from './components/shop/Shop';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
       <Route path='/' element={<Shop/>}/>
     </Routes>
    </div>
  );
}

export default App;
