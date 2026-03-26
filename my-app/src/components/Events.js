import { useState } from "react";
import eventsData from "../data/events";
import EventCard from "./EventCard";

export default function Events() {
  const [search, setSearch] = useState("");

  const filteredEvents = eventsData.filter(e =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="events-section">
      <h2>Featured Events</h2>

      {/* Search Bar (Bonus) */}
      <input
        type="text"
        placeholder="Search events..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="events-grid">
        {filteredEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}