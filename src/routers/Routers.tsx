import { DefaultLayout } from "@components";

import { CreatePage, ListPage } from "@pages";

import { RouteObject } from "react-router";
import { createBrowserRouter } from "react-router-dom";

const routers: RouteObject[] = [
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <ListPage />,
      },
      {
        path: "/create",

        element: <CreatePage />,
      },
    ],
  },
];

export const Routers = createBrowserRouter(routers);
