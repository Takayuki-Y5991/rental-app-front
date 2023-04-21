import { createBrowserRouter } from 'react-router-dom';
import { Customers } from '../features/customers/components/list/Customers';
import React from 'react';
import { Root } from '../features/root/components/Root';
import { NotFoundTitle } from '../shared/Error/components/NotFound';
import { CustomerNew } from '../features/customers/components/new/CustomerNew';
import { CustomerDetail } from '../features/customers/components/index/CustomerDetail';

export const router = createBrowserRouter([
  { path: '/', element: <Root /> },
  { path: '/customers', element: <Customers /> },
  { path: '/customers/:id', element: <CustomerDetail /> },
  { path: '/customers/new', element: <CustomerNew /> },
  { path: '*', element: <NotFoundTitle /> },
]);
