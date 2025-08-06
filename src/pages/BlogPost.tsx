import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, Share2, Heart, ArrowLeft, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

const blogData = [
  {
    id: 1,
    title: "علم العلاج بالتدليك – فوائد تتجاوز الاسترخاء",
    excerpt: "فوائد العلاج بالتدليك، وتأثيره على الصحة الجسدية والعقلية.",
    date: "يونيو 6, 2023",
    category: "العلاج بالتدليك",
    author: "د. أحمد محمد",
    readTime: "5 دقائق",
    image: "https://i0.wp.com/alnajah.center/wp-content/uploads/2023/06/6.png",
    content: `
      <p>العلاج بالتدليك هو أحد أقدم أشكال العلاج الطبيعي المعروفة للإنسان. وقد استخدمت الحضارات القديمة هذه التقنية للشفاء والاسترخاء منذ آلاف السنين.</p>
      
      <h2>فوائد العلاج بالتدليك</h2>
      <p>يوفر العلاج بالتدليك العديد من الفوائد الصحية المذهلة:</p>
      
      <ul>
        <li><strong>تحسين الدورة الدموية:</strong> يساعد التدليك على تحسين تدفق الدم في الجسم</li>
        <li><strong>تخفيف التوتر:</strong> يقلل من مستويات هرمون الكورتيزول المسبب للتوتر</li>
        <li><strong>تخفيف آلام العضلات:</strong> يساعد في استرخاء العضلات المتوترة</li>
        <li><strong>تحسين المرونة:</strong> يزيد من مرونة المفاصل والعضلات</li>
      </ul>
      
      <h2>أنواع التدليك المختلفة</h2>
      <p>هناك عدة أنواع من التدليك، كل منها له فوائده الخاصة:</p>
      
      <h3>التدليك السويدي</h3>
      <p>هو النوع الأكثر شيوعاً من التدليك، ويتضمن حركات طويلة ومتدفقة باستخدام الزيوت.</p>
      
      <h3>التدليك العميق</h3>
      <p>يركز على الطبقات العميقة من العضلات والأنسجة الضامة، ويستخدم ضغطاً أكبر.</p>
      
      <h3>التدليك التايلاندي</h3>
      <p>يجمع بين التدليك والتمدد واليوغا، ويتم بدون استخدام الزيوت.</p>
      
      <h2>متى يُنصح بالعلاج بالتدليك؟</h2>
      <p>يُنصح بالعلاج بالتدليك في الحالات التالية:</p>
      
      <ul>
        <li>آلام الظهر والرقبة</li>
        <li>التوتر والقلق</li>
        <li>آلام العضلات الرياضية</li>
        <li>اضطرابات النوم</li>
        <li>الصداع المزمن</li>
      </ul>
      
      <h2>احتياطات مهمة</h2>
      <p>رغم فوائد التدليك العديدة، هناك بعض الحالات التي يجب فيها تجنب التدليك أو استشارة الطبيب أولاً:</p>
      
      <ul>
        <li>الحمل (خاصة في الأشهر الأولى)</li>
        <li>الإصابات الحديثة</li>
        <li>أمراض القلب الشديدة</li>
        <li>اضطرابات تخثر الدم</li>
      </ul>
      
      <h2>الخلاصة</h2>
      <p>العلاج بالتدليك أكثر من مجرد وسيلة للاسترخاء - إنه علاج طبيعي فعال يمكن أن يحسن من جودة حياتك بشكل كبير. إذا كنت تفكر في تجربة العلاج بالتدليك، تأكد من اختيار معالج مؤهل ومرخص.</p>
    `
  },
  {
    id: 2,
    title: "مواجهة الشقيقة – تقنيات فعالة لتخفيف الألم",
    excerpt: "استخدام تقنيات العلاج التكميلي لتخفيف الصداع النصفي.",
    date: "يونيو 6, 2023",
    category: "علاج الصداع",
    author: "د. فاطمة أحمد",
    readTime: "7 دقائق",
    image: "https://i0.wp.com/alnajah.center/wp-content/uploads/2023/06/7.png",
    content: `
      <p>الشقيقة أو الصداع النصفي هو نوع من الصداع المؤلم الذي يؤثر على ملايين الأشخاص حول العالم. في هذا المقال، سنستكشف طرق العلاج التكميلي الفعالة.</p>
      
      <h2>ما هي الشقيقة؟</h2>
      <p>الشقيقة هي اضطراب عصبي يتميز بنوبات متكررة من الصداع الشديد، وغالباً ما تصاحبها أعراض أخرى مثل الغثيان والحساسية للضوء والصوت.</p>
    `
  },
  {
    id: 3,
    title: "إزالة الشعر بالليزر – هل هي الطريقة المثلى لك؟",
    excerpt: "فوائد ومحاذير إزالة الشعر بالليزر ومن هم المرشحون المثاليون لهذه التقنية.",
    date: "يونيو 6, 2023",
    category: "الليزر",
    author: "د. محمد علي",
    readTime: "6 دقائق",
    image: "https://i0.wp.com/alnajah.center/wp-content/uploads/2023/06/24.png",
    content: `
      <p>إزالة الشعر بالليزر أصبحت واحدة من أكثر عمليات التجميل شيوعاً في العالم. دعونا نستكشف كل ما تحتاج لمعرفته حول هذه التقنية.</p>
      
      <h2>كيف يعمل الليزر؟</h2>
      <p>يستهدف الليزر الميلانين في بصيلات الشعر، مما يؤدي إلى تدميرها ومنع نمو الشعر مرة أخرى.</p>
    `
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const post = blogData.find(p => p.id === parseInt(id || "1"));
  const relatedPosts = blogData.filter(p => p.id !== parseInt(id || "1")).slice(0, 2);
  const isRTL = i18n.language === 'ar' || i18n.language === 'he';

  if (!post) {
    return <div className="min-h-screen bg-background flex items-center justify-center" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">{t('blogPost.notFound')}</h1>
        <Link to="/blog">
          <Button variant="outline">{t('blogPost.backToBlog')}</Button>
        </Link>
      </div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-16 bg-beauty-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
              <div className="inline-block bg-beauty-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                {post.category}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-beauty-primary mb-6 font-amiri leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center justify-center gap-6 text-foreground/70">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Image */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto" data-aos="fade-up">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-8">
                {/* Article Body */}
                <div className="lg:col-span-3" data-aos="fade-up">
                  <div 
                    className="prose prose-lg max-w-none text-foreground/80 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />

                  {/* Social Share */}
                  <div className="mt-12 p-6 bg-beauty-cream rounded-lg">
                    <h3 className="text-xl font-bold text-beauty-primary mb-4">{t('blogPost.shareArticle')}</h3>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Share2 className="w-4 h-4" />
                        {t('blogPost.facebook')}
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Share2 className="w-4 h-4" />
                        {t('blogPost.twitter')}
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Share2 className="w-4 h-4" />
                        {t('blogPost.linkedin')}
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Heart className="w-4 h-4" />
                        {t('blogPost.like')}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1" data-aos="fade-left">
                  <div className="sticky top-32 space-y-6">
                    {/* Author Card */}
                    <Card>
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-beauty-primary rounded-full flex items-center justify-center mx-auto mb-4">
                          <User className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-bold text-beauty-primary mb-2">{post.author}</h3>
                        <p className="text-sm text-foreground/70">
                          {t('blogPost.doctorBio')}
                        </p>
                      </CardContent>
                    </Card>

                    {/* Related Articles */}
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-bold text-beauty-primary mb-4">{t('blogPost.relatedArticles')}</h3>
                        <div className="space-y-4">
                          {relatedPosts.map(relatedPost => (
                            <Link 
                              key={relatedPost.id}
                              to={`/blog/${relatedPost.id}`}
                              className="block group"
                            >
                              <div className="flex gap-3">
                                <img 
                                  src={relatedPost.image} 
                                  alt={relatedPost.title}
                                  className="w-16 h-16 object-cover rounded-lg"
                                />
                                <div className="flex-1">
                                  <h4 className="text-sm font-medium text-beauty-primary group-hover:text-beauty-accent transition-colors line-clamp-2">
                                    {relatedPost.title}
                                  </h4>
                                  <p className="text-xs text-foreground/50 mt-1">{relatedPost.date}</p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-16 flex justify-between items-center" data-aos="fade-up">
                <Link to="/blog">
                  <Button variant="outline" className="flex items-center gap-2 border-beauty-primary text-beauty-primary hover:bg-beauty-primary hover:text-white">
                    <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                    {t('blogPost.backToBlog')}
                  </Button>
                </Link>
                
                <div className="flex gap-4">
                  {parseInt(id || "1") > 1 && (
                    <Link to={`/blog/${parseInt(id || "1") - 1}`}>
                      <Button variant="outline" size="sm">
                        {t('blogPost.previousPost')}
                      </Button>
                    </Link>
                  )}
                  {parseInt(id || "1") < blogData.length && (
                    <Link to={`/blog/${parseInt(id || "1") + 1}`}>
                      <Button variant="outline" size="sm">
                        {t('blogPost.nextPost')}
                      </Button>
                    </Link>
                  )}
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

export default BlogPost;