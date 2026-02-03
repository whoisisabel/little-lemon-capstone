import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBookingReducer } from "../../hooks/useBookingReducer";
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
  const [bookingState, dispatch, updateAvailableTimes, submitAPI] =
    useBookingReducer();

  const navigate = useNavigate();

  const scrollToTop = () => {
    const formContainer = document.querySelector("#booking-form");
    if (formContainer) {
      formContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

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
    const phoneRegex = /^[\d\s\-+()]+$/;
    if (!phoneRegex.test(bookingState.phone)) {
      toast.error("Please enter a valid phone number");
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
      scrollToTop();
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3);
      scrollToTop();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      scrollToTop();
    }
  };

  // ✅ Fixed async handleReserve
  const handleReserve = async () => {
    try {
      const success = await submitAPI(bookingState);

      if (success) {
        navigate("/confirmation");
      } else {
        toast.error("Failed to submit reservation. Please try again.");
      }
    } catch (error) {
      console.error("Booking submission failed:", error);
      toast.error("Unexpected error. Please try again.");
    }
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Toaster position="bottom-left" expand richColors closeButton />
      <Navigation />
      <Hero />

      <div id="booking-form" className="flex-1 bg-white pb-10">
        <ProgressBar currentStep={currentStep} />

        {currentStep === 1 && (
          <BasicInfoStep
            bookingState={bookingState}
            dispatch={dispatch}
            updateAvailableTimes={updateAvailableTimes}
          />
        )}
        {currentStep === 2 && (
          <PersonalInfoStep bookingState={bookingState} dispatch={dispatch} />
        )}
        {currentStep === 3 && <ConfirmationStep bookingState={bookingState} />}
      </div>

      <div className="bg-white border-t border-gray-200 p-2 sm:p-4">
        <div className="max-w-2xl mx-auto flex gap-4">
          {currentStep > 1 && (
            <button
              aria-label="back"
              onClick={handleBack}
              className="px-8 py-4 rounded-2xl font-karla font-bold text-lg bg-gray-200 text-black hover:bg-gray-300 transition-colors"
            >
              Back
            </button>
          )}

          <button
            aria-label="next"
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
