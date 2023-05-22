import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Continents from './pages/Continents';
import Countries from './pages/Countries';
import Country from './pages/Country';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Continents />} />
          <Route path="/continents/:continentCode" element={<Countries />} />
          <Route path="/countries/:countryCode" element={<Country />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
