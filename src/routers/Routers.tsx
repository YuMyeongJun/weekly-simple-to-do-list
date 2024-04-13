import { DefaultLayout } from '@components';
import { ListComponent } from '@components/pages';

import { RouteObject } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

const routers: RouteObject[] = [
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        index: true,
        element: <ListComponent />
      },
    ],
  },
];

export const Routers = createBrowserRouter(routers);
