import EventsNavigation from "../components/EventsNavigation.tsx";
import { Outlet } from "react-router-dom";

export default function EventsRootLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}
