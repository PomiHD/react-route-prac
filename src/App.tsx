import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Events, { loader as eventsLoader } from "./pages/Events.tsx";
import EventDetail, {
  loader as eventDetailLoader,
} from "./pages/EventDetail.tsx";
import NewEvent from "./pages/NewEvent.tsx";
import EditEvent from "./pages/EditEvent.tsx";
import RootLayout from "./pages/RootLayout.tsx";
import EventsRootLayout from "./pages/EventsRootLayout.tsx";
import Error from "./pages/Error.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
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
            loader: eventsLoader, // loader starts fetching data when the route is visited before rendering the component
          },
          {
            path: ":eventId",
            element: <EventDetail />,
            loader: eventDetailLoader, //
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
