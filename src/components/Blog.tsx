import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const blogData = [
  {
    id: 1,
    title: "علم العلاج بالتدليك – فوائد تتجاوز الاسترخاء",
    excerpt: "فوائد العلاج بالتدليك، وتأثيره على الصحة الجسدية والعقلية.",
    date: "يونيو 6, 2023",
    category: "العلاج بالتدليك",
    image: "https://i0.wp.com/alnajah.center/wp-content/uploads/2023/06/6.png"
  },
  {
    id: 2,
    title: "مواجهة الشقيقة – تقنيات فعالة لتخفيف الألم",
    excerpt: "استخدام تقنيات العلاج التكميلي لتخفيف الصداع النصفي.",
    date: "يونيو 6, 2023",
    category: "علاج الصداع",
    image: "https://i0.wp.com/alnajah.center/wp-content/uploads/2023/06/7.png"
  },
  {
    id: 3,
    title: "إزالة الشعر بالليزر – هل هي الطريقة المثلى لك؟",
    excerpt: "فوائد ومحاذير إزالة الشعر بالليزر ومن هم المرشحون المثاليون لهذه التقنية.",
    date: "يونيو 6, 2023",
    category: "الليزر",
    image: "https://i0.wp.com/alnajah.center/wp-content/uploads/2023/06/24.png"
  }
];

const Blog = () => {
  const { t } = useTranslation();
  return (
    <section id="blog" className="py-20 bg-beauty-cream font-arabic">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-beauty-primary mb-6 font-amiri">
            {t('blog.title')}
          </h2>
          <p className="text-lg text-foreground/80 max-w-4xl mx-auto leading-relaxed">
            {t('blog.subtitle')}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((article, index) => (
            <Card 
              key={article.id} 
              className="group hover:shadow-xl transition-all duration-500 hover:scale-105 bg-white border-0 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-beauty-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {article.category}
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Date */}
                  <div className="flex items-center text-beauty-accent text-sm">
                    <Calendar className="w-4 h-4 ml-2" />
                    {article.date}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-beauty-primary group-hover:text-beauty-accent transition-colors duration-300 leading-tight">
                    {article.title}
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-foreground/70 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  {/* Read More Button */}
                  <Link to={`/blog/${article.id}`}>
                    <Button 
                      variant="ghost" 
                      className="text-beauty-primary hover:text-beauty-accent hover:bg-beauty-warm/20 transition-all duration-300 p-0 h-auto font-semibold group/button"
                    >
                      {t('blog.readMore')}
                      <ArrowLeft className="w-4 h-4 mr-2 group-hover/button:transform group-hover/button:-translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Link to="/blog">
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-beauty-primary text-beauty-primary hover:bg-beauty-primary hover:text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              {t('blog.viewAll')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;