import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2, Minus, Plus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import product1 from "@/assets/product1.jpg";
import product2 from "@/assets/product2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "كريم الطين العشبي", price: 10, quantity: 2, image: product1 },
    { id: 2, name: "سيروم النضارة الفائق", price: 15, quantity: 1, image: product2 }
  ]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background font-arabic" dir="rtl">
        <Header />
        <main className="pt-32">
          <div className="container mx-auto px-4 py-16 text-center">
            <div data-aos="fade-up">
              <ShoppingBag className="w-24 h-24 text-beauty-primary mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-beauty-primary mb-4 font-amiri">
                سلة التسوق فارغة
              </h1>
              <p className="text-foreground/70 mb-8">
                لم تقم بإضافة أي منتجات إلى سلة التسوق بعد
              </p>
              <Link to="/shop">
                <Button size="lg" className="bg-beauty-primary hover:bg-beauty-accent">
                  تصفح المنتجات
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-arabic" dir="rtl">
      <Header />
      <main className="pt-32">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-beauty-primary mb-8 text-center font-amiri" data-aos="fade-up">
            سلة التسوق
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item, index) => (
                <Card key={item.id} className="overflow-hidden" data-aos="fade-up" data-aos-delay={index * 100}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <h3 className="font-bold text-beauty-primary">{item.name}</h3>
                        <p className="text-lg font-semibold text-beauty-accent">₪{item.price}</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-gray-200 rounded-lg">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="px-4 py-2 font-medium">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="text-lg font-bold text-beauty-primary">
                        ₪{item.price * item.quantity}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-32" data-aos="fade-left">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-beauty-primary mb-6 font-amiri">
                    ملخص الطلب
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>المجموع الفرعي:</span>
                      <span>₪{total}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>الشحن:</span>
                      <span>مجاني</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between text-lg font-bold text-beauty-primary">
                        <span>المجموع الكلي:</span>
                        <span>₪{total}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <Link to="/checkout">
                      <Button size="lg" className="w-full bg-beauty-primary hover:bg-beauty-accent">
                        متابعة الدفع
                      </Button>
                    </Link>
                    <Link to="/shop">
                      <Button variant="outline" size="lg" className="w-full border-beauty-primary text-beauty-primary hover:bg-beauty-primary hover:text-white">
                        متابعة التسوق
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;