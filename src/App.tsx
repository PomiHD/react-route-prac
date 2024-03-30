import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { Events } from "./pages/Events.tsx";
import { EventDetail } from "./pages/EventDetail.tsx";
import { NewEvent } from "./pages/NewEvent.tsx";
import { EditEvent } from "./pages/EditEvent.tsx";
import { RootLayout } from "./pages/RootLayout.tsx";
import { EventsRootLayout } from "./pages/EventsRootLayout.tsx";

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
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <Events />,
            loader: async () => {
              const response = await fetch("http://localhost:8080/events");

              if (!response.ok) {
                // handle error
              } else {
                const resData = await response.json();
                return resData.events;
              }
            },
          },
          {
            path: ":eventId",
            element: <EventDetail />,
          },
          {
            path: "new",
            element: <NewEvent />,
          },
          {
            path: ":eventId/edit",
            element: <EditEvent />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
