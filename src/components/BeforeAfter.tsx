import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

const BeforeAfter = () => {
  const { t } = useTranslation();
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <section className="py-20 bg-white font-arabic">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-block bg-beauty-warm/30 px-6 py-3 rounded-full mb-6">
            <span className="text-beauty-primary font-bold text-lg">{t('beforeAfter.beforeAfterLabel')}</span>
          </div>
          <h2 className="text-4xl font-bold text-beauty-primary mb-6 font-amiri">
            {t('beforeAfter.title')}
          </h2>
          <p className="text-lg text-foreground/80 max-w-4xl mx-auto leading-relaxed">
            {t('beforeAfter.description')}
          </p>
        </div>

        {/* Before/After Comparison */}
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-2xl border-0" data-aos="fade-up" data-aos-delay="200">
            <CardContent className="p-0">
              <div 
                className="relative h-96 md:h-[500px] cursor-ew-resize select-none"
                onMouseMove={handleSliderMove}
              >
                {/* After Image (Background) */}
                <div className="absolute inset-0 bg-gradient-to-br from-beauty-warm to-beauty-cream">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-beauty-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-beauty-primary font-bold text-2xl">{t('beforeAfter.after')}</span>
                      </div>
                      <h3 className="text-xl font-bold text-beauty-primary mb-2">{t('beforeAfter.excellentResults')}</h3>
                      <p className="text-foreground/70 max-w-md">
                        {t('beforeAfter.afterDescription')}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold">
                    After
                  </div>
                </div>

                {/* Before Image (Overlay) */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 transition-all duration-300"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gray-600/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-gray-700 font-bold text-2xl">{t('beforeAfter.before')}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-700 mb-2">{t('beforeAfter.initialCondition')}</h3>
                      <p className="text-gray-600 max-w-md">
                        {t('beforeAfter.beforeDescription')}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold">
                    Before
                  </div>
                </div>

                {/* Slider Line */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg transition-all duration-300"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-ew-resize">
                    <div className="w-6 h-6 bg-beauty-primary rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Drag Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {t('beforeAfter.dragToCompare')}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-beauty-primary hover:bg-beauty-accent text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            {t('beforeAfter.viewMore')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;