import { Navigate, RouteObject } from "react-router-dom";
import { HOME_VIEW } from "../../consts";
import { AppLayout, HomeView, RootView } from "../views";

export const routes: () => RouteObject[] = () => [
  {
    element: <AppLayout />,
    errorElement: <>Error</>, //TODO: Actually make this, even though its samll
    children: [
      {
        path: "/",
        element: <RootView />,
        children: [
          {
            index: true,
            element: <Navigate to={HOME_VIEW} />,
          },
          {
            path: HOME_VIEW,
            element: <HomeView />,
          },
        ],
      },
    ],
  },
];
