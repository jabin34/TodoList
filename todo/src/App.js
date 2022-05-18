
import './App.css';
import Login from './Login/Login';
import { Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Header from './Shared/Header';
import Register from './Login/Register';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>

    </Routes>
    <ToastContainer/>
    </div>
   


   
  );
}

export default App;
