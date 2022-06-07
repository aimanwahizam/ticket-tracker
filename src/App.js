import "./App.scss";
import Tickettracker from "./components/Tickettracker/Tickettracker";
import employees from "./data/employees.js";

function App() {
  return (
    <div className="main">
      <h1>Ticket Tracker</h1>
      <div className="main__trackers">
        <Tickettracker employeeArray={employees} />
        <Tickettracker />
        <Tickettracker />
        <Tickettracker />
        <Tickettracker />
        <Tickettracker />
        <Tickettracker />
        <Tickettracker />
        <Tickettracker />
        <Tickettracker />
      </div>
    </div>
  );
}

export default App;
