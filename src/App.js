import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import Films from './components/Films';
import NoPage from './components/NoPage';
import Sessions from './components/Sessions';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}>
          <Route index element={<p>Home</p>} />
          <Route path="films" element={<p>Films</p>} />
          <Route path="sessions" element={<p>Sessions</p>} />         
          <Route path="*" element={<p>Page Not Found!</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
