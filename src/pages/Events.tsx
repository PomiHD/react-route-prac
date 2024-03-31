import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

export default function Events() {
  const data = useLoaderData(); // useLoaderData hook to get the data from the response object that was loaded by the loader function
  const events = data.events;

  return <>{<EventsList events={events} />}</>;
}

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // handle error
  } else {
    // const res = new Response("any data", { status: 201 }); // create a new response object, happens in the browser
    // return res;
    return response;
  }
}
