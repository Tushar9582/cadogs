import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { PawPrint, ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import "swiper/css";
import "swiper/css/navigation";
import product1 from "@/assets/product-1.png";
import product2 from "@/assets/product-2.png";
import product3 from "@/assets/product-3.png";
import product4 from "@/assets/product-4.png";

const trendingProducts = [
  { name: "Organic Beef Dog Treats", price: 14.99, image: product1, rating: 5, reviews: 33 },
  { name: "Salmon Cat Food Premium", price: 18.50, oldPrice: 23.99, image: product2, rating: 5, reviews: 45, badge: "Trending" },
  { name: "Rubber Fetch Ball Set", price: 7.99, image: product3, rating: 4, reviews: 19 },
  { name: "Pet Conditioner Spray", price: 13.99, image: product4, rating: 5, reviews: 28 },
  { name: "Lamb & Rice Dog Food", price: 32.99, image: product1, rating: 5, reviews: 51 },
  { name: "Indoor Cat Food Mix", price: 21.50, image: product2, rating: 4, reviews: 16, badge: "New" },
];

interface TrendingSectionProps {
  onAddToCart: () => void;
}

const TrendingSection = ({ onAddToCart }: TrendingSectionProps) => {
  return (
    <section className="py-16 md:py-20 bg-section-alt">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-3">
              <PawPrint className="w-4 h-4" /> Popular Now
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Trending This Week
            </h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button className="trending-prev w-10 h-10 rounded-full border-2 border-border hover:border-primary hover:text-primary flex items-center justify-center transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="trending-next w-10 h-10 rounded-full border-2 border-border hover:border-primary hover:text-primary flex items-center justify-center transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={{ prevEl: ".trending-prev", nextEl: ".trending-next" }}
          breakpoints={{
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {trendingProducts.map((product, i) => (
            <SwiperSlide key={i}>
              <ProductCard {...product} onAddToCart={onAddToCart} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TrendingSection;
