import React, { lazy } from "react";
import { Route } from "react-router";

const routes = [
  {
    path: "/contact",
    element: lazy(() => import("../Pages/NotProtected/Contact")),
  },
  {
    path: "/aboutme",
    element: lazy(() => import("../Pages/NotProtected/AboutMe")),
  },
  {
    path: "/stack",
    element: lazy(() => import("../Pages/NotProtected/Stack")),
  },
];

export const dashboardRoutes = () => {
  return routes.map((val) => {
    const Component = val.element;
    return <Route key={val.path} path={val.path} element={<Component />} />;
  });
};
