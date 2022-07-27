
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import { Product,NotFound,Home,SingleProduct } from './Pages';
import { NavBar } from './Shared/NavBar';

const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='Products' element={<Product/>}/>
      <Route path='SinleProduct' element={<SingleProduct/>}/>

      <Route path='*' element={<NotFound/>}/>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
