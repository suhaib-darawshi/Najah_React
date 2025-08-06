import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Heart, Star, Minus, Plus } from "lucide-react";
import product1 from "@/assets/product1.jpg";
import product2 from "@/assets/product2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const productsData = [
  { id: 1, name: "HERBAL CLAY CREAM", nameAr: "كريم الطين العشبي", price: "₪10.00", image: product1, description: "كريم طبيعي لعلاج مشاكل البشرة", category: "العناية بالبشرة", rating: 4.5, reviews: 23 },
  { id: 2, name: "ULTRA SHINE SERUM", nameAr: "سيروم النضارة الفائق", price: "₪15.00", image: product2, description: "سيروم مكثف لإشراق البشرة", category: "العناية بالبشرة", rating: 4.8, reviews: 45 }
];

const Product = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const product = productsData.find(p => p.id === parseInt(id || "1"));

  if (!product) {
    return <div>المنتج غير موجود</div>;
  }

  const images = [product.image, product.image, product.image];

  return (
    <div className="min-h-screen bg-background font-arabic" dir="rtl">
      <Header />
      <main className="pt-32">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4" data-aos="fade-right">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src={images[selectedImage]} 
                  alt={product.nameAr}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square overflow-hidden rounded-lg border-2 ${
                      selectedImage === index ? 'border-beauty-primary' : 'border-gray-200'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.nameAr} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6" data-aos="fade-left">
              <div>
                <h1 className="text-3xl font-bold text-beauty-primary mb-2 font-amiri">
                  {product.nameAr}
                </h1>
                <p className="text-lg text-foreground/60 font-medium">
                  {product.name}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                  <span className="text-sm text-foreground/70 mr-2">
                    ({product.reviews} تقييم)
                  </span>
                </div>
              </div>

              <div className="text-3xl font-bold text-beauty-primary">
                {product.price}
              </div>

              <p className="text-foreground/80 leading-relaxed">
                {product.description}. هذا المنتج مصنوع من أجود المواد الطبيعية ويوفر نتائج ممتازة للعناية بالبشرة. 
                مناسب لجميع أنواع البشرة ويمكن استخدامه يومياً للحصول على أفضل النتائج.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-beauty-primary mb-2">المكونات:</h3>
                  <ul className="text-sm text-foreground/70 space-y-1">
                    <li>• مستخلصات طبيعية عضوية</li>
                    <li>• فيتامين E وC</li>
                    <li>• زيوت أساسية مغذية</li>
                    <li>• خالي من المواد الكيميائية الضارة</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-beauty-primary mb-2">طريقة الاستخدام:</h3>
                  <p className="text-sm text-foreground/70">
                    يُطبق على البشرة النظيفة بحركات دائرية لطيفة. يُستخدم مرة أو مرتين يومياً للحصول على أفضل النتائج.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-200 rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button 
                  size="lg"
                  className="flex-1 bg-beauty-primary hover:bg-beauty-accent transition-all duration-300 hover:scale-105"
                >
                  <ShoppingCart className="w-5 h-5 ml-2" />
                  إضافة إلى السلة
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-beauty-primary text-beauty-primary hover:bg-beauty-primary hover:text-white"
                >
                  <Heart className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-beauty-primary mb-8 text-center font-amiri" data-aos="fade-up">
              منتجات ذات صلة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {productsData.filter(p => p.id !== product.id).map((relatedProduct, index) => (
                <Card 
                  key={relatedProduct.id}
                  className="group hover:shadow-xl transition-all duration-500 hover:scale-105"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.nameAr}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-beauty-primary mb-2">{relatedProduct.nameAr}</h3>
                    <p className="text-lg font-bold text-beauty-primary">{relatedProduct.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Product;