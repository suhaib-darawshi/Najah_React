import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Plus, MapPin, Edit, Trash2, ArrowRight } from "lucide-react";
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

const Addresses = () => {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState<Address[]>([
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

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleSetDefault = (id: string) => {
    setAddresses(prev => prev.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })));
  };

  const handleDelete = (id: string) => {
    setAddresses(prev => prev.filter(addr => addr.id !== id));
  };

  return (
    <div className="min-h-screen bg-beauty-cream font-arabic" dir="rtl">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
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
                عناويني
              </h1>
            </div>

            {/* Add New Address Button */}
            <div className="mb-8" data-aos="fade-up" data-aos-delay="100">
              <Link to="/add-address">
                <Button className="bg-beauty-primary hover:bg-beauty-accent transition-all duration-300 hover:scale-105">
                  <Plus className="w-5 h-5 ml-2" />
                  إضافة عنوان جديد
                </Button>
              </Link>
            </div>

            {/* Addresses List */}
            {addresses.length === 0 ? (
              <Card data-aos="fade-up" data-aos-delay="200">
                <CardContent className="text-center py-16">
                  <MapPin className="w-16 h-16 text-beauty-primary/50 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-beauty-primary mb-2">
                    لا توجد عناوين محفوظة
                  </h3>
                  <p className="text-foreground/70 mb-6">
                    أضف عنوانك الأول لتسهيل عملية الطلب
                  </p>
                  <Link to="/add-address">
                    <Button className="bg-beauty-primary hover:bg-beauty-accent">
                      إضافة عنوان
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                {addresses.map((address, index) => (
                  <Card 
                    key={address.id} 
                    className={`hover:shadow-lg transition-all duration-300 ${address.isDefault ? 'ring-2 ring-beauty-primary' : ''}`}
                    data-aos="fade-up"
                    data-aos-delay={200 + (index * 100)}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-beauty-primary" />
                          <h3 className="text-lg font-semibold text-beauty-primary">
                            {address.name}
                          </h3>
                          {address.isDefault && (
                            <span className="bg-beauty-accent text-white px-3 py-1 rounded-full text-sm">
                              العنوان الافتراضي
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <Button 
                            variant="ghost" 
                            size="icon"
                            className="hover:bg-beauty-primary hover:text-white"
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => handleDelete(address.id)}
                            className="hover:bg-red-500 hover:text-white"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-foreground/80">
                          {address.street}
                        </p>
                        <p className="text-foreground/80">
                          {address.city}، {address.country}
                        </p>
                        <p className="text-foreground/80">
                          هاتف: {address.phone}
                        </p>
                      </div>
                      {!address.isDefault && (
                        <Button 
                          variant="outline" 
                          className="mt-4 border-beauty-primary text-beauty-primary hover:bg-beauty-primary hover:text-white"
                          onClick={() => handleSetDefault(address.id)}
                        >
                          جعل افتراضي
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Addresses;