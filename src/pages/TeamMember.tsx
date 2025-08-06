import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, Award, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

const teamData = [
  {
    id: 1,
    name: "د. أحمد محمد",
    nameEn: "Dr. Ahmed Mohammed",
    nameHe: "ד\"ר אחמד מוחמד",
    title: "استشاري الطب التكميلي",
    titleEn: "Complementary Medicine Consultant",
    titleHe: "יועץ רפואה משלימה",
    specialties: ["الطب التكميلي", "العلاج بالأعشاب", "التدليك العلاجي"],
    specialtiesEn: ["Complementary Medicine", "Herbal Treatment", "Therapeutic Massage"],
    specialtiesHe: ["רפואה משלימה", "טיפול צמחי", "עיסוי טיפולי"],
    experience: "15 سنة",
    experienceEn: "15 years",
    experienceHe: "15 שנים",
    education: "دكتوراه في الطب التكميلي - جامعة الملك سعود",
    educationEn: "PhD in Complementary Medicine - King Saud University",
    educationHe: "דוקטורט ברפואה משלימה - אוניברסיטת המלך סעוד",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 4.9,
    patients: 2500,
    description: "د. أحمد محمد هو استشاري متخصص في الطب التكميلي والعلاج بالأعشاب مع خبرة تزيد عن 15 عاماً في المجال. حاصل على دكتوراه في الطب التكميلي من جامعة الملك سعود، ويتميز بخبرته الواسعة في تطبيق أحدث تقنيات العلاج الطبيعي.",
    descriptionEn: "Dr. Ahmed Mohammed is a consultant specialized in complementary medicine and herbal treatment with over 15 years of experience in the field. He holds a PhD in Complementary Medicine from King Saud University and is distinguished by his extensive experience in applying the latest natural therapy techniques.",
    descriptionHe: "ד\"ר אחמד מוחמד הוא יועץ המתמחה ברפואה משלימה וטיפול צמחי עם יותר מ-15 שנות ניסיון בתחום. הוא בעל דוקטורט ברפואה משלימה מאוניברסיטת המלך סעוד ומצטיין בניסיונו הרחב ביישום הטכניקות העדכניות ביותר של טיפול טבעי.",
    certifications: ["الجمعية السعودية للطب التكميلي", "البورد الأمريكي للعلاج الطبيعي"],
    certificationsEn: ["Saudi Association of Complementary Medicine", "American Board of Natural Therapy"],
    certificationsHe: ["האגודה הסעודית לרפואה משלימה", "הוועד האמריקני לטיפול טבעי"]
  },
  {
    id: 2,
    name: "د. فاطمة أحمد",
    nameEn: "Dr. Fatima Ahmed",
    nameHe: "ד\"ר פאטמה אחמד",
    title: "أخصائية العلاج الطبيعي",
    titleEn: "Physiotherapy Specialist",
    titleHe: "מומחית לפיזיותרפיה",
    specialties: ["العلاج الطبيعي", "إعادة التأهيل", "علاج الألم"],
    specialtiesEn: ["Physiotherapy", "Rehabilitation", "Pain Management"],
    specialtiesHe: ["פיזיותרפיה", "שיקום", "טיפול בכאב"],
    experience: "12 سنة",
    experienceEn: "12 years",
    experienceHe: "12 שנים",
    education: "ماجستير العلاج الطبيعي - جامعة الملك عبدالعزيز",
    educationEn: "Master's in Physiotherapy - King Abdulaziz University",
    educationHe: "תואר שני בפיזיותרפיה - אוניברסיטת המלך עבדאלעזיז",
    image: "https://images.unsplash.com/photo-1594824375862-87f011e38ae8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 4.8,
    patients: 1800,
    description: "د. فاطمة أحمد أخصائية علاج طبيعي معتمدة مع خبرة 12 عاماً في علاج اضطرابات العضلات والمفاصل. تتخصص في برامج إعادة التأهيل وعلاج الألم المزمن باستخدام أحدث التقنيات.",
    descriptionEn: "Dr. Fatima Ahmed is a certified physiotherapist with 12 years of experience in treating muscle and joint disorders. She specializes in rehabilitation programs and chronic pain management using the latest techniques.",
    descriptionHe: "ד\"ר פאטמה אחמד היא פיזיותרפיסטית מוסמכת עם 12 שנות ניסיון בטיפול בהפרעות שרירים ומפרקים. היא מתמחה בתוכניות שיקום וטיפול בכאב כרוני באמצעות הטכניקות העדכניות ביותר.",
    certifications: ["الجمعية السعودية للعلاج الطبيعي", "الاتحاد العالمي للعلاج الطبيעي"],
    certificationsEn: ["Saudi Physiotherapy Association", "World Confederation for Physical Therapy"],
    certificationsHe: ["האגודה הסעודית לפיזיותרפיה", "הקונפדרציה העולמית לפיזיותרפיה"]
  },
  {
    id: 3,
    name: "د. محمد علي",
    nameEn: "Dr. Mohammed Ali",
    nameHe: "ד\"ר מוחמד עלי",
    title: "استشاري الطب التجميلي",
    titleEn: "Aesthetic Medicine Consultant",
    titleHe: "יועץ רפואה אסתטית",
    specialties: ["الطب التجميلي", "الليزر", "حقن التجميل"],
    specialtiesEn: ["Aesthetic Medicine", "Laser Treatment", "Cosmetic Injections"],
    specialtiesHe: ["רפואה אסתטית", "טיפול לייזר", "זריקות קוסמטיות"],
    experience: "10 سنوات",
    experienceEn: "10 years",
    experienceHe: "10 שנים",
    education: "البورد السعودي للأمراض الجلدية والتجميل",
    educationEn: "Saudi Board of Dermatology and Cosmetics",
    educationHe: "הוועד הסעודי לדרמטולוגיה וקוסמטיקה",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating: 4.9,
    patients: 3200,
    description: "د. محمد علي استشاري متخصص في الطب التجميلي وتقنيات الليزر مع خبرة 10 سنوات. يقدم أحدث علاجات التجميل غير الجراحية مع ضمان أعلى معايير الأمان والجودة.",
    descriptionEn: "Dr. Mohammed Ali is a consultant specialized in aesthetic medicine and laser techniques with 10 years of experience. He provides the latest non-surgical cosmetic treatments while ensuring the highest standards of safety and quality.",
    descriptionHe: "ד\"ר מוחמד עלי הוא יועץ המתמחה ברפואה אסתטית וטכניקות לייזר עם 10 שנות ניסיון. הוא מספק את הטיפולים הקוסמטיים הלא-כירורגיים העדכניים ביותר תוך הבטחת הסטנדרטים הגבוהים ביותר של בטיחות ואיכות."
  }
];

const TeamMember = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const member = teamData.find(m => m.id === parseInt(id || "1"));
  const isRTL = i18n.language === 'ar' || i18n.language === 'he';

  if (!member) {
    return (
      <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
        <Header />
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              {t('teamMember.notFound')}
            </h1>
            <Link to="/about">
              <Button variant="outline">
                {t('teamMember.backToTeam')}
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const getName = () => {
    if (i18n.language === 'en') return member.nameEn;
    if (i18n.language === 'he') return member.nameHe;
    return member.name;
  };

  const getTitle = () => {
    if (i18n.language === 'en') return member.titleEn;
    if (i18n.language === 'he') return member.titleHe;
    return member.title;
  };

  const getSpecialties = () => {
    if (i18n.language === 'en') return member.specialtiesEn;
    if (i18n.language === 'he') return member.specialtiesHe;
    return member.specialties;
  };

  const getExperience = () => {
    if (i18n.language === 'en') return member.experienceEn;
    if (i18n.language === 'he') return member.experienceHe;
    return member.experience;
  };

  const getEducation = () => {
    if (i18n.language === 'en') return member.educationEn;
    if (i18n.language === 'he') return member.educationHe;
    return member.education;
  };

  const getDescription = () => {
    if (i18n.language === 'en') return member.descriptionEn;
    if (i18n.language === 'he') return member.descriptionHe;
    return member.description;
  };

  const getCertifications = () => {
    if (i18n.language === 'en') return member.certificationsEn;
    if (i18n.language === 'he') return member.certificationsHe;
    return member.certifications;
  };

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-16 bg-beauty-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto" data-aos="fade-up">
              <Link to="/about">
                <Button variant="ghost" size="sm" className="mb-6 flex items-center gap-2">
                  <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                  {t('teamMember.backToTeam')}
                </Button>
              </Link>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div data-aos="fade-right">
                  <img 
                    src={member.image} 
                    alt={getName()}
                    className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                  />
                </div>
                
                <div data-aos="fade-left">
                  <h1 className="text-4xl lg:text-5xl font-bold text-beauty-primary mb-4 leading-tight">
                    {getName()}
                  </h1>
                  <p className="text-xl text-beauty-accent font-medium mb-6">
                    {getTitle()}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {getSpecialties().map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="bg-beauty-primary/10 text-beauty-primary">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="font-bold text-beauty-primary">{member.rating}</span>
                      </div>
                      <p className="text-sm text-foreground/70">{t('teamMember.rating')}</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Users className="w-4 h-4 text-beauty-primary" />
                        <span className="font-bold text-beauty-primary">{member.patients}</span>
                      </div>
                      <p className="text-sm text-foreground/70">{t('teamMember.patients')}</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Clock className="w-4 h-4 text-beauty-primary" />
                        <span className="font-bold text-beauty-primary">{getExperience()}</span>
                      </div>
                      <p className="text-sm text-foreground/70">{t('teamMember.experience')}</p>
                    </div>
                  </div>
                  
                  <Button size="lg" className="w-full md:w-auto">
                    {t('teamMember.bookAppointment')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              {/* About */}
              <Card data-aos="fade-up">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-beauty-primary mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    {t('teamMember.about')}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {getDescription()}
                  </p>
                </CardContent>
              </Card>

              {/* Education */}
              <Card data-aos="fade-up" data-aos-delay="100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-beauty-primary mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    {t('teamMember.education')}
                  </h3>
                  <p className="text-foreground/80">
                    {getEducation()}
                  </p>
                </CardContent>
              </Card>

              {/* Certifications */}
              {getCertifications() && (
                <Card data-aos="fade-up" data-aos-delay="200" className="md:col-span-2">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-beauty-primary mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      {t('teamMember.certifications')}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {getCertifications().map((cert, index) => (
                        <div key={index} className="flex items-center gap-2 p-3 bg-beauty-cream rounded-lg">
                          <Award className="w-4 h-4 text-beauty-primary" />
                          <span className="text-foreground/80">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TeamMember;