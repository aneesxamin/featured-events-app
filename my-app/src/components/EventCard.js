export default function EventCard({ event }) {
  return (
    <div className="card">
      <h3>{event.name}</h3>
      <p>{event.date} | {event.time}</p>
      <p>{event.location}</p>
      <p>{event.description}</p>
      <button>Register</button>
    </div>
  );
}