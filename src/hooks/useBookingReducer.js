import { useReducer } from "react";

// Initial state
const initialState = {
  date: null,
  time: null,
  guests: 2,
  occasion: "",
  name: "",
  phone: "",
  preferences: "",
  availableTimes: [
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
  ],
};

// Action types
export const BOOKING_ACTIONS = {
  SET_DATE: "SET_DATE",
  SET_TIME: "SET_TIME",
  INCREMENT_GUESTS: "INCREMENT_GUESTS",
  DECREMENT_GUESTS: "DECREMENT_GUESTS",
  SET_GUESTS: "SET_GUESTS",
  SET_OCCASION: "SET_OCCASION",
  SET_NAME: "SET_NAME",
  SET_PHONE: "SET_PHONE",
  SET_PREFERENCES: "SET_PREFERENCES",
  UPDATE_AVAILABLE_TIMES: "UPDATE_AVAILABLE_TIMES",
  RESET: "RESET",
};

// Reducer function
function bookingReducer(state, action) {
  switch (action.type) {
    case "SET_DATE":
      return { ...state, date: action.payload };

    case "SET_TIME":
      return { ...state, time: action.payload };

    case "INCREMENT_GUESTS":
      return { ...state, guests: Math.min(state.guests + 1, 10) };

    case "DECREMENT_GUESTS":
      return { ...state, guests: Math.max(state.guests - 1, 1) };

    case "SET_GUESTS":
      return { ...state, guests: Math.max(1, Math.min(action.payload, 10)) };

    case "SET_OCCASION":
      return { ...state, occasion: action.payload };

    case "SET_NAME":
      return { ...state, name: action.payload };

    case "SET_PHONE":
      return { ...state, phone: action.payload };

    case "SET_PREFERENCES":
      return { ...state, preferences: action.payload };

    case "UPDATE_AVAILABLE_TIMES":
      const times = generateAvailableTimes(action.payload);
      return { ...state, availableTimes: times };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

// Helper function to generate available times
function generateAvailableTimes(date) {
  const baseLunchTimes = ["11:00", "11:30", "12:00", "12:30", "13:00", "13:30"];
  const baseDinnerTimes = [
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
  ];

  if (!date) {
    return [...baseLunchTimes, ...baseDinnerTimes];
  }

  const selectedDate = new Date(date);
  const today = new Date();

  const dayOfWeek = selectedDate.getDay();

  // Weekend vs weekday availability
  let availableTimes =
    dayOfWeek === 0 || dayOfWeek === 6
      ? [...baseLunchTimes, ...baseDinnerTimes]
      : ["12:00", "12:30", "13:00", ...baseDinnerTimes];

  const isToday = selectedDate.toDateString() === today.toDateString();

  if (isToday) {
    const currentMinutes = today.getHours() * 60 + today.getMinutes();

    availableTimes = availableTimes.filter((time) => {
      const [hours, minutes] = time.split(":").map(Number);
      const slotMinutes = hours * 60 + minutes;
      return slotMinutes > currentMinutes;
    });
  }

  return availableTimes;
}

// Custom hook
export function useBookingReducer() {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  return [state, dispatch];
}
