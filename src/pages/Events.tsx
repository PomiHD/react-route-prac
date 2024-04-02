import EventsList from "../components/EventsList";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import { Suspense } from "react";

export default function Events() {
  const { events } = useLoaderData(); // useLoaderData hook to get the data from the response object that was loaded by the loader function

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}
async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // handle error
    // return { isError: true, message: "Failed to load data" };
    // throw new Response(JSON.stringify({ message: "Failed to load data" }), {
    //   status: 500,
    // });
    throw json(
      { message: "Failed to load data" },
      {
        status: 500,
      },
    );
  } else {
    // const res = new Response("any data", { status: 201 }); // create a new response object, happens in the browser
    // return res;
    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {
  // the data in defer is a promise that will be resolved when the promise returned by loadEvents is resolved
  return defer({
    events: loadEvents(),
  });
}
