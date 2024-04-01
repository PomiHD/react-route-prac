import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EditEvent from "./pages/EditEvent.tsx";
import Error from "./pages/Error.tsx";
import EventDetail, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetail.tsx";
import Events, { loader as eventsLoader } from "./pages/Events.tsx";
import EventsRootLayout from "./pages/EventsRootLayout.tsx";
import Home from "./pages/Home.tsx";
import NewEvent from "./pages/NewEvent.tsx";
import RootLayout from "./pages/RootLayout.tsx";
import { action as manipulateEventAction } from "./pages/EditEvent.tsx";
import Newsletter, { action as newsletterAction } from "./pages/Newsletter.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <Events />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetail />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEvent />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEvent />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <Newsletter />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
