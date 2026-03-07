import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { PawPrint, Dog, Cat, Fish, Bird, Rabbit, Turtle } from "lucide-react";
import "swiper/css";

const categories = [
  { name: "Dogs", count: 12, icon: Dog, color: "10 95% 61%" },
  { name: "Cats", count: 8, icon: Cat, color: "35 90% 55%" },
  { name: "Fish", count: 6, icon: Fish, color: "215 98% 59%" },
  { name: "Birds", count: 5, icon: Bird, color: "142 70% 45%" },
  { name: "Rabbits", count: 4, icon: Rabbit, color: "280 70% 60%" },
  { name: "Turtles", count: 3, icon: Turtle, color: "170 60% 45%" },
];

const CategorySection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-3">
            <PawPrint className="w-4 h-4" /> Browse Categories
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Browse by Pet Category
          </h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <SwiperSlide key={cat.name}>
                <a
                  href="#"
                  className="group flex flex-col items-center p-6 rounded-2xl bg-card shadow-sm hover:shadow-lg transition-all border border-border hover:border-primary/30"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 bg-primary/10 group-hover:bg-primary/20 transition-colors"
                  >
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{cat.name}</h3>
                  <p className="text-xs text-muted-foreground">{cat.count} Products</p>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default CategorySection;
