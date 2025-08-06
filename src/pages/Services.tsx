import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import acupunctureIcon from "@/assets/acupuncture.png";
import cuppingIcon from "@/assets/cupping.png";
import AOS from "aos";
import "aos/dist/aos.css";

const servicesData = [
  {
    id: 1,
    title: "العلاج بالنحل",
    description: "علاج طبيعي يستخدم لسعات النحل لعلاج مشاكل مثل التهاب المفاصل والروماتيزم",
    fullDescription: "العلاج بالنحل هو أسلوب علاجي طبيعي قديم يستخدم منتجات النحل مثل العسل وسم النحل وحبوب اللقاح في علاج مختلف الحالات الصحية. يساعد في تخفيف آلام المفاصل والالتهابات.",
    icon: acupunctureIcon,
    color: "bg-beauty-primary",
    benefits: ["تخفيف آلام المفاصل", "تقوية جهاز المناعة", "علاج الالتهابات", "تحسين الدورة الدموية"]
  },
  {
    id: 2,
    title: "الوخز بالابر الصينية",
    description: "تقنية تقليدية لتحفيز نقاط معينة على الجسم لتحسين الصحة",
    fullDescription: "الوخز بالإبر الصينية هو تقنية علاجية تقليدية تستخدم إبر رفيعة يتم إدخالها في نقاط محددة على الجسم لتحفيز الطاقة وتحسين التوازن الطبيعي للجسم.",
    icon: acupunctureIcon,
    color: "bg-beauty-accent",
    benefits: ["تخفيف الألم المزمن", "علاج القلق والتوتر", "تحسين النوم", "تقوية الطاقة"]
  },
  {
    id: 3,
    title: "الحجامة الطبية",
    description: "علاج يستخدم الكؤوس لإنشاء فراغ وتحسين الدورة الدموية",
    fullDescription: "الحجامة هي تقنية علاجية تقليدية تستخدم كؤوس خاصة لإنشاء ضغط سالب على الجلد، مما يساعد في تحسين الدورة الدموية وإزالة السموم من الجسم.",
    icon: cuppingIcon,
    color: "bg-beauty-primary",
    benefits: ["تحسين الدورة الدموية", "إزالة السموم", "تخفيف التوتر العضلي", "تقوية المناعة"]
  },
  {
    id: 4,
    title: "علاج الشقيقة والصداع النصفي",
    description: "استخدام تقنيات مختلفة لتخفيف الصداع والشقيقة",
    fullDescription: "برنامج علاجي شامل لعلاج الصداع النصفي والشقيقة باستخدام مجموعة من التقنيات الطبيعية والعلاجية المتقدمة لتوفير راحة فورية وطويلة المدى.",
    icon: acupunctureIcon,
    color: "bg-beauty-accent",
    benefits: ["تخفيف الألم الفوري", "منع نوبات الصداع", "تحسين جودة الحياة", "علاج طبيعي آمن"]
  },
  {
    id: 5,
    title: "العلاج عن طريق الموكسا",
    description: "استخدام العشب الموكسا لتحفيز الدورة الدموية وتحسين الصحة",
    fullDescription: "علاج الموكسا هو تقنية صينية تقليدية تستخدم حرق عشبة الأرتيميسيا (الموكسا) على نقاط الوخز لتحفيز الطاقة وتعزيز الشفاء الطبيعي للجسم.",
    icon: cuppingIcon,
    color: "bg-beauty-primary",
    benefits: ["تحفيز الطاقة الحيوية", "تقوية الجهاز الهضمي", "تحسين المناعة", "علاج البرد والرطوبة"]
  }
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-background font-arabic" dir="rtl">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-beauty-cream">
          <div className="container mx-auto px-4">
            <div className="text-center" data-aos="fade-up">
              <h1 className="text-5xl font-bold text-beauty-primary mb-6 font-amiri">
                خدماتنا العلاجية
              </h1>
              <p className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
                نقدم مجموعة شاملة من العلاجات التكميلية والطبيعية لتحسين صحتك وعافيتك
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service, index) => (
                <Card 
                  key={service.id} 
                  className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white border-0 overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <CardContent className="p-8 text-center relative">
                    {/* Service Number */}
                    <div className={`absolute top-4 right-4 w-12 h-12 ${service.color} text-white rounded-full flex items-center justify-center font-bold text-lg`}>
                      {String(service.id).padStart(2, '0')}
                    </div>

                    {/* Icon */}
                    <div className="mb-6 flex justify-center">
                      <div className="w-20 h-20 bg-beauty-warm/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img src={service.icon} alt={service.title} className="w-12 h-12 object-contain" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-beauty-primary mb-4 group-hover:text-beauty-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-foreground/70 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Button */}
                    <Link to={`/service/${service.id}`}>
                      <Button 
                        variant="outline" 
                        className="border-beauty-primary text-beauty-primary hover:bg-beauty-primary hover:text-white transition-all duration-300 group-hover:shadow-lg"
                      >
                        التفاصيل
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-beauty-cream">
          <div className="container mx-auto px-4 text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-beauty-primary mb-6 font-amiri">
              هل تحتاج إلى استشارة؟
            </h2>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
              احجز موعدك الآن للحصول على استشارة مجانية مع خبرائنا
            </p>
            <Link to="/appointment">
              <Button 
                size="lg" 
                className="bg-beauty-primary hover:bg-beauty-accent text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                احجز موعدك الآن
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;