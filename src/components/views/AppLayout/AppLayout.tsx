import { Outlet } from "react-router";
import { Nav } from "../../common";

export const AppLayout = () => (
  <div className="min-h-screen bg-gradient-to-b from-background from-80% to-homecard px-20 py-12">
    <div className="m-auto w-full min-w-app max-w-app">
      <Nav />
      <Outlet />
    </div>
  </div>
);
