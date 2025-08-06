import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import acupunctureIcon from "@/assets/acupuncture.png";
import cuppingIcon from "@/assets/cupping.png";

const servicesData = [
  {
    id: "01",
    title: "العلاج بالنحل",
    description: "علاج طبيعي يستخدم لسعات النحل لعلاج مشاكل مثل التهاب المفاصل والروماتيزم",
    icon: acupunctureIcon,
    color: "bg-beauty-primary"
  },
  {
    id: "02", 
    title: "الوخز بالابر الصينية",
    description: "تقنية تقليدية لتحفيز نقاط معينة على الجسم لتحسين الصحة",
    icon: acupunctureIcon,
    color: "bg-beauty-accent"
  },
  {
    id: "03",
    title: "الحجامة الطبية", 
    description: "علاج يستخدم الكؤوس لإنشاء فراغ وتحسين الدورة الدموية",
    icon: cuppingIcon,
    color: "bg-beauty-primary"
  },
  {
    id: "04",
    title: "علاج الشقيقة والصداع النصفي",
    description: "استخدام تقنيات مختلفة لتخفيف الصداع والشقيقة",
    icon: acupunctureIcon,
    color: "bg-beauty-accent"
  },
  {
    id: "05",
    title: "العلاج عن طريق الموكسا",
    description: "استخدام العشب الموكسا لتحفيز الدورة الدموية وتحسين الصحة",
    icon: cuppingIcon,
    color: "bg-beauty-primary"
  }
];

const Services = () => {
  const { t } = useTranslation();
  return (
    <section id="services" className="py-20 bg-beauty-cream font-arabic">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-beauty-primary mb-6 font-amiri">
            {t('services.title')}
          </h2>
          <p className="text-lg text-foreground/80 max-w-4xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
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
                  {service.id}
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
                    المزيد
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Link to="/services">
            <Button 
              size="lg" 
              className="bg-beauty-primary hover:bg-beauty-accent text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 animate-pulse-glow"
            >
              تعرف على خدماتنا
            </Button>
          </Link>
        </div>

        {/* Services List */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              "علاجات تكميلية",
              "العلاج الطبيعي", 
              "التغذية العلاجية",
              "علاجات الليزر",
              "علاجات الجسم والبشرة",
              "الساونا العلاجية",
              "علاجات الاوزون O3",
              "علاجات الشعر"
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-beauty-warm/20 transition-colors duration-300 cursor-pointer group"
              >
                <span className={`w-8 h-8 ${index % 2 === 0 ? 'bg-beauty-primary' : 'bg-beauty-accent'} text-white rounded-full flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-foreground font-medium group-hover:text-beauty-primary transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;