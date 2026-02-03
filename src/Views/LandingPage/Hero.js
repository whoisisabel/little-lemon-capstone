import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="bg-gradient-to-br from-[#495E57] to-[#3d4f49] py-20 lg:py-24 mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 animate-slide-in-left">
            <div>
              <h1 className="font-markazi text-6xl lg:text-7xl text-[#F4CE14] mb-0">
                Little Lemon
              </h1>
              <p className="font-markazi text-4xl leading-[0.5] text-white/90">
                Chicago
              </p>
            </div>
            <p className="font-karla text-lg text-white/80 max-w-md leading-relaxed">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <button
              className="bg-[#F4CE14] text-[#495E57] px-8 py-4 rounded-full font-karla text-lg hover:bg-white hover:scale-105 transition-all shadow-xl hover:shadow-2xl font-medium"
              onClick={() => navigate("/booking")}
            >
              Reserve a Table
            </button>
          </div>
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="w-full max-w-[400px] h-[400px] rounded-2xl shadow-2xl relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1684568519320-8c6b14f7e65f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMHBsYXRpbmd8ZW58MXx8fHwxNzY5NzY2MjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Restaurant dish"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
