import ProductCard from "./ProductCard";
import { PawPrint, ArrowRight } from "lucide-react";
import product1 from "@/assets/product-1.png";
import product2 from "@/assets/product-2.png";
import product3 from "@/assets/product-3.png";
import product4 from "@/assets/product-4.png";

const products = [
  { name: "Premium Dog Food - Chicken & Rice", price: 29.99, oldPrice: 39.99, image: product1, rating: 5, reviews: 42, badge: "New" },
  { name: "Natural Cat Food - Tuna Delight", price: 12.50, image: product2, rating: 5, reviews: 38 },
  { name: "Colorful Bone & Ball Set", price: 8.99, oldPrice: 12.99, image: product3, rating: 4, reviews: 25 },
  { name: "Organic Pet Shampoo", price: 15.99, image: product4, rating: 5, reviews: 56 },
  { name: "Grain-Free Dog Kibble", price: 34.99, oldPrice: 44.99, image: product1, rating: 5, reviews: 31, badge: "Sale" },
  { name: "Gourmet Cat Treats", price: 9.99, image: product2, rating: 4, reviews: 18 },
  { name: "Interactive Pet Toy Bundle", price: 19.99, image: product3, rating: 5, reviews: 44, badge: "Hot" },
  { name: "Gentle Puppy Shampoo", price: 11.99, image: product4, rating: 5, reviews: 29 },
  { name: "Senior Dog Food Formula", price: 27.50, image: product1, rating: 4, reviews: 22 },
  { name: "Kitten Starter Pack", price: 24.99, oldPrice: 32.99, image: product2, rating: 5, reviews: 37, badge: "New" },
];

interface BestSellingProductsProps {
  onAddToCart: () => void;
}

const BestSellingProducts = ({ onAddToCart }: BestSellingProductsProps) => {
  return (
    <section id="products" className="py-16 md:py-20">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-3">
              <PawPrint className="w-4 h-4" /> Best Sellers
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Best Selling Pet Products
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellingProducts;
