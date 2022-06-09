import React, {useState} from "react";
import "./App.scss";
import TicketTracker from "./components/TicketTracker/TicketTracker";
import employees from "./data/employees.js";
import Form from "./components/Form/Form";

function App() {
  const [employeesArray, setEmployeesArray] = useState(employees)

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */
  
  /* ---------------------------- Creating Tickets ---------------------------- */

  const createTicketTrackerJSX = () => {
    const TicketTrackersJSX = employees.map((employee, index) => {
      const { name, role} = employee;
  
      return <TicketTracker name={name} role={role} key={index} />;
    });
    return TicketTrackersJSX;
  }

  const TicketTrackersJSX = createTicketTrackerJSX(employees);

  /* ------------------------------- Add New Ticket Tracker ------------------------------ */

  const addNewTicket = (event) => {
      event.preventDefault();
  
      const nameInput = event.target.elements.fullName.value;
      const roleInput = event.target.elements.role.value;
  
      console.log(nameInput);
      console.log(roleInput);

      setEmployeesArray(employees.push({
        id: employees.length + 1,
        name: nameInput,
        role: roleInput
      }))

      console.log(employeesArray)
  }

  return (
    <div className="main">
      <h1>Ticket Tracker</h1>
      <div className="main__trackers">{TicketTrackersJSX}</div>
      <Form submitForm={addNewTicket}/>
    </div>
  );
}

export default App;