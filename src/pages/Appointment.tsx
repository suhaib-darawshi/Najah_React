import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  "العلاج بالوخز الصيني",
  "العلاج بالحجامة",
  "تجميل الوجه بالليزر",
  "إزالة الشعر بالليزر",
  "علاج السيلوليت",
  "شد الوجه غير الجراحي",
  "علاج التجاعيد",
  "تفتيح البشرة"
];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"
];

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    notes: ""
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Appointment booked:", formData);
    alert("تم حجز موعدك بنجاح! سنتواصل معك قريباً لتأكيد الموعد.");
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-background font-arabic" dir="rtl">
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="bg-beauty-cream py-20">
          <div className="container mx-auto px-4">
            <div className="text-center" data-aos="fade-up">
              <h1 className="text-4xl lg:text-5xl font-bold text-beauty-primary mb-6 font-amiri">
                احجز موعدك الآن
              </h1>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                احجز موعدك مع خبرائنا المتخصصين واحصل على أفضل خدمات العناية والتجميل
              </p>
            </div>
          </div>
        </section>

        {/* Appointment Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="shadow-2xl" data-aos="fade-up">
                <CardHeader className="text-center pb-8">
                  <h2 className="text-2xl font-bold text-beauty-primary font-amiri">
                    تفاصيل الحجز
                  </h2>
                  <p className="text-foreground/70">
                    املأ النموذج أدناه وسنتواصل معك لتأكيد الموعد
                  </p>
                </CardHeader>

                <CardContent className="px-8 pb-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-beauty-primary flex items-center">
                          <User className="w-4 h-4 ml-2" />
                          الاسم الكامل
                        </label>
                        <input
                          type="text"
                          placeholder="أدخل اسمك الكامل"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-beauty-primary transition-all"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-beauty-primary flex items-center">
                          <Phone className="w-4 h-4 ml-2" />
                          رقم الهاتف
                        </label>
                        <input
                          type="tel"
                          placeholder="أدخل رقم هاتفك"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-beauty-primary transition-all"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-beauty-primary flex items-center">
                        <Mail className="w-4 h-4 ml-2" />
                        البريد الإلكتروني
                      </label>
                      <input
                        type="email"
                        placeholder="أدخل بريدك الإلكتروني"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-beauty-primary transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-beauty-primary">
                        نوع الخدمة
                      </label>
                      <select
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-beauty-primary transition-all"
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        required
                      >
                        <option value="">اختر نوع الخدمة</option>
                        {services.map(service => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-beauty-primary flex items-center">
                          <Calendar className="w-4 h-4 ml-2" />
                          التاريخ المفضل
                        </label>
                        <input
                          type="date"
                          min={today}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-beauty-primary transition-all"
                          value={formData.date}
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-beauty-primary flex items-center">
                          <Clock className="w-4 h-4 ml-2" />
                          الوقت المفضل
                        </label>
                        <select
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-beauty-primary transition-all"
                          value={formData.time}
                          onChange={(e) => setFormData({...formData, time: e.target.value})}
                          required
                        >
                          <option value="">اختر الوقت</option>
                          {timeSlots.map(time => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-beauty-primary flex items-center">
                        <MessageSquare className="w-4 h-4 ml-2" />
                        ملاحظات إضافية (اختيارية)
                      </label>
                      <textarea
                        placeholder="أضف أي ملاحظات أو طلبات خاصة"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-beauty-primary transition-all resize-none"
                        value={formData.notes}
                        onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-beauty-primary hover:bg-beauty-accent transition-all duration-300 hover:scale-105"
                    >
                      تأكيد الحجز
                    </Button>
                  </form>

                  <div className="mt-8 p-6 bg-beauty-cream rounded-lg">
                    <h3 className="font-bold text-beauty-primary mb-4">معلومات مهمة:</h3>
                    <ul className="space-y-2 text-sm text-foreground/70">
                      <li>• سيتم تأكيد موعدك خلال 24 ساعة</li>
                      <li>• يرجى الحضور قبل 15 دقيقة من موعدك</li>
                      <li>• في حالة التأخير أكثر من 15 دقيقة، قد يتم إلغاء الموعد</li>
                      <li>• يمكن إلغاء أو تعديل الموعد قبل 24 ساعة على الأقل</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-beauty-cream">
          <div className="container mx-auto px-4">
            <div className="text-center" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-beauty-primary mb-8 font-amiri">
                أو تواصل معنا مباشرة
              </h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-beauty-primary mx-auto mb-4" />
                  <h3 className="font-bold text-beauty-primary mb-2">اتصل بنا</h3>
                  <p className="text-foreground/70">00972-52-209-6962</p>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 text-beauty-primary mx-auto mb-4" />
                  <h3 className="font-bold text-beauty-primary mb-2">راسلنا</h3>
                  <p className="text-foreground/70">info@alnajah.center</p>
                </div>
                <div className="text-center">
                  <Calendar className="w-8 h-8 text-beauty-primary mx-auto mb-4" />
                  <h3 className="font-bold text-beauty-primary mb-2">ساعات العمل</h3>
                  <p className="text-foreground/70">السبت - الخميس: 9:00 - 17:00</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Appointment;