import { User, Phone } from "lucide-react";
import { BOOKING_ACTIONS } from "../../hooks/useBookingReducer";

export default function PersonalInfoStep({ bookingState, dispatch }) {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-8 space-y-8 pt-2">
      {/* Name */}
      <div className="space-y-4">
        <label className="font-karla font-bold text-lg text-[#1f1f1f]" htmlFor="name">
          Name
        </label>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <User className="w-6 h-6 text-[#292D32]" />
            <input
              type="text"
              value={bookingState.name}
              onChange={(e) =>
                dispatch({
                  type: BOOKING_ACTIONS.SET_NAME,
                  payload: e.target.value,
                })
              }
              placeholder="Jane Doe"
              className="flex-1 font-karla font-bold text-xl text-[#1f1f1f] bg-transparent border-none outline-none placeholder:text-gray-400"
            />
          </div>
          <div className="h-px bg-[#D9D9D9] w-full" />
        </div>
      </div>

      {/* Phone Number */}
      <div className="space-y-4">
        <label className="font-karla font-bold text-lg text-[#1f1f1f]" htmlFor="number">
          Phone Number
        </label>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6 text-[#292D32]" />
            <input
              type="tel"
              value={bookingState.phone}
              onChange={(e) =>
                dispatch({
                  type: BOOKING_ACTIONS.SET_PHONE,
                  payload: e.target.value,
                })
              }
              placeholder="0789 091 172"
              className="flex-1 font-karla font-bold text-xl text-[#1f1f1f] bg-transparent border-none outline-none placeholder:text-gray-400"
            />
          </div>
          <div className="h-px bg-[#D9D9D9] w-full" />
        </div>
      </div>

      {/* Additional Preferences */}
      <div className="space-y-4">
        <label className="font-karla font-normal text-[#1f1f1f] text-base" htmlFor="additional-preferences">
          Additional preferences:
        </label>
        <textarea
          value={bookingState.preferences}
          onChange={(e) =>
            dispatch({
              type: BOOKING_ACTIONS.SET_PREFERENCES,
              payload: e.target.value,
            })
          }
          placeholder="Let us know if you have any special requests or dietary requirements..."
          rows={5}
          className="w-full bg-[#f2f2f2] rounded-2xl p-6 font-karla font-normal text-base text-[#1f1f1f] resize-none outline-none placeholder:text-gray-400"
        />
      </div>
    </div>
  );
}
