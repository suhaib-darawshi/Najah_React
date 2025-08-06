import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-20 bg-beauty-cream font-arabic">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8" data-aos="fade-left">
            <div>
              <h2 className="text-4xl font-bold text-beauty-primary mb-6 font-amiri">
                {t('about.title')}
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t('about.description')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-beauty-primary hover:bg-beauty-accent text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                {t('nav.services')}
              </Button>
            </div>
          </div>

          {/* Contact Card */}
          <div data-aos="fade-right" data-aos-delay="300">
            <Card className="bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-beauty-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-beauty-primary" />
                </div>
                
                <h3 className="text-2xl font-bold text-beauty-primary mb-4 font-amiri">
                  {t('faq.bookFreeConsultation')}
                </h3>
                
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {t('about.description')}
                </p>
                
                <Button 
                  className="bg-gradient-primary text-white hover:opacity-90 transition-all duration-300 hover:scale-105 w-full mb-4"
                  size="lg"
                >
                  {t('faq.bookFreeConsultation')}
                </Button>
                
                <div className="border-t pt-4">
                  <a 
                    href="mailto:info@alnajah.center" 
                    className="text-beauty-primary hover:text-beauty-accent transition-colors duration-300 font-semibold"
                  >
                    info@alnajah.center
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;