import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

export default function Events() {
  const events = useLoaderData();

  return <>{<EventsList events={events} />}</>;
}

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // handle error
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
