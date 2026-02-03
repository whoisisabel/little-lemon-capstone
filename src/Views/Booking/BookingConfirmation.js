import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import Navigation from "../Navigation";
import Hero from "./Hero";
import Footer from "../Footer";
import { useEffect } from "react";
import {
  BOOKING_ACTIONS,
  useBookingReducer,
} from "../../hooks/useBookingReducer";

export default function BookingConfirmation() {
  const [, dispatch] = useBookingReducer();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const bookingState = JSON.parse(localStorage.getItem("bookingData"));

  const handleNavigate = () => {
    dispatch({ type: BOOKING_ACTIONS.RESET });
    localStorage.removeItem("bookingData");
    navigate("/booking");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <Hero />

      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {bookingState ? (
          <>
            {" "}
            {/* Success Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#F4CE14] flex items-center justify-center">
                <Check
                  className="w-10 h-10 sm:w-12 sm:h-12 text-white"
                  strokeWidth={3}
                />
              </div>
            </div>
            <div className="text-center mb-12">
              <h1 className="font-karla font-bold text-2xl sm:text-3xl text-[#495E57] mb-3">
                Reservation Confirmed!
              </h1>
              <p className="font-karla font-normal text-base sm:text-lg text-[#4c4c4c]">
                We look forward to seeing you at Little Lemon
              </p>
            </div>
            {/* Booking Details Card */}
            <div className="bg-[#f2f2f2] rounded-2xl p-6 sm:p-8 space-y-6 mb-8">
              <h2 className="font-karla font-bold text-lg text-[#1f1f1f] mb-6">
                Booking Details
              </h2>

              {/* Name */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
                <p className="font-karla font-normal text-[#4c4c4c] text-sm sm:text-base sm:w-40 flex-shrink-0">
                  Name
                </p>
                <p className="font-karla font-bold text-[#1f1f1f] text-base sm:text-lg">
                  {bookingState.name}
                </p>
              </div>

              {/* Phone */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
                <p className="font-karla font-normal text-[#4c4c4c] text-sm sm:text-base sm:w-40 flex-shrink-0">
                  Phone Number
                </p>
                <p className="font-karla font-bold text-[#1f1f1f] text-base sm:text-lg">
                  {bookingState.phone}
                </p>
              </div>

              {/* Date */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
                <p className="font-karla font-normal text-[#4c4c4c] text-sm sm:text-base sm:w-40 flex-shrink-0">
                  Date
                </p>
                <p className="font-karla font-bold text-[#1f1f1f] text-base sm:text-lg">
                  {bookingState.date}
                </p>
              </div>

              {/* Time */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
                <p className="font-karla font-normal text-[#4c4c4c] text-sm sm:text-base sm:w-40 flex-shrink-0">
                  Time
                </p>
                <p className="font-karla font-bold text-[#1f1f1f] text-base sm:text-lg">
                  {bookingState.time}
                </p>
              </div>

              {/* Guests */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
                <p className="font-karla font-normal text-[#4c4c4c] text-sm sm:text-base sm:w-40 flex-shrink-0">
                  Guests
                </p>
                <p className="font-karla font-bold text-[#1f1f1f] text-base sm:text-lg">
                  {bookingState.guests}{" "}
                  {bookingState.guests === 1 ? "guest" : "guests"}
                </p>
              </div>

              {/* Occasion */}
              {bookingState.occasion && (
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
                  <p className="font-karla font-normal text-[#4c4c4c] text-sm sm:text-base sm:w-40 flex-shrink-0">
                    Occasion
                  </p>
                  <p className="font-karla font-bold text-[#1f1f1f] text-base sm:text-lg">
                    {bookingState.occasion}
                  </p>
                </div>
              )}

              {/* Preferences */}
              {bookingState.preferences && (
                <div className="pt-4 border-t border-[#d9d9d9]">
                  <p className="font-karla font-normal text-[#4c4c4c] text-sm sm:text-base mb-2">
                    Special Requests
                  </p>
                  <p className="font-karla font-normal text-[#1f1f1f] text-sm sm:text-base leading-relaxed">
                    {bookingState.preferences}
                  </p>
                </div>
              )}
            </div>
            {/* Confirmation Message */}
            <div className="bg-white border border-[#d9d9d9] rounded-2xl p-6 sm:p-8 text-center mb-20">
              <p className="font-karla font-normal text-sm sm:text-base text-[#4c4c4c] leading-relaxed">
                A confirmation email has been sent to the phone number provided.
                If you need to make any changes or cancel your reservation,
                please contact us at{" "}
                <span className="font-karla font-bold text-[#1f1f1f]">
                  (254) 456-7890
                </span>
              </p>
            </div>
            <div className="bg-white border-t border-gray-200 p-4 sm:p-6">
              <div className="max-w-2xl mx-auto">
                <button
                  aria-label="make-another-reservation"
                  onClick={() => handleNavigate()}
                  className="w-full px-8 py-4 rounded-2xl font-karla font-bold text-lg bg-[#495E57] text-white hover:bg-gray-800 transition-colors"
                >
                  Make Another Reservation
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="bg-white p-4 sm:p-6">
            <div className="max-w-2xl mx-auto">
              <button
                aria-label="make-reservation"
                onClick={() => handleNavigate()}
                className="w-full px-8 py-4 rounded-2xl font-karla font-bold text-lg bg-[#495E57] text-white hover:bg-gray-800 transition-colors"
              >
                Make A Reservation
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
