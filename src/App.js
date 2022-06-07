import './App.scss';
import Tickettracker from './components/Tickettracker/Tickettracker';

function App() {
  return (
    <div className='main'>
          <h1>Ticket Tracker</h1>
          <div className='main__trackers'>
            <Tickettracker />
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
