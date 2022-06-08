import "./App.scss";
import TicketTracker from "./components/TicketTracker/TicketTracker";
import employees from "./data/employees.js";

function App() {
  const TicketTrackersJSX = employees.map((employee) => {
    const { name, role, id } = employee;

    return <TicketTracker name={name} role={role} id={id} />;
  });

  return (
    <div className="main">
      <h1>Ticket Tracker</h1>
      <div className="main__trackers">{TicketTrackersJSX}</div>
    </div>
  );
}

export default App;
