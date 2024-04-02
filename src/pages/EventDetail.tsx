import {
  Await,
  defer,
  json,
  redirect,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem.tsx";
import EventsList from "../components/EventsList.tsx";
import { Suspense } from "react";

export default function EventDetail() {
  const { event, events } = useRouteLoaderData("event-detail");

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense
        fallback={
          <div>
            <h1>Events</h1>
            <div>Loading...</div>
          </div>
        }
      >
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}
async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Failed to load data" },
      {
        status: 500,
      },
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
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

export async function loader({ request, params }) {
  const id = params.eventId;

  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  });
}
// what will trigger the delete action? when the user clicks the delete button.
// why? because the delete action is triggered by the startDeleteHandler function in the EventItem component.
// what will happen when the delete action is triggered?
// the delete action will send a request to the backend to delete the event with the specified id.
export async function action({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Failed to delete event!" }, { status: 500 });
  } else {
    return redirect("/events");
  }
}
