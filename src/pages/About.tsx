import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, Heart, Target } from "lucide-react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const values = [
    {
      icon: Heart,
      title: "الرعاية الشخصية",
      description: "نؤمن بأن كل مريض يستحق رعاية فردية ومخصصة تناسب احتياجاته الخاصة"
    },
    {
      icon: Award,
      title: "الجودة والتميز",
      description: "نسعى دائماً لتقديم أعلى مستويات الجودة في جميع خدماتنا العلاجية"
    },
    {
      icon: Users,
      title: "فريق متخصص",
      description: "فريق من الخبراء والمتخصصين ذوي الخبرة الواسعة في مجال العلاج التكميلي"
    },
    {
      icon: Target,
      title: "النتائج المؤكدة",
      description: "نركز على تحقيق نتائج ملموسة وتحسين حقيقي في صحة وحياة مرضانا"
    }
  ];

  const achievements = [
    { number: "15+", label: "سنة من الخبرة" },
    { number: "5000+", label: "مريض سعيد" },
    { number: "20+", label: "نوع علاج مختلف" },
    { number: "98%", label: "معدل رضا العملاء" }
  ];

  const team = [
    {
      name: "د. أحمد محمد",
      title: "أخصائي العلاج بالوخز الصيني",
      experience: "15 سنة خبرة",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "د. فاطمة علي",
      title: "أخصائية الحجامة والعلاج الطبيعي",
      experience: "12 سنة خبرة",
      image: "https://images.unsplash.com/photo-1594824369853-897c4ee4e5d6?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "د. محمد عبدالله",
      title: "أخصائي العلاج بالنحل",
      experience: "10 سنوات خبرة",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-arabic" dir="rtl">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-beauty-cream">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
              <h1 className="text-5xl font-bold text-beauty-primary mb-6 font-amiri">
                من نحن
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                مركز النجاح للعلاج التكميلي هو مؤسسة طبية متخصصة في تقديم العلاجات التكميلية والطبيعية 
                باستخدام أحدث التقنيات والأساليب المجربة علمياً لضمان حصولكم على أفضل النتائج
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-right">
                <h2 className="text-3xl font-bold text-beauty-primary mb-6 font-amiri">
                  رسالتنا
                </h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  نسعى في مركز النجاح لتقديم رعاية صحية شاملة ومتقدمة من خلال دمج العلوم الطبية الحديثة 
                  مع الطب التكميلي والبديل، لنوفر لمرضانا حلولاً علاجية طبيعية وآمنة وفعالة.
                </p>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  نؤمن بأن الصحة الحقيقية تتحقق من خلال التوازن بين الجسم والعقل والروح، 
                  ولذلك نقدم علاجات شاملة تركز على الشخص ككل وليس فقط على الأعراض.
                </p>
                
                <div className="space-y-4">
                  {[
                    "علاجات طبيعية آمنة وخالية من الآثار الجانبية",
                    "فريق طبي متخصص ومؤهل على أعلى مستوى",
                    "استخدام أحدث التقنيات والأجهزة المتطورة",
                    "رعاية شخصية ومتابعة مستمرة لكل مريض"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-beauty-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div data-aos="fade-left">
                <Card className="p-8 shadow-2xl border-0">
                  <h3 className="text-2xl font-bold text-beauty-primary mb-6 text-center font-amiri">
                    رؤيتنا
                  </h3>
                  <p className="text-lg text-foreground/80 text-center leading-relaxed mb-6">
                    أن نكون المركز الرائد في المنطقة في مجال العلاج التكميلي والطبيعي، 
                    ونساهم في تحسين جودة حياة مرضانا من خلال تقديم أفضل الخدمات العلاجية
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 mt-8">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-bold text-beauty-primary mb-2">
                          {achievement.number}
                        </div>
                        <div className="text-sm text-foreground/70">
                          {achievement.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-beauty-cream">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-beauty-primary text-center mb-12 font-amiri" data-aos="fade-up">
              قيمنا ومبادئنا
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-500 hover:scale-105 bg-white border-0 text-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-beauty-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-beauty-primary/20 transition-colors duration-300">
                      <value.icon className="w-8 h-8 text-beauty-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-beauty-primary mb-4 group-hover:text-beauty-accent transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-beauty-primary mb-6 font-amiri">
                فريقنا الطبي
              </h2>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                فريق من الأطباء والمتخصصين ذوي الخبرة الواسعة في مجال العلاج التكميلي
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-500 hover:scale-105 bg-white border-0 overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-beauty-primary mb-2 group-hover:text-beauty-accent transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-beauty-accent font-medium mb-2">
                      {member.title}
                    </p>
                    <p className="text-foreground/70 text-sm">
                      {member.experience}
                    </p>
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
              ابدأ رحلتك نحو الصحة والعافية
            </h2>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
              احجز استشارة مجانية مع خبرائنا واكتشف كيف يمكن للعلاج التكميلي أن يحسن من صحتك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/appointment">
                <Button 
                  size="lg" 
                  className="bg-beauty-primary hover:bg-beauty-accent text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  احجز موعداً
                </Button>
              </Link>
              <Link to="/services">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-beauty-primary text-beauty-primary hover:bg-beauty-primary hover:text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  تصفح خدماتنا
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;