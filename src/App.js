import './App.css';
import Tickettracker from './components/Tickettracker/Tickettracker';

function App() {
  return (
    <div className='main'>
          <h1>Ticket Tracker</h1>
          <div className='main__trackers'>
            <Tickettracker />
          </div>
    </div>

  );
}

export default App;
