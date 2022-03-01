import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Layout from './pages/Layout';
import Detail from './pages/Detail';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="detail" element={<Detail />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
