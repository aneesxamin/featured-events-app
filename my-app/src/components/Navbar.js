import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">EventFinder</h2>
      <ul>
        <li>Home</li>
        <li>Events</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}