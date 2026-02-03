import DeliveryIcon from "./DeliveryIcon";

export default function MenuCard({ title, price, description, image, delay }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="font-markazi font-medium text-3xl text-[#495E57]">
            {title}
          </h3>
          <span className="font-karla font-bold text-[#EE9972] text-lg">
            {price}
          </span>
        </div>
        <p className="font-karla text-[#495e57]/80 text-base leading-relaxed">
          {description}
        </p>
        <button className="inline-flex items-center gap-2 font-karla font-medium text-[#495E57] hover:text-[#F4CE14] transition-colors group/btn">
          Order a delivery
          <span className="group-hover/btn:translate-x-1 transition-transform">
            <DeliveryIcon />
          </span>
        </button>
      </div>
    </div>
  );
}