import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem.tsx";

export default function EventDetail() {
  const data = useRouteLoaderData("event-detail");
  const eventDetail = data.event;
  return (
    <>
      <EventItem event={eventDetail} />
    </>
  );
}

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Failed to load data" },
      {
        status: 500,
      },
    );
  } else {
    return response;
  }
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
