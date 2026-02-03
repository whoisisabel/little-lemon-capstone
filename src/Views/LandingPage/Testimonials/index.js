import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section
      id="reservations"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-markazi text-5xl text-[#495E57] text-center mb-4">
          Testimonials
        </h2>
        <p className="font-karla text-center text-[#495E57]/70 mb-12 max-w-2xl mx-auto">
          See what our customers are saying about us
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <TestimonialCard
            name="Sarah M."
            rating={5}
            review="Amazing food and wonderful atmosphere! The Greek Salad is to die for."
          />
          <TestimonialCard
            name="John D."
            rating={5}
            review="Best Mediterranean restaurant in Chicago. Highly recommend the Bruschetta!"
          />
          <TestimonialCard
            name="Emily R."
            rating={4}
            review="Great family-owned restaurant with authentic recipes. Will definitely come back!"
          />
          <TestimonialCard
            name="Michael T."
            rating={5}
            review="The Lemon Dessert is incredible. Service is always top-notch!"
          />
        </div>
      </div>
    </section>
  );
}