import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Booking from ".";
import { MemoryRouter } from "react-router-dom";

// Mock scrollIntoView
window.HTMLElement.prototype.scrollIntoView = jest.fn();

// Define mock functions at the top
const mockDispatch = jest.fn();
const mockUpdateAvailableTimes = jest.fn();
const mockSubmitAPI = jest.fn(); // Just initialize it here
const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

jest.mock("../../hooks/useBookingReducer", () => ({
  BOOKING_ACTIONS: {
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
  },
  useBookingReducer: () => [
    {
      date: "2026-02-20",
      time: "11:00",
      guests: 2,
      name: "John Doe",
      phone: "1234567890",
      availableTimes: ["11:00", "12:00", "17:00"],
    },
    mockDispatch,
    mockUpdateAvailableTimes,
    mockSubmitAPI, // Using the hoisted variable
  ],
}));

jest.mock("sonner", () => ({
  toast: { error: jest.fn(), success: jest.fn() },
  Toaster: () => <div data-testid="toaster" />,
}));

const renderWithRouter = (ui) =>
  render(<MemoryRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>{ui}</MemoryRouter>);


describe("Booking Page", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
    
    mockSubmitAPI.mockImplementation((formData) => {
      localStorage.setItem("bookingData", JSON.stringify(formData));
      return Promise.resolve(true);
    });
  });

  test("renders Booking page with ProgressBar and first step", () => {
    renderWithRouter(<Booking />);
    expect(screen.getByText(/Next/i)).toBeInTheDocument();
    expect(screen.queryByText(/Back/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Submit/i)).not.toBeInTheDocument();
  });

  test("navigates to step 2 when Next is clicked with valid state", async () => {
    renderWithRouter(<Booking />);
    fireEvent.click(screen.getByText(/Next/i));

    const backBtn = await screen.findByText(/Back/i);
    expect(backBtn).toBeInTheDocument();
  });

  test("Back button navigates back to previous step", async () => {
    renderWithRouter(<Booking />);

    // Step 1 -> Step 2
    fireEvent.click(screen.getByText(/Next/i));

    const backBtn = await screen.findByText(/Back/i);
    fireEvent.click(backBtn);

    await waitFor(() => {
      expect(screen.queryByText(/Back/i)).not.toBeInTheDocument();
    });
  });

test("Submit button calls submitAPI, saves to localStorage, and navigates", async () => {
    renderWithRouter(<Booking />);

    // Step 1 -> 2
    fireEvent.click(screen.getByText(/Next/i));
    
    // Step 2 -> 3
    fireEvent.click(await screen.findByText(/Next/i));

    // Step 3 -> Submit
    const submitBtn = await screen.findByText(/Submit/i);
    fireEvent.click(submitBtn);

    // Assert API
    await waitFor(() => expect(mockSubmitAPI).toHaveBeenCalled());

    // Assert Storage - Get value INSIDE the callback
    await waitFor(() => {
      const stored = JSON.parse(localStorage.getItem("bookingData"));
      expect(stored).toMatchObject({
        name: "John Doe",
        phone: "1234567890",
      });
    });

    // Assert Nav
    await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith("/confirmation"));
  });

  test("renders available times buttons", () => {
    renderWithRouter(<Booking />);
    ["11:00", "12:00", "17:00"].forEach((time) => {
      expect(screen.getByText(time)).toBeInTheDocument();
    });
  });
});
