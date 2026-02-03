import { Minus, Plus } from "lucide-react";
import { BOOKING_ACTIONS } from "../../hooks/useBookingReducer";
import { useEffect } from "react";

export default function BasicInfoStep({
  bookingState,
  dispatch,
  updateAvailableTimes,
}) {
  // Sample dates for the date selector
  const getSampleDates = (days = 6) => {
    const today = new Date();

    return Array.from({ length: days }, (_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      return {
        day: date.toLocaleDateString("en-US", { weekday: "short" }),
        date: date.getDate().toString(),
        fullDate: date.toISOString().split("T")[0],
      };
    });
  };
  const sampleDates = getSampleDates();

  // Update available times when date changes
  useEffect(() => {
    if (bookingState.date && updateAvailableTimes) {
      updateAvailableTimes(bookingState.date);
    }
  }, [bookingState.date, updateAvailableTimes]);

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Date Selection */}
      <div className="space-y-4">
        <h3 className="font-karla font-bold text-lgtext-[#1f1f1f]">Date</h3>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {sampleDates.map((item) => (
            <button
              key={item.fullDate}
              onClick={() =>
                dispatch({
                  type: BOOKING_ACTIONS.SET_DATE,
                  payload: item.fullDate,
                })
              }
              className={`flex-shrink-0 flex flex-col items-center gap-4 px-3 sm:px-4 py-6 sm:py-8 rounded-2xl transition-colors ${
                bookingState.date === item.fullDate
                  ? "bg-[#F4CE14] text-white"
                  : "bg-[#f2f2f2] text-[#cdcdcd] hover:bg-[#F4CE14] hover:text-white"
              }`}
            >
              <span className="text-xs font-karla font-bold">{item.day}</span>
              <span className="text-2xl font-karla font-bold">{item.date}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Time Selection */}
      <div className="space-y-4">
        <h3 className="font-karla font-bold text-lgtext-[#1f1f1f]">Time</h3>
        {bookingState.date ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {bookingState.availableTimes.map((timeSlot) => (
              <button
                key={timeSlot}
                onClick={() =>
                  dispatch({
                    type: BOOKING_ACTIONS.SET_TIME,
                    payload: timeSlot,
                  })
                }
                className={`px-6 py-4 rounded-2xl font-karla font-bold text-base transition-all ${
                  bookingState.time === timeSlot
                    ? "bg-[#F4CE14] text-white"
                    : "bg-[#f2f2f2] text-[#cdcdcd] hover:bg-[#F4CE14] hover:text-white"
                }`}
              >
                {timeSlot}
              </button>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">
            Please select a date to see available times.
          </p>
        )}
      </div>

      {/* Guests Selection */}
      <div className="space-y-4">
        <h3 className="font-karla font-bold text-lgtext-[#1f1f1f]">Guests</h3>
        <div className="flex items-center gap-4">
          <button
            onClick={() => dispatch({ type: BOOKING_ACTIONS.DECREMENT_GUESTS })}
            className="w-12 h-12 flex items-center justify-center bg-white border border-black rounded-2xl hover:bg-gray-100 transition-colors"
            aria-label="Decrease guests"
          >
            <Minus className="w-5 h-5" />
          </button>
          <div className="w-20 h-12 flex items-center justify-center bg-white border border-black rounded-2xl">
            <span className="font-['Inter:Medium',sans-serif] font-medium text-lg">
              {bookingState.guests}
            </span>
          </div>
          <button
            onClick={() => dispatch({ type: BOOKING_ACTIONS.INCREMENT_GUESTS })}
            className="w-12 h-12 flex items-center justify-center bg-white border border-black rounded-2xl hover:bg-gray-100 transition-colors"
            aria-label="Increase guests"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Occasion Selection */}
      <div className="space-y-4">
        <h3 className="font-karla font-bold text-lgtext-[#1f1f1f]">Occasion</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {["Birthday", "Anniversary"].map((occasionType) => (
            <button
              key={occasionType}
              onClick={() =>
                dispatch({
                  type: BOOKING_ACTIONS.SET_OCCASION,
                  payload: occasionType,
                })
              }
              className={`px-6 py-4 rounded-2xl font-karla font-bold text-base transition-all ${
                bookingState.occasion === occasionType
                  ? "bg-[#F4CE14] text-white"
                  : "bg-[#f2f2f2] text-[#cdcdcd] hover:bg-[#F4CE14] hover:text-white"
              }`}
            >
              {occasionType}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
