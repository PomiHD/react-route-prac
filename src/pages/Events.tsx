import EventsList from "../components/EventsList";
import { useLoaderData, json } from "react-router-dom";

export default function Events() {
  const data = useLoaderData(); // useLoaderData hook to get the data from the response object that was loaded by the loader function
  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }
  const events = data.events;

  return <EventsList events={events} />;
}

export async function loader() {
  const response = await fetch("http://localhost:8080/events1");

  if (!response.ok) {
    // handle error
    // return { isError: true, message: "Failed to load data" };
    // throw new Response(JSON.stringify({ message: "Failed to load data" }), {
    //   status: 500,
    // });
    return json(
      { message: "Failed to load data" },
      {
        status: 500,
      },
    );
  } else {
    // const res = new Response("any data", { status: 201 }); // create a new response object, happens in the browser
    // return res;
    return response;
  }
}
