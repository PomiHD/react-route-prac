import classes from "./EventItem.module.css";
import { Link, useSubmit } from "react-router-dom";

function EventItem({ event }) {
  const submit = useSubmit();
  function startDeleteHandler() {
    const proceed = window.confirm(
      "Are you sure you want to delete this event?",
    );
    if (proceed) {
      // trigger action to delete event. In other words, submit is like a form submit, but it's not a form.
      // it's a function that sends a request to the backend. so when the user clicks the delete button,
      // the startDeleteHandler function is called, which in turn calls the submit function with the method "delete".
      // this sends a request to the backend to delete the event with the specified id.
      submit(null, { method: "delete" });
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
