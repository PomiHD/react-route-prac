import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { Events } from "./pages/Events.tsx";
import { EventDetail } from "./pages/EventDetail.tsx";
import { NewEvent } from "./pages/NewEvent.tsx";
import { EditEvent } from "./pages/EditEvent.tsx";
import { RootLayout } from "./pages/RootLayout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "events/:eventId",
        element: <EventDetail />,
      },
      {
        path: "events/new",
        element: <NewEvent />,
      },
      {
        path: "events/:eventId/edit",
        element: <EditEvent />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
