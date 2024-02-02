// AppRouter.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Shop } from '../Pages/Shop.js';
import { Basket } from '../Pages/Basket.js';
import { Customer } from '../Pages/Customer.js';
import { AdminPanel } from  '../Pages/AdminPanel.js';
import { SHOP_ROUTE, BASKET_ROUTE, CUSTOMER_ROUTE, ADMIN_ROUTE } from '../utils/const.js';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={SHOP_ROUTE} element={<Shop />} />
      <Route path={BASKET_ROUTE} element={<Basket />} />
      <Route path={CUSTOMER_ROUTE} element={<Customer />}/>
      <Route path={ADMIN_ROUTE} element = {<AdminPanel/>} />
    </Routes>
  );
};

export default AppRouter;
