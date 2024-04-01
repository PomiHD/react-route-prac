import EventForm from "../components/EventForm.tsx";
import {useRouteLoaderData} from "react-router-dom";

export default function EditEvent() {
  const data = useRouteLoaderData("event-detail");
  const eventDetail = data.event;
  
  return (
    <>
      <h1>Edit Event</h1>
      <EventForm method={undefined} event={eventDetail} />
    </>
  );
}
