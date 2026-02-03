import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BOOKING_ACTIONS,
  useBookingReducer,
} from "../../hooks/useBookingReducer";
import Navigation from "../Navigation";
import Hero from "./Hero";
import ProgressBar from "./ProgressBar";
import BasicInfoStep from "./BasicInfoStep";
import PersonalInfoStep from "./PersonalInfoStep";
import ConfirmationStep from "./ConfirmationStep";
import Footer from "../Footer";
import { toast, Toaster } from "sonner";

export default function Booking() {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingState, dispatch] = useBookingReducer();

  const navigate = useNavigate();

  const scrollToTop = () => {
    // Scroll smoothly to top of the form section
    const formContainer = document.querySelector("#booking-form");
    if (formContainer) {
      formContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // fallback: scroll to top of page
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Validation functions
  const validateStep1 = () => {
    if (!bookingState.date) {
      toast.error("Please select a date");
      return false;
    }
    if (!bookingState.time) {
      toast.error("Please select a time");
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!bookingState.name.trim()) {
      toast.error("Please enter your name");
      return false;
    }
    if (!bookingState.phone.trim()) {
      toast.error("Please enter your phone number");
      return false;
    }
    // Basic phone validation
    const phoneRegex = /^[\d\s\-+()]+$/;
    if (!phoneRegex.test(bookingState.phone)) {
      toast.error("Please enter a valid phone number");
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (validateStep1()) {
        setCurrentStep(2);
        scrollToTop();
      }
    } else if (currentStep === 2) {
      if (validateStep2()) {
        setCurrentStep(3);
        scrollToTop();
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      scrollToTop();
    }
  };

  const handleReserve = () => {
    // In a real app, this would send the booking to the server
    toast.success("Reservation confirmed! See you soon at Little Lemon.");

    // Reset form after a delay
    setTimeout(() => {
      dispatch({ type: BOOKING_ACTIONS.RESET });
      // setCurrentStep(1);
      navigate("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Toaster position="bottom-left" expand richColors closeButton />
      <Navigation />
      <Hero />

      <div id="booking-form" className="flex-1 bg-white pb-10">
        <ProgressBar currentStep={currentStep} />

        {currentStep === 1 && (
          <BasicInfoStep bookingState={bookingState} dispatch={dispatch} />
        )}
        {currentStep === 2 && (
          <PersonalInfoStep bookingState={bookingState} dispatch={dispatch} />
        )}
        {currentStep === 3 && <ConfirmationStep bookingState={bookingState} />}
      </div>

      <div className=" bg-white border-t border-gray-200 p-2 sm:p-4 ">
        <div className="max-w-2xl mx-auto flex gap-4">
          {currentStep > 1 && (
            <button
              onClick={handleBack}
              className="px-8 py-4 rounded-2xl font-karla font-bold text-lg bg-gray-200 text-black hover:bg-gray-300 transition-colors"
            >
              Back
            </button>
          )}

          <button
            onClick={currentStep === 3 ? handleReserve : handleNext}
            className="flex-1 px-8 py-4 rounded-2xl font-karla font-bold text-lg bg-[#495E57] text-white hover:bg-gray-800 transition-colors"
          >
            {currentStep === 3 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
