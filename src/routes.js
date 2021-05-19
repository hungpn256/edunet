import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
import Student from './pages/Student';
import PurchaseCourse from './pages/PurchaseCourse';
import PricingSudent from './pages/PricingStudent';
const routes = [
  {
    path: '/',
    exact: true,
    Component: <HomePage />,
  },
  {
    path: '/product-list',
    exact: false,
    Component: <ProductListPage />,
  },
  {
    path: '/product/:id/edit',
    exact: false,
    Component: <ProductActionPage />,
  },
  {
    path: '/product/add',
    exact: false,
    Component: <ProductActionPage />,
  },
  {
    path: '/student',
    exact: true,
    Component: <Student />,
  },
  {
    path: '/purcharse',
    exact: true,
    Component: <PurchaseCourse />,
  },
  {
    path: '/pricing-student',
    hideSideBar: true,
    exact: true,
    Component: <PricingSudent />,
  },
  {
    path: '/',
    exact: false,
    Component: <NotFoundPage />,
  },
];
export default routes;
