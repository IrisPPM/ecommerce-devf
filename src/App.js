
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import {NotFound,Home,SingleProduct, SharedItemLayout } from './Pages';
import NavBar from './Shared/NavBar';

const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='Product' element={<SharedItemLayout/>}>
        <Route index element={< Home/>} />
        <Route path= ':idItem' element={<SingleProduct/>} />
      </Route>

      <Route path='*' element={<NotFound/>}/>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
