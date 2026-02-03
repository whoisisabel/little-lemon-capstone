import { Check } from "lucide-react";

export default function ProgressBar({ currentStep }) {
  const steps = [
    { number: 1, label: "Basic Info" },
    { number: 2, label: "Personal Info" },
    { number: 3, label: "Confirmation" },
  ];

  return (
    <div className="w-full max-w-md mx-auto px-4 py-8">
      <div className="relative flex items-start justify-between">
        {/* Progress Line Background */}
        <div
          className="absolute top-3 left-0 right-0 h-0.5 bg-[#DADADA]"
          style={{ left: "12px", right: "12px" }}
        />

        {/* Active Progress Line */}
        <div
          className="absolute top-3 left-0 h-0.5 bg-black transition-all duration-300"
          style={{
            left: "12px",
            width:
              currentStep === 1 ? "0%" : currentStep === 2 ? "50%" : "100%",
            maxWidth: "calc(100% - 24px)",
          }}
        />

        {steps.map((step) => (
          <div
            key={step.number}
            className="flex flex-col items-center relative z-10"
            style={{ width: "80px" }}
          >
            {/* Step Circle */}
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center ${
                step.number < currentStep
                  ? "bg-[#495E57]"
                  : step.number === currentStep
                    ? "bg-[#495E57]"
                    : "bg-[#DADADA]"
              }`}
            >
              {step.number < currentStep ? (
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              ) : (
                <span className="text-white text-xs font-karla font-bold">
                  {step.number}
                </span>
              )}
            </div>

            {/* Step Label */}
            <p
              className={`mt-4 text-xs font-karla font-bold text-center whitespace-nowrap ${
                step.number <= currentStep ? "text-[#495E57]" : "text-[#d9d9d9]"
              }`}
            >
              {step.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
