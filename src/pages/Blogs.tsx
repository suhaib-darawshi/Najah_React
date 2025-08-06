import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const allBlogData = [
  {
    id: 1,
    title: "علم العلاج بالتدليك – فوائد تتجاوز الاسترخاء",
    excerpt: "فوائد العلاج بالتدليك، وتأثيره على الصحة الجسدية والعقلية.",
    content: "العلاج بالتدليك هو أحد أقدم أشكال العلاج المعروفة للإنسان. يتضمن التلاعب بالأنسجة الرخوة في الجسم باستخدام تقنيات مختلفة لتحسين الصحة والعافية. بالإضافة إلى الشعور بالاسترخاء، يوفر العلاج بالتدليك فوائد صحية عديدة تشمل تحسين الدورة الدموية، تقليل التوتر العضلي، وتعزيز الشفاء الطبيعي للجسم.",
    date: "يونيو 6, 2023",
    category: "العلاج بالتدليك",
    tags: ["تدليك", "استرخاء", "صحة"],
    image: "https://i0.wp.com/alnajah.center/wp-content/uploads/2023/06/6.png",
    readTime: "5 دقائق"
  },
  {
    id: 2,
    title: "مواجهة الشقيقة – تقنيات فعالة لتخفيف الألم",
    excerpt: "استخدام تقنيات العلاج التكميلي لتخفيف الصداع النصفي.",
    content: "الصداع النصفي أو الشقيقة هو اضطراب عصبي مزمن يتميز بنوبات متكررة من الصداع الشديد. يمكن للعلاج التكميلي أن يلعب دوراً مهماً في إدارة هذه الحالة. تشمل التقنيات الفعالة الوخز بالإبر، العلاج بالأعشاب، تقنيات الاسترخاء، والتغذية العلاجية.",
    date: "يونيو 6, 2023",
    category: "علاج الصداع",
    tags: ["شقيقة", "صداع", "وخز بالإبر"],
    image: "https://i0.wp.com/alnajah.center/wp-content/uploads/2023/06/7.png",
    readTime: "7 دقائق"
  },
  {
    id: 3,
    title: "إزالة الشعر بالليزر – هل هي الطريقة المثلى لك؟",
    excerpt: "فوائد ومحاذير إزالة الشعر بالليزر ومن هم المرشحون المثاليون لهذه التقنية.",
    content: "إزالة الشعر بالليزر هي تقنية حديثة وفعالة للتخلص من الشعر غير المرغوب فيه. تعمل هذه التقنية على استهداف بصيلات الشعر بضوء الليزر المركز، مما يؤدي إلى إتلافها ومنع نمو الشعر مستقبلاً. هذه الطريقة أكثر فعالية ودواماً من الطرق التقليدية.",
    date: "يونيو 6, 2023",
    category: "الليزر",
    tags: ["ليزر", "إزالة الشعر", "تجميل"],
    image: "https://i0.wp.com/alnajah.center/wp-content/uploads/2023/06/24.png",
    readTime: "6 دقائق"
  },
  {
    id: 4,
    title: "فوائد الحجامة في الطب التكميلي",
    excerpt: "تعرف على الحجامة كعلاج تقليدي وفوائدها الصحية المثبتة علمياً.",
    content: "الحجامة هي تقنية علاجية قديمة تستخدم كؤوس خاصة لخلق ضغط سالب على الجلد. هذا الإجراء يحفز تدفق الدم ويساعد في إزالة السموم من الجسم. الدراسات الحديثة تؤكد فعالية الحجامة في علاج آلام الظهر، الصداع، والعديد من الحالات الأخرى.",
    date: "مايو 15, 2023",
    category: "الحجامة",
    tags: ["حجامة", "طب تقليدي", "علاج طبيعي"],
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&h=300&fit=crop",
    readTime: "8 دقائق"
  },
  {
    id: 5,
    title: "الوخز بالإبر: علم وفن الشفاء الصيني",
    excerpt: "كيف يعمل الوخز بالإبر وما هي الحالات التي يمكن علاجها بهذه التقنية.",
    content: "الوخز بالإبر هو نظام علاجي صيني عمره آلاف السنين يقوم على مبدأ توازن الطاقة في الجسم. يتم إدخال إبر رفيعة في نقاط محددة على الجسم لتحفيز الشفاء الطبيعي. هذا العلاج فعال في تخفيف الألم، تقليل التوتر، وعلاج مجموعة واسعة من الحالات الصحية.",
    date: "مايو 10, 2023",
    category: "الوخز بالإبر",
    tags: ["وخز بالإبر", "طب صيني", "طاقة"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
    readTime: "10 دقائق"
  },
  {
    id: 6,
    title: "التغذية العلاجية: الطعام كدواء",
    excerpt: "كيف يمكن استخدام التغذية كأداة علاجية لتحسين الصحة والوقاية من الأمراض.",
    content: "التغذية العلاجية تستخدم الطعام والمكملات الغذائية كوسيلة لعلاج والوقاية من الأمراض. هذا النهج يركز على تزويد الجسم بالعناصر الغذائية المناسبة لدعم الشفاء وتحسين الصحة العامة. كل شخص له احتياجات غذائية فريدة حسب حالته الصحية ونمط حياته.",
    date: "أبريل 28, 2023",
    category: "التغذية العلاجية",
    tags: ["تغذية", "علاج طبيعي", "صحة"],
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&h=300&fit=crop",
    readTime: "6 دقائق"
  }
];

const categories = ["الكل", "العلاج بالتدليك", "علاج الصداع", "الليزر", "الحجامة", "الوخز بالإبر", "التغذية العلاجية"];

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [filteredBlogs, setFilteredBlogs] = useState(allBlogData);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    let filtered = allBlogData;

    // Filter by category
    if (selectedCategory !== "الكل") {
      filtered = filtered.filter(blog => blog.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredBlogs(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-background font-arabic" dir="rtl">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-beauty-cream">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
              <h1 className="text-5xl font-bold text-beauty-primary mb-6 font-amiri">
                مدونة الصحة والجمال
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed mb-8">
                اكتشف أحدث المقالات والنصائح في عالم الصحة والجمال من خبرائنا المتخصصين
              </p>
              
              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-beauty-primary w-5 h-5" />
                <Input
                  type="text"
                  placeholder="ابحث في المقالات..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10 py-3 text-lg border-beauty-primary/20 focus:border-beauty-primary"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3" data-aos="fade-up">
              <Filter className="w-5 h-5 text-beauty-primary mt-2 ml-2" />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-beauty-primary text-white"
                      : "border-beauty-primary text-beauty-primary hover:bg-beauty-primary hover:text-white"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {filteredBlogs.length === 0 ? (
              <div className="text-center py-20" data-aos="fade-up">
                <h3 className="text-2xl font-bold text-beauty-primary mb-4">لا توجد مقالات</h3>
                <p className="text-foreground/70">لم نجد أي مقالات تطابق بحثك. حاول تغيير الفلاتر أو البحث.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBlogs.map((article, index) => (
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
                      <Badge className="absolute top-4 right-4 bg-beauty-primary text-white">
                        {article.category}
                      </Badge>
                      
                      {/* Read Time */}
                      <div className="absolute bottom-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                        {article.readTime}
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
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {article.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        {/* Read More Button */}
                        <Link to={`/blog/${article.id}`}>
                          <Button 
                            variant="ghost" 
                            className="text-beauty-primary hover:text-beauty-accent hover:bg-beauty-warm/20 transition-all duration-300 p-0 h-auto font-semibold group/button"
                          >
                            اقرأ المزيد
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover/button:transform group-hover/button:-translate-x-1 transition-transform duration-300" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Load More Button */}
            {filteredBlogs.length > 0 && (
              <div className="text-center mt-16" data-aos="fade-up">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-beauty-primary text-beauty-primary hover:bg-beauty-primary hover:text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  تحميل المزيد من المقالات
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-beauty-cream">
          <div className="container mx-auto px-4 text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-beauty-primary mb-6 font-amiri">
              اشترك في نشرتنا الإخبارية
            </h2>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
              احصل على أحدث المقالات والنصائح الصحية مباشرة في بريدك الإلكتروني
            </p>
            <div className="max-w-md mx-auto flex gap-3">
              <Input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1"
              />
              <Button className="bg-beauty-primary hover:bg-beauty-accent text-white px-6">
                اشتراك
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;