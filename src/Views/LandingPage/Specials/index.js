import MenuCard from "./MenuCard";

export default function Specials() {
  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16 gap-4">
          <h2 className="font-markazi text-5xl text-[#495E57]">
            This week's specials!
          </h2>
          <button className="bg-[#F4CE14] text-[#495E57] px-8 py-4 rounded-full font-karla text-lg font-medium hover:bg-[#495E57] hover:text-white transition-all shadow-lg hover:shadow-xl whitespace-nowrap">
            Online Menu
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MenuCard
            title="Greek Salad"
            price="$12.99"
            description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
            image="https://images.unsplash.com/photo-1769481614068-47cfb4d1f125?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlayUyMHNhbGFkJTIwZnJlc2glMjB2ZWdldGFibGVzfGVufDF8fHx8MTc2OTY4MTAwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          />
          <MenuCard
            title="Bruschetta"
            price="$5.99"
            description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
            image="https://images.unsplash.com/photo-1761315412580-08dd503b8d89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicnVzY2hldHRhJTIwaXRhbGlhbiUyMGFwcGV0aXplcnxlbnwxfHx8fDE3Njk3Mjk4ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          />
          <MenuCard
            title="Lemon Dessert"
            price="$5.00"
            description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
            image="https://images.unsplash.com/photo-1730672558646-c65c4784dd16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZW1vbiUyMGRlc3NlcnQlMjBjYWtlfGVufDF8fHx8MTc2OTc2NzA1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          />
        </div>
      </div>
    </section>
  );
}
