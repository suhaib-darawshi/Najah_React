import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Calendar } from "lucide-react";
import acupunctureIcon from "@/assets/acupuncture.png";
import cuppingIcon from "@/assets/cupping.png";
import AOS from "aos";
import "aos/dist/aos.css";

const servicesData = [
  {
    id: 1,
    title: "العلاج بالنحل",
    description: "علاج طبيعي يستخدم لسعات النحل لعلاج مشاكل مثل التهاب المفاصل والروماتيزم",
    fullDescription: "العلاج بالنحل هو أسلوب علاجي طبيعي قديم يستخدم منتجات النحل مثل العسل وسم النحل وحبوب اللقاح في علاج مختلف الحالات الصحية. يساعد في تخفيف آلام المفاصل والالتهابات ويعزز من قدرة الجسم الطبيعية على الشفاء.",
    icon: acupunctureIcon,
    color: "bg-beauty-primary",
    benefits: ["تخفيف آلام المفاصل", "تقوية جهاز المناعة", "علاج الالتهابات", "تحسين الدورة الدموية"],
    duration: "45-60 دقيقة",
    sessions: "6-12 جلسة",
    price: "150 ريال"
  },
  {
    id: 2,
    title: "الوخز بالابر الصينية",
    description: "تقنية تقليدية لتحفيز نقاط معينة على الجسم لتحسين الصحة",
    fullDescription: "الوخز بالإبر الصينية هو تقنية علاجية تقليدية تستخدم إبر رفيعة يتم إدخالها في نقاط محددة على الجسم لتحفيز الطاقة وتحسين التوازن الطبيعي للجسم. هذا العلاج فعال في تخفيف الألم وعلاج العديد من الحالات الصحية.",
    icon: acupunctureIcon,
    color: "bg-beauty-accent",
    benefits: ["تخفيف الألم المزمن", "علاج القلق والتوتر", "تحسين النوم", "تقوية الطاقة"],
    duration: "30-45 دقيقة",
    sessions: "8-15 جلسة",
    price: "120 ريال"
  },
  {
    id: 3,
    title: "الحجامة الطبية",
    description: "علاج يستخدم الكؤوس لإنشاء فراغ وتحسين الدورة الدموية",
    fullDescription: "الحجامة هي تقنية علاجية تقليدية تستخدم كؤوس خاصة لإنشاء ضغط سالب على الجلد، مما يساعد في تحسين الدورة الدموية وإزالة السموم من الجسم. تعتبر من أقدم أساليب العلاج وأكثرها فعالية.",
    icon: cuppingIcon,
    color: "bg-beauty-primary",
    benefits: ["تحسين الدورة الدموية", "إزالة السموم", "تخفيف التوتر العضلي", "تقوية المناعة"],
    duration: "20-30 دقيقة",
    sessions: "4-8 جلسات",
    price: "100 ريال"
  },
  {
    id: 4,
    title: "علاج الشقيقة والصداع النصفي",
    description: "استخدام تقنيات مختلفة لتخفيف الصداع والشقيقة",
    fullDescription: "برنامج علاجي شامل لعلاج الصداع النصفي والشقيقة باستخدام مجموعة من التقنيات الطبيعية والعلاجية المتقدمة لتوفير راحة فورية وطويلة المدى. يتضمن العلاج تقنيات متعددة مخصصة لكل حالة.",
    icon: acupunctureIcon,
    color: "bg-beauty-accent",
    benefits: ["تخفيف الألم الفوري", "منع نوبات الصداع", "تحسين جودة الحياة", "علاج طبيعي آمن"],
    duration: "60-90 دقيقة",
    sessions: "10-20 جلسة",
    price: "200 ريال"
  },
  {
    id: 5,
    title: "العلاج عن طريق الموكسا",
    description: "استخدام العشب الموكسا لتحفيز الدورة الدموية وتحسين الصحة",
    fullDescription: "علاج الموكسا هو تقنية صينية تقليدية تستخدم حرق عشبة الأرتيميسيا (الموكسا) على نقاط الوخز لتحفيز الطاقة وتعزيز الشفاء الطبيعي للجسم. يساعد في تقوية الطاقة الحيوية وعلاج الضعف العام.",
    icon: cuppingIcon,
    color: "bg-beauty-primary",
    benefits: ["تحفيز الطاقة الحيوية", "تقوية الجهاز الهضمي", "تحسين المناعة", "علاج البرد والرطوبة"],
    duration: "40-50 دقيقة",
    sessions: "6-10 جلسات",
    price: "130 ريال"
  }
];

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === parseInt(id || '1'));

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen bg-background font-arabic" dir="rtl">
        <Header />
        <main className="pt-20 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-beauty-primary mb-4">الخدمة غير موجودة</h1>
            <Link to="/services">
              <Button>العودة للخدمات</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-arabic" dir="rtl">
      <Header />
      <main className="pt-20">
        {/* Breadcrumb */}
        <section className="py-8 bg-beauty-cream">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm" data-aos="fade-right">
              <Link to="/" className="text-beauty-primary hover:text-beauty-accent">الرئيسية</Link>
              <ArrowRight className="w-4 h-4" />
              <Link to="/services" className="text-beauty-primary hover:text-beauty-accent">الخدمات</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-foreground/70">{service.title}</span>
            </div>
          </div>
        </section>

        {/* Service Header */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-right">
                <Badge className={`${service.color} text-white mb-4 text-sm px-3 py-1`}>
                  خدمة متخصصة
                </Badge>
                <h1 className="text-4xl font-bold text-beauty-primary mb-6 font-amiri">
                  {service.title}
                </h1>
                <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                  {service.fullDescription}
                </p>
                
                {/* Service Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-beauty-warm/20 rounded-lg">
                    <div className="text-2xl font-bold text-beauty-primary">{service.duration}</div>
                    <div className="text-sm text-foreground/70">مدة الجلسة</div>
                  </div>
                  <div className="text-center p-4 bg-beauty-warm/20 rounded-lg">
                    <div className="text-2xl font-bold text-beauty-primary">{service.sessions}</div>
                    <div className="text-sm text-foreground/70">عدد الجلسات</div>
                  </div>
                  <div className="text-center p-4 bg-beauty-warm/20 rounded-lg">
                    <div className="text-2xl font-bold text-beauty-primary">{service.price}</div>
                    <div className="text-sm text-foreground/70">سعر الجلسة</div>
                  </div>
                </div>

                <Link to="/appointment">
                  <Button 
                    size="lg" 
                    className="bg-beauty-primary hover:bg-beauty-accent text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <Calendar className="w-5 h-5 ml-2" />
                    احجز موعدك الآن
                  </Button>
                </Link>
              </div>

              <div data-aos="fade-left">
                <Card className="p-8 shadow-2xl border-0">
                  <div className="text-center mb-8">
                    <div className="w-24 h-24 bg-beauty-warm/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <img src={service.icon} alt={service.title} className="w-16 h-16 object-contain" />
                    </div>
                    <h3 className="text-2xl font-bold text-beauty-primary mb-4">فوائد العلاج</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-beauty-primary flex-shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20 bg-beauty-cream">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-beauty-primary text-center mb-12 font-amiri" data-aos="fade-up">
              خدمات أخرى قد تهمك
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {servicesData
                .filter(s => s.id !== service.id)
                .slice(0, 3)
                .map((relatedService, index) => (
                <Card 
                  key={relatedService.id} 
                  className="group hover:shadow-xl transition-all duration-500 hover:scale-105 bg-white border-0 overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-beauty-warm/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <img src={relatedService.icon} alt={relatedService.title} className="w-10 h-10 object-contain" />
                    </div>
                    <h3 className="text-lg font-bold text-beauty-primary mb-3 group-hover:text-beauty-accent transition-colors duration-300">
                      {relatedService.title}
                    </h3>
                    <p className="text-foreground/70 mb-4 text-sm">
                      {relatedService.description}
                    </p>
                    <Link to={`/service/${relatedService.id}`}>
                      <Button variant="outline" size="sm">
                        عرض التفاصيل
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;