import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { useTranslation } from 'react-i18next';
import product1 from "@/assets/product1.jpg";
import product2 from "@/assets/product2.jpg";

const productsData = [
  {
    id: 1,
    name: "HERBAL CLAY CREAM",
    nameAr: "كريم الطين العشبي",
    price: "₪10.00",
    image: product1,
    description: "كريم طبيعي لعلاج مشاكل البشرة"
  },
  {
    id: 2,
    name: "ULTRA SHINE SERUM", 
    nameAr: "سيروم النضارة الفائق",
    price: "₪15.00",
    image: product2,
    description: "سيروم مكثف لإشراق البشرة"
  },
  {
    id: 3,
    name: "HERBAL CLAY CREAM",
    nameAr: "كريم الطين العشبي",
    price: "₪10.00", 
    image: product1,
    description: "كريم طبيعي لعلاج مشاكل البشرة"
  },
  {
    id: 4,
    name: "ULTRA SHINE SERUM",
    nameAr: "سيروم النضارة الفائق", 
    price: "₪15.00",
    image: product2,
    description: "سيروم مكثف لإشراق البشرة"
  }
];

const Products = () => {
  const { t } = useTranslation();
  return (
    <section id="products" className="py-20 bg-white font-arabic">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-beauty-primary mb-6 font-amiri">
            {t('products.title')}
          </h2>
          <p className="text-lg text-foreground/80 max-w-4xl mx-auto leading-relaxed">
            {t('products.subtitle')}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productsData.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-xl transition-all duration-500 hover:scale-105 bg-white border-0 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.nameAr} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Wishlist Button */}
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 bg-white/90 hover:bg-white"
                >
                  <Heart className="w-4 h-4 text-beauty-primary" />
                </Button>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-beauty-primary group-hover:text-beauty-accent transition-colors duration-300">
                      {product.nameAr}
                    </h3>
                    <p className="text-sm text-foreground/60 font-medium">
                      {product.name}
                    </p>
                  </div>
                  
                  <p className="text-sm text-foreground/70">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-beauty-primary">
                      {product.price}
                    </span>
                    <Link to={`/product/${product.id}`}>
                      <Button 
                        size="sm"
                        className="bg-beauty-primary hover:bg-beauty-accent transition-all duration-300 hover:scale-105"
                      >
                        <ShoppingCart className="w-4 h-4 ml-2" />
                        اختر الخيارات
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="flex justify-center items-center mt-12">
          <Link to="/shop">
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-beauty-primary text-beauty-primary hover:bg-beauty-primary hover:text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              عرض جميع المنتجات
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;