import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AOS from "aos";

const AddAddress = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    street: "",
    city: "",
    country: "فلسطين",
    phone: "",
    isDefault: false
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle address save logic here
    console.log("Address saved:", formData);
    navigate("/addresses");
  };

  return (
    <div className="min-h-screen bg-beauty-cream font-arabic" dir="rtl">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
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
                إضافة عنوان جديد
              </h1>
            </div>

            <Card data-aos="fade-up" data-aos-delay="200">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-beauty-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-beauty-primary" />
                </div>
                <h2 className="text-2xl font-bold text-beauty-primary font-amiri">
                  معلومات العنوان
                </h2>
                <p className="text-foreground/70">
                  أدخل تفاصيل العنوان الجديد
                </p>
              </CardHeader>

              <CardContent className="px-8 pb-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-beauty-primary">
                      اسم العنوان
                    </label>
                    <input
                      type="text"
                      placeholder="مثال: المنزل، العمل، العائلة"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-beauty-primary transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-beauty-primary">
                      الشارع والعنوان التفصيلي
                    </label>
                    <textarea
                      placeholder="أدخل اسم الشارع ورقم المبنى والشقة"
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-beauty-primary transition-all resize-none"
                      value={formData.street}
                      onChange={(e) => setFormData({...formData, street: e.target.value})}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-beauty-primary">
                        المدينة
                      </label>
                      <input
                        type="text"
                        placeholder="أدخل اسم المدينة"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-beauty-primary transition-all"
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-beauty-primary">
                        البلد
                      </label>
                      <select
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-beauty-primary transition-all"
                        value={formData.country}
                        onChange={(e) => setFormData({...formData, country: e.target.value})}
                        required
                      >
                        <option value="فلسطين">فلسطين</option>
                        <option value="الأردن">الأردن</option>
                        <option value="لبنان">لبنان</option>
                        <option value="سوريا">سوريا</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-beauty-primary">
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      placeholder="00972-52-209-6962"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-beauty-primary transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>

                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="isDefault"
                      className="ml-2 rounded"
                      checked={formData.isDefault}
                      onChange={(e) => setFormData({...formData, isDefault: e.target.checked})}
                    />
                    <label htmlFor="isDefault" className="text-sm text-foreground/70">
                      جعل هذا العنوان افتراضي
                    </label>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button 
                      type="submit" 
                      className="flex-1 bg-beauty-primary hover:bg-beauty-accent transition-all duration-300 hover:scale-105"
                    >
                      حفظ العنوان
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline"
                      className="flex-1 border-gray-300"
                      onClick={() => navigate(-1)}
                    >
                      إلغاء
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AddAddress;