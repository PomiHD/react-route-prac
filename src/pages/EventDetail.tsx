import { json, useLoaderData, useParams } from "react-router-dom";
import EventItem from "../components/EventItem.tsx";

export default function EventDetail() {
  const data = useLoaderData();
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
