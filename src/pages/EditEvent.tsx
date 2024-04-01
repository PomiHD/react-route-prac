import EventForm from "../components/EventForm.tsx";
import { json, redirect, useRouteLoaderData } from "react-router-dom";

export default function EditEvent() {
  const data = useRouteLoaderData("event-detail");
  const eventDetail = data.event;

  return (
    <>
      <h1>Edit Event</h1>
      <EventForm method={"patch"} event={eventDetail} />
    </>
  );
}

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
  let url = "http://localhost:8080/events";
  if (method === "PATCH") {
    const id = params.eventId;
    url += "/" + id;
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Failed to save event!" }, { status: 500 });
  } else {
    return redirect("/events");
  }
}
