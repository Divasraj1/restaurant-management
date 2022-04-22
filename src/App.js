import React, { useState } from "react";
import { useSelector , useDispatch} from "react-redux";
import "./App.css";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";
import CustomerCard from "./components/CustomerCard";
function App() {
  const reservation = useSelector((state)=>state.reservations.value)
  const [reservationNameInput,setReservationNameInput] = useState("");
  const customers = useSelector((state)=>state.customers.value)
  const dispatch = useDispatch()
  const handleReservation = () => {
    if(!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput("");
  } 
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
            {
              reservation.map((name,index)=> <ReservationCard name={name} index={index}/>)
            }

            </div>
          </div>
          <div className="reservation-input-container">
            <input value={reservationNameInput}
             onChange={(e)=>setReservationNameInput(e.target.value)}/>
            <button onClick={handleReservation}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {
            customers.map(customer => <CustomerCard id={customer.id} name={customer.name} food={customer.food}/>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;