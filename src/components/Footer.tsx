import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer className="bg-beauty-primary text-white font-arabic" dir={i18n.language === 'ar' || i18n.language === 'he' ? 'rtl' : 'ltr'}>
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2 font-amiri">{t('company.name')}</h3>
              <p className="text-beauty-warm">{t('company.tagline')}</p>
            </div>
            
            <p className="text-beauty-warm leading-relaxed">
              {t('footer.description')}
            </p>

            {/* Social Media */}
            <div className="flex space-x-4 space-x-reverse">
              <Button 
                size="icon" 
                variant="secondary" 
                className="bg-white/10 hover:bg-white hover:text-beauty-primary transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button 
                size="icon" 
                variant="secondary" 
                className="bg-white/10 hover:bg-white hover:text-beauty-primary transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button 
                size="icon" 
                variant="secondary" 
                className="bg-white/10 hover:bg-white hover:text-beauty-primary transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold font-amiri">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-beauty-warm hover:text-white transition-colors duration-300">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-beauty-warm hover:text-white transition-colors duration-300">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-beauty-warm hover:text-white transition-colors duration-300">
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <a href="#products" className="text-beauty-warm hover:text-white transition-colors duration-300">
                  {t('nav.products')}
                </a>
              </li>
              <li>
                <a href="#blog" className="text-beauty-warm hover:text-white transition-colors duration-300">
                  {t('nav.blog')}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold font-amiri">{t('nav.services')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-beauty-warm hover:text-white transition-colors duration-300">
                  {t('services.acupuncture')}
                </a>
              </li>
              <li>
                <a href="#" className="text-beauty-warm hover:text-white transition-colors duration-300">
                  {t('services.cupping')}
                </a>
              </li>
              <li>
                <a href="#" className="text-beauty-warm hover:text-white transition-colors duration-300">
                  {t('products.naturalOils')}
                </a>
              </li>
              <li>
                <a href="#" className="text-beauty-warm hover:text-white transition-colors duration-300">
                  {t('products.herbalTreatments')}
                </a>
              </li>
              <li>
                <a href="#" className="text-beauty-warm hover:text-white transition-colors duration-300">
                  {t('about.vision')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold font-amiri">{t('footer.contact')}</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="w-5 h-5 text-beauty-accent" />
                <span className="text-beauty-warm">{t('contact.phone')}</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="w-5 h-5 text-beauty-accent" />
                <span className="text-beauty-warm">{t('contact.email')}</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <MapPin className="w-5 h-5 text-beauty-accent" />
                <span className="text-beauty-warm">{t('contact.address')}</span>
              </div>
            </div>

            {/* Contact Button */}
            <Button 
              className="bg-beauty-accent hover:bg-beauty-warm hover:text-beauty-primary transition-all duration-300 hover:scale-105 w-full"
            >
              {t('nav.bookAppointment')}
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-beauty-warm text-sm">
              © 2023 {t('company.name')}. {t('footer.allRightsReserved')}.
            </p>
            <div className="flex space-x-6 space-x-reverse mt-4 md:mt-0">
              <a href="#" className="text-beauty-warm hover:text-white text-sm transition-colors duration-300">
                {t('links.privacyPolicy')}
              </a>
              <a href="#" className="text-beauty-warm hover:text-white text-sm transition-colors duration-300">
                {t('links.termsConditions')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;