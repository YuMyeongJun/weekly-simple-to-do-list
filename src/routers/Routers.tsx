import { DefaultLayout } from "@components";

import { TodoCreatePage, TodoPage } from "@pages";

import { RouteObject } from "react-router";
import { createBrowserRouter } from "react-router-dom";

const routers: RouteObject[] = [
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <TodoPage />,
      },
      {
        path: "/create",

        element: <TodoCreatePage />,
      },
    ],
  },
];

export const Routers = createBrowserRouter(routers);
