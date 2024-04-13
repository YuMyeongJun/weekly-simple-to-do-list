import { DefaultLayout } from '@components';

import { RouteObject } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

const routers: RouteObject[] = [
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <div></div>
      },
    ],
  },
];

export const Routers = createBrowserRouter(routers);
