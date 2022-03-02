import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { Home, Detail } from './pages';
import Layout from './pages/Layout';

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
