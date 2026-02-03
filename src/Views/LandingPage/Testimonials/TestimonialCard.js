export default function TestimonialCard({ name, rating, review }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 space-y-4">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-xl ${i < rating ? "text-[#F4CE14]" : "text-gray-300"}`}
          >
            ★
          </span>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-[#F4CE14] to-[#F4CE14]/60 rounded-full flex items-center justify-center font-karla font-bold text-[#495E57] text-lg">
          {name.charAt(0)}
        </div>
        <p className="font-karla font-bold text-[#495E57]">{name}</p>
      </div>
      <p className="font-karla text-[#495e57]/70 text-sm leading-relaxed italic">
        &quot;{review}&quot;
      </p>
    </div>
  );
}