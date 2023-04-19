import { createBrowserRouter } from 'react-router-dom';
import { Customers } from '../features/customers/components/Customers';
import React from 'react';
import { Root } from '../features/root/components/Root';
import { NotFoundTitle } from '../shared/Error/components/NotFound';

export const router = createBrowserRouter([
  { path: '/', element: <Root /> },
  { path: '/customers', element: <Customers /> },
  { path: '*', element: <NotFoundTitle /> },
]);
