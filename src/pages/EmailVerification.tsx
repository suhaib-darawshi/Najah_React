import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Mail, CheckCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

const EmailVerification = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleCodeChange = (index: number, value: string) => {
    if (value.length > 1) return;
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleVerify = async () => {
    setIsLoading(true);
    const verificationCode = code.join("");
    
    // Simulate API call
    setTimeout(() => {
      if (verificationCode === "123456") {
        setIsVerified(true);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
      setIsLoading(false);
    }, 1500);
  };

  const handleResendCode = () => {
    // Simulate resending code
    console.log("Resending verification code...");
  };

  const isRTL = i18n.language === 'ar' || i18n.language === 'he';

  if (isVerified) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4" dir={isRTL ? 'rtl' : 'ltr'}>
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {t('verification.success')}
            </h2>
            <p className="text-foreground/70">
              {t('verification.successMessage')}
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4" dir={isRTL ? 'rtl' : 'ltr'}>
      <Card className="w-full max-w-md" data-aos="fade-up">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-beauty-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-beauty-primary" />
          </div>
          <CardTitle className="text-2xl font-bold text-beauty-primary">
            {t('verification.title')}
          </CardTitle>
          <CardDescription className="text-foreground/70">
            {t('verification.subtitle')}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <label className="text-sm font-medium text-foreground">
              {t('verification.codeLabel')}
            </label>
            <div className={`flex gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {code.map((digit, index) => (
                <Input
                  key={index}
                  id={`code-${index}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 text-center text-lg font-bold"
                />
              ))}
            </div>
          </div>

          <Button
            onClick={handleVerify}
            disabled={code.some(digit => !digit) || isLoading}
            className="w-full"
          >
            {isLoading ? t('verification.verifying') : t('verification.verify')}
          </Button>

          <div className="text-center space-y-2">
            <p className="text-sm text-foreground/70">
              {t('verification.noCode')}
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleResendCode}
              className="text-beauty-primary hover:text-beauty-accent"
            >
              {t('verification.resendCode')}
            </Button>
          </div>

          <div className="text-center">
            <Link to="/signup">
              <Button variant="ghost" size="sm" className="flex items-center gap-2 mx-auto">
                <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                {t('verification.backToSignup')}
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmailVerification;