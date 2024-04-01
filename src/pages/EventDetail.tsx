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
