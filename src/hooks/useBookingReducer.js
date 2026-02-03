import { useReducer } from "react";

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};
const submitAPI = function (formData) {
  localStorage.setItem("bookingData", JSON.stringify(formData));
  return true;
};

const initialState = {
  date: null,
  time: null,
  guests: 2,
  occasion: "",
  name: "",
  phone: "",
  preferences: "",
  availableTimes: [], // will be fetched from API
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
      // Use API to get available times

      return { ...state, availableTimes: action.payload };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

// Custom hook

export function useBookingReducer() {
  const [state, dispatch] = useReducer(bookingReducer, {
    ...initialState,
    date: new Date().toISOString().split("T")[0],
  });

  const updateAvailableTimes = (date) => {
    const times = fetchAPI(new Date(date));

    dispatch({ type: BOOKING_ACTIONS.UPDATE_AVAILABLE_TIMES, payload: times });
  };

  return [state, dispatch, updateAvailableTimes, submitAPI];
}
