import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { Detail, Home, Login } from './pages';
import Layout from './pages/Layout';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="detail">
            <Route path=":movieId" element={<Detail />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
