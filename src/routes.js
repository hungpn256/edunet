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
    main: () => <HomePage />,
  },
  {
    path: '/product-list',
    exact: false,
    main: () => <ProductListPage />,
  },
  {
    path: '/product/:id/edit',
    exact: false,
    main: ({ match, history }) => (
      <ProductActionPage match={match} history={history} />
    ),
  },
  {
    path: '/product/add',
    exact: false,
    main: ({ history }) => <ProductActionPage history={history} />,
  },
  {
    path: '/student',
    exact: true,
    main: ({ history }) => <Student history={history} />,
  },
  {
    path: '/purcharse',
    exact: true,
    main: ({ history }) => <PurchaseCourse history={history} />,
  },
  {
    path: '/pricing-student',
    exact: true,
    main: ({ history }) => <PricingSudent history={history} />,
  },
  {
    path: '/',
    exact: false,
    main: () => <NotFoundPage />,
  },
];
export default routes;
