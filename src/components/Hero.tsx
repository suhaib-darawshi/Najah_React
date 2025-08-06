import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useTranslation } from 'react-i18next';
const heroImage = "/lovable-uploads/2fdbae2d-1cd3-4c0d-8d2b-b6ef30d95c08.png";
const heroImageLTR = "/lovable-uploads/a40fbcaf-6d98-448d-a95e-f06be6c817d5.png";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar' || i18n.language === 'he';
  const backgroundImage = isRTL ? heroImage : heroImageLTR;
  return (
    <section className="relative min-h-screen flex items-center bg-beauty-cream font-arabic overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={backgroundImage} 
          alt="مركز النجاح للجمال"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-beauty-cream/90 via-beauty-cream/50 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Right side content - moved to right to avoid woman's face */}
          <div></div>
          <div className="space-y-8" data-aos="fade-right">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-beauty-primary leading-tight font-amiri">
                {t('hero.title')}
              </h1>
              
              <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl">
                {t('hero.description')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button 
                size="lg" 
                className="bg-beauty-primary hover:bg-beauty-accent text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => window.location.href = '/about'}
              >
                {t('hero.learnMore')}
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-beauty-primary text-beauty-primary hover:bg-beauty-primary hover:text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 group"
                onClick={() => window.open('https://www.youtube.com/watch?v=iSWNXxLSOmQ', '_blank')}
              >
                <Play className="w-5 h-5 ml-2 group-hover:animate-pulse" />
                {t('hero.watchVideo')}
              </Button>
            </div>
          </div>
          
          {/* Right side - Let the image show through */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-beauty-accent/20 rounded-full animate-float"></div>
      <div className="absolute bottom-32 left-20 w-16 h-16 bg-beauty-primary/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-beauty-warm/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default Hero;