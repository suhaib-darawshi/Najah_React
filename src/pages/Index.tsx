import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import BeforeAfter from "@/components/BeforeAfter";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Index = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    // Set document direction based on language
    document.documentElement.dir = i18n.language === 'ar' || i18n.language === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-background font-arabic">
      <Header />
      <main className="pt-20">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Products />
        <BeforeAfter />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default Index;