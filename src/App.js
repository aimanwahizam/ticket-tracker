import "./App.scss";
import TicketTracker from "./components/TicketTracker/TicketTracker";

function App() {
  return (
    <div className="main">
      <h1>Ticket Tracker</h1>
      <div>
        <TicketTracker />
      </div>
    </div>
  );
}

export default App;
