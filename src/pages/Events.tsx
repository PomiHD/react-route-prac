import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

export function Events() {
  const events = useLoaderData();
  
  return <>{<EventsList events={events} />}</>;
}
