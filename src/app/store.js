import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "../features/reservationSlice";
import customerReducer from "../features/customerSlice"

export const store = configureStore({
    reducer:{
        reservations : reservationsReducer,
        customers: customerReducer
    },
})
