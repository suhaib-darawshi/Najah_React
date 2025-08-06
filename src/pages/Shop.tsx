import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import product1 from "@/assets/product1.jpg";
import product2 from "@/assets/product2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const productsData = [
  { id: 1, name: "HERBAL CLAY CREAM", nameAr: "كريم الطين العشبي", price: "₪10.00", image: product1, description: "كريم طبيعي لعلاج مشاكل البشرة", category: "العناية بالبشرة" },
  { id: 2, name: "ULTRA SHINE SERUM", nameAr: "سيروم النضارة الفائق", price: "₪15.00", image: product2, description: "سيروم مكثف لإشراق البشرة", category: "العناية بالبشرة" },
  { id: 3, name: "HERBAL CLAY CREAM", nameAr: "كريم الطين العشبي", price: "₪10.00", image: product1, description: "كريم طبيعي لعلاج مشاكل البشرة", category: "العناية بالبشرة" },
  { id: 4, name: "ULTRA SHINE SERUM", nameAr: "سيروم النضارة الفائق", price: "₪15.00", image: product2, description: "سيروم مكثف لإشراق البشرة", category: "العناية بالبشرة" },
  { id: 5, name: "NOURISHING FACE MASK", nameAr: "قناع الوجه المغذي", price: "₪20.00", image: product1, description: "قناع مغذي للبشرة الجافة", category: "أقنعة الوجه" },
  { id: 6, name: "ANTI-AGING CREAM", nameAr: "كريم مكافحة الشيخوخة", price: "₪25.00", image: product2, description: "كريم متقدم لمكافحة علامات التقدم في السن", category: "مكافحة الشيخوخة" }
];

const Shop = () => {
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(t('shop.categories.all'));

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const categories = [
    t('shop.categories.all'), 
    t('shop.categories.skincare'), 
    t('shop.categories.faceMasks'), 
    t('shop.categories.antiAging')
  ];

  const filteredProducts = productsData.filter(product => {
    const matchesSearch = product.nameAr.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === t('shop.categories.all') || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background font-arabic" dir={i18n.language === 'ar' || i18n.language === 'he' ? 'rtl' : 'ltr'}>
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="bg-beauty-cream py-20">
          <div className="container mx-auto px-4">
            <div className="text-center" data-aos="fade-up">
              <h1 className="text-4xl lg:text-5xl font-bold text-beauty-primary mb-6 font-amiri">
                {t('shop.title')}
              </h1>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                {t('shop.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between" data-aos="fade-up">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute right-3 top-3 w-4 h-4 text-foreground/50" />
                  <input
                    type="text"
                    placeholder={t('shop.searchPlaceholder')}
                    className="pl-4 pr-10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-beauty-primary"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-beauty-primary" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-beauty-primary"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <Card 
                  key={product.id} 
                  className="group hover:shadow-xl transition-all duration-500 hover:scale-105 bg-white border-0 overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.nameAr} 
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 bg-white/90 hover:bg-white"
                    >
                      <Heart className="w-4 h-4 text-beauty-primary" />
                    </Button>
                  </div>

                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-bold text-beauty-primary group-hover:text-beauty-accent transition-colors duration-300">
                          {product.nameAr}
                        </h3>
                        <p className="text-sm text-foreground/60 font-medium">
                          {product.name}
                        </p>
                      </div>
                      
                      <p className="text-sm text-foreground/70">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-beauty-primary">
                          {product.price}
                        </span>
                        <div className="flex gap-2">
                          <Link to={`/product/${product.id}`}>
                            <Button 
                              size="sm"
                              variant="outline"
                              className="border-beauty-primary text-beauty-primary hover:bg-beauty-primary hover:text-white"
                            >
                              {t('shop.viewProduct')}
                            </Button>
                          </Link>
                          <Button 
                            size="sm"
                            className="bg-beauty-primary hover:bg-beauty-accent transition-all duration-300 hover:scale-105"
                          >
                            <ShoppingCart className="w-4 h-4 ml-2" />
                            {t('shop.addToCart')}
                          </Button>
                        </div>
                      </div>
                    </div>
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

export default Shop;