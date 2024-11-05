import { json, useLoaderData, useParams } from "react-router-dom";
import EventItem from "../components/EventItem";
function EventsDetailPage() {
  // const params = useParams();
  const data = useLoaderData();
  return <EventItem event={data.event} />;
}
export default EventsDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "cound not fetch details for selected events" },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
