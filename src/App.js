import "./App.scss";
import Tickettracker from "./components/Tickettracker/Tickettracker";
import employees from "./data/employees.js";

function App() {
  return (
    <div className="main">
      <h1>Ticket Tracker</h1>
        <Tickettracker employeeArray={employees} />
    </div>
  );
}

export default App;
