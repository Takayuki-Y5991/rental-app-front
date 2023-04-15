import { createBrowserRouter } from 'react-router-dom';
import { Customers } from '../features/customers/components/Customers';
import React from 'react';

export const router = createBrowserRouter([{ path: '/customers', element: <Customers /> }]);
