export default function ConfirmationStep({ bookingState }) {
  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month.toString().padStart(2, "0")}/${year}`;
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      <div className="space-y-6">
        {/* Name */}
        <div className="flex items-start">
          <p className="font-karla font-normal text-[#4c4c4c] text-base w-32 sm:w-40 flex-shrink-0">
            Name
          </p>
          <p className="font-karla font-bold text-[#1f1f1f] text-base">
            {bookingState.name || "Not provided"}
          </p>
        </div>

        {/* Phone Number */}
        <div className="flex items-start">
          <p className="font-karla font-normal text-[#4c4c4c] text-base w-32 sm:w-40 flex-shrink-0">
            Phone Number
          </p>
          <p className="font-karla font-bold text-[#1f1f1f] text-base">
            {bookingState.phone || "Not provided"}
          </p>
        </div>

        {/* Date & Time */}
        <div className="flex items-start">
          <p className="font-karla font-normal text-[#4c4c4c] text-base w-32 sm:w-40 flex-shrink-0">
            Date & Time:
          </p>
          <div className="flex items-center gap-2">
            <p className="font-karla font-bold text-[#1f1f1f] text-base">
              {bookingState.time || "--:--"}
            </p>
            <div className="w-1 h-1 rounded-full bg-[#1E1E1E]" />
            <p className="font-karla font-bold text-[#1f1f1f] text-base">
              {formatDate(bookingState.date) || "--/--/----"}
            </p>
          </div>
        </div>

        {/* Guests */}
        <div className="flex items-start">
          <p className="font-karla font-normal text-[#4c4c4c] text-base w-32 sm:w-40 flex-shrink-0">
            Guests
          </p>
          <p className="font-karla font-bold text-[#1f1f1f] text-base">
            {bookingState.guests}
          </p>
        </div>

        {/* Occasion */}
        {bookingState.occasion && (
          <div className="flex items-start">
            <p className="font-karla font-normal text-[#4c4c4c] text-base w-32 sm:w-40 flex-shrink-0">
              Occasion
            </p>
            <p className="font-karla font-bold text-[#1f1f1f] text-base">
              {bookingState.occasion}
            </p>
          </div>
        )}
      </div>

      {/* Additional Preferences */}
      {bookingState.preferences && (
        <div className="bg-[#f2f2f2] rounded-xl p-5 sm:p-6">
          <p className="font-karla font-normal text-[#1f1f1f] text-xs sm:text-sm leading-relaxed">
            {bookingState.preferences}
          </p>
        </div>
      )}
    </div>
  );
}
