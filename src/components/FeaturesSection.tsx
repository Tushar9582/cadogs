import { Truck, RotateCcw, Crown, Headphones } from "lucide-react";

const features = [
  { icon: Truck, title: "Free Shipping", desc: "Free shipping for orders over $120" },
  { icon: RotateCcw, title: "Money Back", desc: "Back guarantee within 7 days" },
  { icon: Crown, title: "Member Offers", desc: "Exclusive deals on orders over $150" },
  { icon: Headphones, title: "24/7 Support", desc: "Online support available anytime" },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-20 bg-section-alt">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="bg-card rounded-2xl p-6 text-center border border-border hover:shadow-lg hover:border-primary/20 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{f.title}</h3>
                <p className="text-xs text-muted-foreground">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
