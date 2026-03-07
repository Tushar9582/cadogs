import { Star, ShoppingCart, Heart, Eye } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  onAddToCart?: () => void;
}

const ProductCard = ({ name, price, oldPrice, image, rating, reviews, badge, onAddToCart }: ProductCardProps) => {
  return (
    <div className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className="relative overflow-hidden bg-section-alt p-4 aspect-square flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
        {badge && (
          <span className="absolute top-3 left-3 bg-badge-new text-badge-new-fg text-xs font-bold px-3 py-1 rounded-full">
            {badge}
          </span>
        )}
        {/* Hover actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
          <button className="w-9 h-9 rounded-full bg-card shadow-md flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
            <Heart className="w-4 h-4" />
          </button>
          <button className="w-9 h-9 rounded-full bg-card shadow-md flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${i < rating ? "fill-primary text-primary" : "fill-muted text-muted"}`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">({reviews})</span>
        </div>
        <a href="#" className="font-heading font-semibold text-sm text-foreground hover:text-primary transition-colors line-clamp-2 mb-2 block">
          {name}
        </a>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-primary">${price.toFixed(2)}</span>
            {oldPrice && (
              <span className="text-sm text-muted-foreground line-through">${oldPrice.toFixed(2)}</span>
            )}
          </div>
          <button
            onClick={onAddToCart}
            className="w-9 h-9 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
