﻿import EventForm from "../components/EventForm.tsx";
import { json, redirect } from "react-router-dom";

export default function NewEvent() {
  return <EventForm method={"post"} />;
}

// execute in the browser
export async function action({ request, params }) {
  const data = await request.formData();
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
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
