export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <div>
              <h2 className="font-markazi text-6xl lg:text-7xl text-[#495E57]">
                Little Lemon
              </h2>
              <p className="font-markazi text-4xl leading-[0.5] text-[#495E57]/70">
                Chicago
              </p>
            </div>
            <div className="font-karla text-lg text-[#495E57]/80 leading-relaxed space-y-4 max-w-lg">
              <p>
                Little Lemon is a charming neighborhood bistro that serves
                simple food and classic cocktails in a lively but casual
                environment. The restaurant features a locally-sourced menu with
                daily specials.
              </p>
              <p>
                Our family recipes have been passed down through generations,
                bringing authentic Mediterranean flavors to the heart of
                Chicago.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] order-1 lg:order-2">
            {/* First image - positioned center-left */}
            <div className="absolute left-20 top-12 w-[276px] h-[338px] rounded-2xl shadow-xl overflow-hidden z-10 hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1758561087076-e647b2e2485a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGVycmFuZWFuJTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc2OTY4MzkzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Restaurant interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Second image - positioned right, slightly higher */}
            <div className="absolute right-0 top-0 w-[272px] h-[338px] rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1512149519538-136d1b8c574a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMHJlc3RhdXJhbnQlMjBraXRjaGVufGVufDF8fHx8MTc2OTc0NzcyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Chef cooking"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}