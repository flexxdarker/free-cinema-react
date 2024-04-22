import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import Films from './components/Films';
import NoPage from './components/NoPage';
import Sessions from './components/Sessions';
import Welcome from './components/Welcome'
import CreateFilmForm from './components/CreateFilmForm';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="films" element={<Films/>} />
          <Route path="sessions" element={<Sessions/>} />         
          <Route path="films/create" element={<CreateFilmForm />} />
          <Route path="*" element={<p>uygvius</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
