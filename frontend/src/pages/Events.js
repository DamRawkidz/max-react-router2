import { useEffect, useState } from "react";

import EventsList from "../components/EventsList";
import { json, useLoaderData } from "react-router-dom";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;

  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return
    let error = { message: "Could not fetch event" };

    // throw new Response(JSON.stringify(error), {
    //   status: 500,
    // });

    return json({ message: "Could not fetch evemts" }, { status: 500 });
  } else {
    return response;
  }
}
