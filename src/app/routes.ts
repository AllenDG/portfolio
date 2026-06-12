import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { ProjectDetail } from "./pages/ProjectDetail";
import { Achievements } from "./pages/Achievements";
import { NotFound } from "./pages/NotFound";
import { RootLayout } from "./components/layout/RootLayout";
import { RouteError } from "./components/ui/RouteError";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: RouteError,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "project/:id",
        Component: ProjectDetail,
      },
      {
        path: "achievements",
        Component: Achievements,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);
