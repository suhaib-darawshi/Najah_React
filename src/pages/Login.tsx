import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useTranslation } from 'react-i18next';
import AOS from "aos";
import "aos/dist/aos.css";

const Login = () => {
  const { t, i18n } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-beauty-cream to-beauty-warm flex items-center justify-center p-4 font-arabic" dir={i18n.language === 'ar' || i18n.language === 'he' ? 'rtl' : 'ltr'}>
      <Card className="w-full max-w-md shadow-2xl" data-aos="fade-up">
        <CardHeader className="text-center pb-8 pt-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-beauty-primary font-amiri">
              {t('login.title')}
            </h1>
            <p className="text-foreground/70 mt-2">
              {t('login.subtitle')}
            </p>
          </div>
        </CardHeader>

        <CardContent className="px-8 pb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-beauty-primary">
                {t('login.email')}
              </label>
              <div className="relative">
                <Mail className={`absolute ${i18n.language === 'ar' || i18n.language === 'he' ? 'right-3' : 'left-3'} top-3 w-4 h-4 text-foreground/50`} />
                <input
                  type="email"
                  placeholder={t('login.emailPlaceholder')}
                  className={`w-full ${i18n.language === 'ar' || i18n.language === 'he' ? 'pl-4 pr-10' : 'pr-4 pl-10'} py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-beauty-primary transition-all`}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-beauty-primary">
                {t('login.password')}
              </label>
              <div className="relative">
                <Lock className={`absolute ${i18n.language === 'ar' || i18n.language === 'he' ? 'right-3' : 'left-3'} top-3 w-4 h-4 text-foreground/50`} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder={t('login.passwordPlaceholder')}
                  className={`w-full ${i18n.language === 'ar' || i18n.language === 'he' ? 'pl-12 pr-10' : 'pr-12 pl-10'} py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-beauty-primary transition-all`}
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute ${i18n.language === 'ar' || i18n.language === 'he' ? 'left-3' : 'right-3'} top-3 text-foreground/50 hover:text-beauty-primary transition-colors`}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className={`${i18n.language === 'ar' || i18n.language === 'he' ? 'ml-2' : 'mr-2'} rounded`} />
                <span className="text-sm text-foreground/70">{t('login.rememberMe')}</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-beauty-primary hover:text-beauty-accent transition-colors">
                {t('login.forgotPassword')}
              </Link>
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-beauty-primary hover:bg-beauty-accent transition-all duration-300 hover:scale-105"
            >
              {t('login.loginButton')}
            </Button>

            <div className="text-center">
              <span className="text-foreground/70">{t('login.noAccount')} </span>
              <Link to="/signup" className="text-beauty-primary hover:text-beauty-accent font-medium transition-colors">
                {t('login.createAccount')}
              </Link>
            </div>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-foreground/50">{t('login.or')}</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full border-gray-200 hover:bg-gray-50"
              >
                {t('login.googleLogin')}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full border-gray-200 hover:bg-gray-50"
              >
                {t('login.facebookLogin')}
              </Button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link to="/" className="text-beauty-primary hover:text-beauty-accent transition-colors">
              {t('login.backToHome')}
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;