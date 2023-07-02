import { Navigate, RouteObject } from "react-router-dom";
import {
  ABOUT_VIEW,
  HOME_VIEW,
  MARKETPLACE_VIEW,
  TEAM_VIEW,
} from "../../consts";
import {
  AboutView,
  AppLayout,
  HomeView,
  MarketplaceView,
  RootView,
  TeamView,
} from "../views";

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
          {
            path: ABOUT_VIEW,
            element: <AboutView />,
          },
          {
            path: TEAM_VIEW,
            element: <TeamView />,
          },
          {
            path: MARKETPLACE_VIEW,
            element: <MarketplaceView />,
          },
        ],
      },
    ],
  },
];
