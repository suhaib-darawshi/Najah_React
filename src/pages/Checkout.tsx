import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, MapPin, ShoppingBag, CreditCard, Plus } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AOS from "aos";

interface Address {
  id: string;
  name: string;
  street: string;
  city: string;
  country: string;
  phone: string;
  isDefault: boolean;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Checkout = () => {
  const navigate = useNavigate();
  const [selectedAddress, setSelectedAddress] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("cash");

  // Mock data - replace with actual data from context/state
  const [addresses] = useState<Address[]>([
    {
      id: "1",
      name: "المنزل",
      street: "شارع الاستقلال، عمارة رقم 15",
      city: "رام الله",
      country: "فلسطين", 
      phone: "00972-52-209-6962",
      isDefault: true
    }
  ]);

  const [cartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "كريم العناية الطبيعية",
      price: 89,
      quantity: 2,
      image: "/src/assets/product1.jpg"
    },
    {
      id: "2", 
      name: "سيروم مكافحة الشيخوخة",
      price: 156,
      quantity: 1,
      image: "/src/assets/product2.jpg"
    }
  ]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    
    // Set default address if available
    const defaultAddr = addresses.find(addr => addr.isDefault);
    if (defaultAddr) {
      setSelectedAddress(defaultAddr.id);
    }
  }, [addresses]);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 15; // Fixed shipping cost
  const total = subtotal + shipping;

  const handlePlaceOrder = () => {
    if (!selectedAddress) {
      alert("يرجى اختيار عنوان التوصيل");
      return;
    }
    
    // Handle order placement logic here
    console.log("Order placed:", {
      address: selectedAddress,
      paymentMethod,
      items: cartItems,
      total
    });
    
    alert("تم تأكيد طلبكم بنجاح!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-beauty-cream font-arabic" dir="rtl">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8" data-aos="fade-up">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => navigate(-1)}
                className="hover:bg-beauty-primary hover:text-white"
              >
                <ArrowRight className="w-5 h-5" />
              </Button>
              <h1 className="text-3xl font-bold text-beauty-primary font-amiri">
                إتمام الطلب
              </h1>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Delivery Address */}
                <Card data-aos="fade-up" data-aos-delay="100">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-6 h-6 text-beauty-primary" />
                      <h2 className="text-xl font-bold text-beauty-primary">
                        عنوان التوصيل
                      </h2>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {addresses.length === 0 ? (
                      <div className="text-center py-8">
                        <p className="text-foreground/70 mb-4">
                          لا توجد عناوين محفوظة
                        </p>
                        <Link to="/add-address">
                          <Button className="bg-beauty-primary hover:bg-beauty-accent">
                            <Plus className="w-4 h-4 ml-2" />
                            إضافة عنوان
                          </Button>
                        </Link>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {addresses.map((address) => (
                          <div
                            key={address.id}
                            className={`p-4 border rounded-lg cursor-pointer transition-all ${
                              selectedAddress === address.id
                                ? 'border-beauty-primary bg-beauty-primary/5'
                                : 'border-gray-200 hover:border-beauty-primary/50'
                            }`}
                            onClick={() => setSelectedAddress(address.id)}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <h3 className="font-semibold text-beauty-primary">
                                    {address.name}
                                  </h3>
                                  {address.isDefault && (
                                    <span className="bg-beauty-accent text-white px-2 py-1 rounded text-xs">
                                      افتراضي
                                    </span>
                                  )}
                                </div>
                                <p className="text-foreground/80 text-sm">
                                  {address.street}
                                </p>
                                <p className="text-foreground/80 text-sm">
                                  {address.city}، {address.country}
                                </p>
                                <p className="text-foreground/80 text-sm">
                                  {address.phone}
                                </p>
                              </div>
                              <input
                                type="radio"
                                name="address"
                                checked={selectedAddress === address.id}
                                onChange={() => setSelectedAddress(address.id)}
                                className="text-beauty-primary"
                              />
                            </div>
                          </div>
                        ))}
                        <Link to="/addresses">
                          <Button variant="outline" className="w-full border-beauty-primary text-beauty-primary hover:bg-beauty-primary hover:text-white">
                            إدارة العناوين
                          </Button>
                        </Link>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Payment Method */}
                <Card data-aos="fade-up" data-aos-delay="200">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-6 h-6 text-beauty-primary" />
                      <h2 className="text-xl font-bold text-beauty-primary">
                        طريقة الدفع
                      </h2>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div
                        className={`p-4 border rounded-lg cursor-pointer transition-all ${
                          paymentMethod === 'cash'
                            ? 'border-beauty-primary bg-beauty-primary/5'
                            : 'border-gray-200 hover:border-beauty-primary/50'
                        }`}
                        onClick={() => setPaymentMethod('cash')}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-beauty-primary">
                              الدفع عند الاستلام
                            </h3>
                            <p className="text-foreground/70 text-sm">
                              ادفع نقداً عند استلام طلبك
                            </p>
                          </div>
                          <input
                            type="radio"
                            name="payment"
                            checked={paymentMethod === 'cash'}
                            onChange={() => setPaymentMethod('cash')}
                            className="text-beauty-primary"
                          />
                        </div>
                      </div>

                      <div
                        className={`p-4 border rounded-lg cursor-pointer transition-all ${
                          paymentMethod === 'card'
                            ? 'border-beauty-primary bg-beauty-primary/5'
                            : 'border-gray-200 hover:border-beauty-primary/50'
                        }`}
                        onClick={() => setPaymentMethod('card')}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-beauty-primary">
                              بطاقة ائتمانية
                            </h3>
                            <p className="text-foreground/70 text-sm">
                              ادفع باستخدام بطاقتك الائتمانية
                            </p>
                          </div>
                          <input
                            type="radio"
                            name="payment"
                            checked={paymentMethod === 'card'}
                            onChange={() => setPaymentMethod('card')}
                            className="text-beauty-primary"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card data-aos="fade-up" data-aos-delay="300" className="sticky top-32">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <ShoppingBag className="w-6 h-6 text-beauty-primary" />
                      <h2 className="text-xl font-bold text-beauty-primary">
                        ملخص الطلب
                      </h2>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Cart Items */}
                      <div className="space-y-3">
                        {cartItems.map((item) => (
                          <div key={item.id} className="flex items-center gap-3">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div className="flex-1">
                              <h4 className="font-medium text-sm">{item.name}</h4>
                              <p className="text-xs text-foreground/70">
                                الكمية: {item.quantity}
                              </p>
                            </div>
                            <span className="font-semibold text-beauty-primary">
                              ${item.price * item.quantity}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="border-t pt-4 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>المجموع الفرعي</span>
                          <span>${subtotal}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>التوصيل</span>
                          <span>${shipping}</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg text-beauty-primary border-t pt-2">
                          <span>الإجمالي</span>
                          <span>${total}</span>
                        </div>
                      </div>

                      <Button 
                        onClick={handlePlaceOrder}
                        className="w-full bg-beauty-primary hover:bg-beauty-accent transition-all duration-300 hover:scale-105"
                        size="lg"
                      >
                        تأكيد الطلب
                      </Button>

                      <p className="text-xs text-foreground/70 text-center">
                        بالضغط على "تأكيد الطلب" فإنك توافق على 
                        <Link to="/terms" className="text-beauty-primary hover:underline mx-1">
                          الشروط والأحكام
                        </Link>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;