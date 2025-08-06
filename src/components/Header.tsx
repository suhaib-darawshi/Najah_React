import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Facebook, Instagram, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm shadow-sm fixed top-0 z-50 font-arabic" dir={i18n.language === 'ar' || i18n.language === 'he' ? 'rtl' : 'ltr'}>
      {/* Top Bar */}
      <div className="bg-beauty-primary text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>00972-52-209-6962</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@alnajah.center</span>
            </div>
          </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{t('contact.address')}</span>
              </div>
              <div className="flex items-center gap-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-beauty-accent transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-beauty-accent transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://wa.me/972522096962" target="_blank" rel="noopener noreferrer" className="hover:text-beauty-accent transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </a>
                <LanguageSwitcher />
              </div>
            </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-beauty-primary font-amiri">
              {t('company.name')}
              <span className="block text-sm font-normal text-beauty-accent">
                {t('company.tagline')}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link to="/" className="text-foreground hover:text-beauty-primary transition-colors font-medium">
              {t('nav.home')}
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <a href="#services" className="flex items-center text-foreground hover:text-beauty-primary transition-colors font-medium">
                {t('nav.ourServices')}
                <ChevronDown className="w-4 h-4 mr-1 transition-transform group-hover:rotate-180" />
              </a>
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link to="/services" className="block px-4 py-2 text-sm text-foreground hover:bg-beauty-cream hover:text-beauty-primary transition-colors">
                    {t('nav.services')}
                  </Link>
                  <Link to="/pricing" className="block px-4 py-2 text-sm text-foreground hover:bg-beauty-cream hover:text-beauty-primary transition-colors">
                    {t('nav.pricing')}
                  </Link>
                  <Link to="/appointment" className="block px-4 py-2 text-sm text-foreground hover:bg-beauty-cream hover:text-beauty-primary transition-colors">
                    {t('nav.appointment')}
                  </Link>
                </div>
              </div>
            </div>

            {/* About Dropdown */}
            <div className="relative group">
              <Link to="/about" className="flex items-center text-foreground hover:text-beauty-primary transition-colors font-medium">
                {t('nav.whoAreWe')}
                <ChevronDown className="w-4 h-4 mr-1 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link to="/about" className="block px-4 py-2 text-sm text-foreground hover:bg-beauty-cream hover:text-beauty-primary transition-colors">
                    {t('nav.about')}
                  </Link>
                  <Link to="/team" className="block px-4 py-2 text-sm text-foreground hover:bg-beauty-cream hover:text-beauty-primary transition-colors">
                    {t('nav.team')}
                  </Link>
                  <Link to="/faq" className="block px-4 py-2 text-sm text-foreground hover:bg-beauty-cream hover:text-beauty-primary transition-colors">
                    {t('nav.faq')}
                  </Link>
                </div>
              </div>
            </div>

            {/* Products Dropdown */}
            <div className="relative group">
              <Link to="/shop" className="flex items-center text-foreground hover:text-beauty-primary transition-colors font-medium">
                {t('nav.products')}
                <ChevronDown className="w-4 h-4 mr-1 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link to="/shop" className="block px-4 py-2 text-sm text-foreground hover:bg-beauty-cream hover:text-beauty-primary transition-colors">
                    {t('nav.products')}
                  </Link>
                  <Link to="/wishlist" className="block px-4 py-2 text-sm text-foreground hover:bg-beauty-cream hover:text-beauty-primary transition-colors">
                    {t('nav.wishlist')}
                  </Link>
                  <Link to="/cart" className="block px-4 py-2 text-sm text-foreground hover:bg-beauty-cream hover:text-beauty-primary transition-colors">
                    {t('nav.cart')}
                  </Link>
                  <Link to="/checkout" className="block px-4 py-2 text-sm text-foreground hover:bg-beauty-cream hover:text-beauty-primary transition-colors">
                    {t('nav.checkout')}
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/blog" className="text-foreground hover:text-beauty-primary transition-colors font-medium">
              {t('nav.blog')}
            </Link>
            
            <Link to="/login" className="border border-beauty-primary text-beauty-primary px-4 py-2 rounded-full hover:bg-beauty-primary hover:text-white transition-colors duration-300">
              {t('nav.login')}
            </Link>
            <Link to="/signup" className="bg-beauty-accent text-white px-4 py-2 rounded-full hover:bg-beauty-primary transition-colors duration-300">
              {t('nav.signup')}
            </Link>
            <Link to="/appointment">
              <Button className="bg-beauty-primary hover:bg-beauty-accent transition-all duration-300 hover:scale-105">
                {t('nav.bookAppointment')}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-white rounded-lg shadow-lg animate-slide-up">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-foreground hover:text-beauty-primary transition-colors font-medium">
                {t('nav.home')}
              </Link>
              <Link to="/services" className="text-foreground hover:text-beauty-primary transition-colors font-medium">
                {t('nav.services')}
              </Link>
              <Link to="/about" className="text-foreground hover:text-beauty-primary transition-colors font-medium">
                {t('nav.about')}
              </Link>
              <Link to="/shop" className="text-foreground hover:text-beauty-primary transition-colors font-medium">
                {t('nav.products')}
              </Link>
              <Link to="/blog" className="text-foreground hover:text-beauty-primary transition-colors font-medium">
                {t('nav.blog')}
              </Link>
              <Link to="/login" className="text-foreground hover:text-beauty-primary transition-colors font-medium">
                {t('nav.login')}
              </Link>
              <Link to="/signup" className="text-foreground hover:text-beauty-primary transition-colors font-medium">
                {t('nav.signup')}
              </Link>
              <Link to="/appointment">
                <Button className="bg-beauty-primary hover:bg-beauty-accent w-full">
                  {t('nav.bookAppointment')}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;