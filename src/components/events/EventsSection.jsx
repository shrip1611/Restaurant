// components/events/EventsSection.jsx
import useEvents from "../../hooks/useEvents";
import EventsHeader from "./EventsHeader";
import EventsList from "./EventsList";

import birthday from "../../assets/images/birthday.jpg";
import office from "../../assets/images/office.jpg";
import weeding from "../../assets/images/weeding.jpg";

export default function EventsSection() {
  const events = useEvents();

  const imageMap = { birthday, office, weeding };

  const data = events.map(event => ({
    ...event,
    image: imageMap[event.image],
  }));

  return (
    <section className="bg-cyan-800 py-8 px-4">
      <EventsHeader />
      <EventsList events={data} />
    </section>
  );
}
