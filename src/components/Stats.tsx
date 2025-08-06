import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

const Stats = () => {
  const { t } = useTranslation();
  const statsData = [
    { number: 10, suffix: "+", title: t('stats.experience'), color: "text-beauty-primary" },
    { number: 7, suffix: "+", title: "7+ " + t('services.title'), color: "text-beauty-accent" },
    { number: 8, suffix: "+", title: "8+ خدمات البشرة", color: "text-beauty-primary" },
    { number: 9, suffix: "+", title: "9+ خدمات الجسم", color: "text-beauty-accent" },
    { number: 5, suffix: "+", title: "5+ خدمات الشعر", color: "text-beauty-primary" },
  ];
  const [counters, setCounters] = useState(statsData.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const statsElement = document.getElementById('stats-section');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      statsData.forEach((stat, index) => {
        const timer = setTimeout(() => {
          let current = 0;
          const increment = stat.number / 30;
          const counter = setInterval(() => {
            current += increment;
            if (current >= stat.number) {
              current = stat.number;
              clearInterval(counter);
            }
            setCounters(prev => {
              const newCounters = [...prev];
              newCounters[index] = Math.floor(current);
              return newCounters;
            });
          }, 50);
        }, index * 200);

        return () => clearTimeout(timer);
      });
    }
  }, [isVisible]);

  return (
    <section id="stats-section" className="py-20 bg-gradient-warm font-arabic">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-beauty-primary mb-4 font-amiri">
            {t('about.title')}
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {statsData.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-110 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-beauty-cream">
                <div className={`text-5xl md:text-6xl font-bold ${stat.color} mb-4 font-amiri`}>
                  {counters[index]}{stat.suffix}
                </div>
                <h3 className="text-lg font-semibold text-foreground leading-tight">
                  {stat.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;