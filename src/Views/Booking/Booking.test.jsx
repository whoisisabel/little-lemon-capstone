import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Booking from ".";
import { MemoryRouter } from "react-router-dom";

// Helper to wrap component in Router
const renderWithRouter = (ui) =>
  render(
    <MemoryRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      {ui}
    </MemoryRouter>,
  );
window.HTMLElement.prototype.scrollIntoView = jest.fn();

// Mock the reducer hook
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
      // Mock valid state so validation passes
      date: "2026-02-20",
      time: "11:00",
      guests: 2,
      occasion: "",
      name: "John Doe",
      phone: "1234567890",
      preferences: "",
      availableTimes: ["11:00", "12:00", "17:00"],
    },
    jest.fn(),
  ],
}));

// Mock toast
jest.mock("sonner", () => ({
  toast: { error: jest.fn(), success: jest.fn() },
  Toaster: () => <div data-testid="toaster" />,
}));

describe("Booking Page", () => {
  test("renders Booking page with ProgressBar and first step", () => {
    renderWithRouter(<Booking />);
    expect(screen.getByText(/Next/i)).toBeInTheDocument();
    expect(screen.queryByText(/Back/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Submit/i)).not.toBeInTheDocument();
  });

  test("navigates to step 2 when Next is clicked with valid state", async () => {
    renderWithRouter(<Booking />);
    fireEvent.click(screen.getByText(/Next/i));

    // Wait for Back button to appear
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

  test("Submit button triggers success toast", async () => {
    const { toast } = require("sonner");

    renderWithRouter(<Booking />);

    // Step 1 -> Step 2 -> Step 3
    fireEvent.click(screen.getByText(/Next/i));
    fireEvent.click(await screen.findByText(/Next/i));

    const reserveBtn = await screen.findByText(/Submit/i);
    fireEvent.click(reserveBtn);

    expect(toast.success).toHaveBeenCalledWith(
      "Reservation confirmed! See you soon at Little Lemon.",
    );
  });

  test("renders available times buttons", () => {
    renderWithRouter(<Booking />);
    expect(screen.getByText("11:00")).toBeInTheDocument();
    expect(screen.getByText("12:00")).toBeInTheDocument();
    expect(screen.getByText("17:00")).toBeInTheDocument();
  });
});
