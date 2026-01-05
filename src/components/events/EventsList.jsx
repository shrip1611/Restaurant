// components/events/EventsList.jsx
import EventCard from "./EventCard";

export default function EventsList({ events }) {
  return (
    <div className="max-w-7xl mx-auto space-y-14">
      {events.map((event, index) => (
        <EventCard
          key={event.id}
          event={event}
          reverse={index % 2 !== 0}
        />
      ))}
    </div>
  );
}
