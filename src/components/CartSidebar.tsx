import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingCart } from "lucide-react";
import product1 from "@/assets/product-1.png";
import product2 from "@/assets/product-2.png";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  itemCount: number;
}

const cartItems = [
  { name: "Premium Dog Food", price: 29.99, qty: 1, image: product1 },
  { name: "Natural Cat Food", price: 12.50, qty: 2, image: product2 },
];

const CartSidebar = ({ isOpen, onClose, itemCount }: CartSidebarProps) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-card z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-primary" />
                <h3 className="font-heading font-bold text-lg text-foreground">Your Cart ({itemCount})</h3>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-muted rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.map((item, i) => (
                <div key={i} className="flex gap-4 p-3 bg-section-alt rounded-xl">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-contain bg-card" />
                  <div className="flex-1">
                    <h4 className="font-heading font-semibold text-sm text-foreground">{item.name}</h4>
                    <p className="text-primary font-bold text-sm mt-1">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button className="w-6 h-6 rounded bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{item.qty}</span>
                      <button className="w-6 h-6 rounded bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-border space-y-4">
              <div className="flex justify-between font-heading font-bold text-foreground">
                <span>Subtotal</span>
                <span className="text-primary">${subtotal.toFixed(2)}</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a href="#" className="border-2 border-primary text-primary text-center py-3 rounded-full font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
                  View Cart
                </a>
                <a href="#" className="bg-primary text-primary-foreground text-center py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity">
                  Checkout
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
