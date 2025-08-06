import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";
import { useTranslation } from 'react-i18next';
import AOS from "aos";
import "aos/dist/aos.css";

const Signup = () => {
  const { t, i18n } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert(t('forms.passwordMismatch') || "Passwords don't match");
      return;
    }
    // Handle signup logic here
    console.log("Signup submitted:", formData);
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-beauty-cream to-beauty-warm flex items-center justify-center p-4 font-arabic" 
      dir={i18n.language === 'ar' || i18n.language === 'he' ? 'rtl' : 'ltr'}
    >
      <Card className="w-full max-w-md shadow-2xl" data-aos="fade-up">
        <CardHeader className="text-center pb-8 pt-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-beauty-primary font-amiri">
              {t('nav.signup')}
            </h1>
            <p className="text-foreground/70 mt-2">
              {t('hero.subtitle')}
            </p>
          </div>
        </CardHeader>

        <CardContent className="px-8 pb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-beauty-primary">
                {t('forms.fullName')}
              </label>
              <div className="relative">
                <User className="absolute right-3 top-3 w-4 h-4 text-foreground/50" />
                <input
                  type="text"
                  placeholder={t('forms.enterFullName')}
                  className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-beauty-primary transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-beauty-primary">
                {t('forms.email')}
              </label>
              <div className="relative">
                <Mail className="absolute right-3 top-3 w-4 h-4 text-foreground/50" />
                <input
                  type="email"
                  placeholder={t('forms.enterEmail')}
                  className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-beauty-primary transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-beauty-primary">
                {t('forms.phone')}
              </label>
              <div className="relative">
                <Phone className="absolute right-3 top-3 w-4 h-4 text-foreground/50" />
                <input
                  type="tel"
                  placeholder={t('forms.enterPhone')}
                  className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-beauty-primary transition-all"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-beauty-primary">
                {t('forms.password')}
              </label>
              <div className="relative">
                <Lock className="absolute right-3 top-3 w-4 h-4 text-foreground/50" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder={t('forms.enterPassword')}
                  className="w-full pl-12 pr-10 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-beauty-primary transition-all"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-3 text-foreground/50 hover:text-beauty-primary transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-beauty-primary">
                {t('forms.confirmPassword')}
              </label>
              <div className="relative">
                <Lock className="absolute right-3 top-3 w-4 h-4 text-foreground/50" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder={t('forms.reenterPassword')}
                  className="w-full pl-12 pr-10 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-beauty-primary transition-all"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute left-3 top-3 text-foreground/50 hover:text-beauty-primary transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <label className="flex items-center">
                <input type="checkbox" className="ml-2 rounded" required />
                <span className="text-sm text-foreground/70">
                  {t('forms.agreeToTerms')}
                </span>
              </label>
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-beauty-primary hover:bg-beauty-accent transition-all duration-300 hover:scale-105"
            >
              {t('forms.createAccount')}
            </Button>

            <div className="text-center">
              <span className="text-foreground/70">{t('forms.alreadyHaveAccount')} </span>
              <Link to="/login" className="text-beauty-primary hover:text-beauty-accent font-medium transition-colors">
                {t('nav.login')}
              </Link>
            </div>
          </form>

          <div className="mt-8 text-center">
            <Link to="/" className="text-beauty-primary hover:text-beauty-accent transition-colors">
              {t('forms.backToHome')}
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;