import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const FAQ = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const faqCategories = [
    {
      title: "أسئلة عامة",
      questions: [
        {
          question: "ما هو العلاج التكميلي؟",
          answer: "العلاج التكميلي هو نهج علاجي يستخدم إلى جانب الطب التقليدي، ويشمل تقنيات طبيعية مثل الوخز بالإبر والحجامة والعلاج بالأعشاب. هذه العلاجات تهدف إلى تحفيز قدرة الجسم الطبيعية على الشفاء وتحسين الصحة العامة."
        },
        {
          question: "هل العلاجات التكميلية آمنة؟",
          answer: "نعم، العلاجات التكميلية التي نقدمها آمنة تماماً عند تطبيقها من قبل متخصصين مؤهلين. جميع علاجاتنا تتم تحت إشراف أطباء مختصين ونستخدم أدوات معقمة وتقنيات مجربة علمياً."
        },
        {
          question: "كم من الوقت تستغرق النتائج للظهور؟",
          answer: "يختلف وقت ظهور النتائج حسب نوع العلاج والحالة الصحية للمريض. بعض الحالات تظهر تحسناً فورياً بعد الجلسة الأولى، بينما قد تحتاج حالات أخرى إلى عدة جلسات. سيقوم طبيبك بوضع خطة علاجية مناسبة ومناقشة التوقعات المتوقعة معك."
        },
        {
          question: "هل يمكن للأطفال تلقي العلاج التكميلي؟",
          answer: "نعم، العديد من العلاجات التكميلية آمنة وفعالة للأطفال، لكن نحتاج لتقييم كل حالة بشكل فردي. نقدم علاجات مخصصة للأطفال تتناسب مع أعمارهم واحتياجاتهم الخاصة."
        }
      ]
    },
    {
      title: "الحجز والمواعيد",
      questions: [
        {
          question: "كيف يمكنني حجز موعد؟",
          answer: "يمكنك حجز موعد بعدة طرق: من خلال موقعنا الإلكتروني، الاتصال المباشر، أو زيارة المركز. نوفر نظام حجز إلكتروني سهل وسريع، كما يمكنك اختيار الطبيب والوقت المناسب لك."
        },
        {
          question: "هل يمكنني إلغاء أو تعديل موعدي؟",
          answer: "نعم، يمكنك إلغاء أو تعديل موعدك قبل 24 ساعة من الموعد المحدد دون أي رسوم. يرجى الاتصال بنا أو استخدام نظام الحجز الإلكتروني لإجراء التعديلات."
        },
        {
          question: "كم يستغرق الموعد؟",
          answer: "تختلف مدة الموعد حسب نوع العلاج. الاستشارة الأولى عادة تستغرق 45-60 دقيقة، بينما جلسات العلاج تتراوح بين 30-90 دقيقة حسب نوع العلاج المطلوب."
        },
        {
          question: "ماذا أحتاج لإحضاره في أول زيارة؟",
          answer: "أحضر معك هويتك الشخصية، أي تقارير طبية حديثة، قائمة بالأدوية التي تتناولها حالياً، وتاريخك المرضي. هذه المعلومات ستساعد الطبيب في وضع خطة علاجية مناسبة لك."
        }
      ]
    },
    {
      title: "العلاجات والخدمات",
      questions: [
        {
          question: "ما هي أنواع العلاجات المتوفرة؟",
          answer: "نقدم مجموعة واسعة من العلاجات التكميلية تشمل: الوخز بالإبر الصينية، الحجامة الطبية، العلاج بالنحل، علاج الشقيقة والصداع النصفي، العلاج بالموكسا، العلاج الطبيعي، والتغذية العلاجية."
        },
        {
          question: "هل تقدمون استشارات أونلاين؟",
          answer: "نعم، نقدم استشارات أولية عبر الإنترنت لمناقشة حالتك وتقديم النصائح الأولية. ومع ذلك، معظم علاجاتنا تتطلب حضوراً شخصياً للحصول على أفضل النتائج."
        },
        {
          question: "هل العلاج مؤلم؟",
          answer: "معظم علاجاتنا غير مؤلمة أو تسبب ألماً طفيفاً جداً. الوخز بالإبر مثلاً يشعر به المريض كوخزة خفيفة، والحجامة قد تسبب شعوراً بالشد الخفيف. أطباؤنا مدربون على تقليل أي إزعاج وجعل تجربتك مريحة قدر الإمكان."
        },
        {
          question: "هل يمكن دمج العلاج التكميلي مع الأدوية التقليدية؟",
          answer: "نعم، في معظم الحالات يمكن دمج العلاج التكميلي مع الأدوية التقليدية بأمان. في الواقع، هذا النهج المتكامل غالباً ما يحقق نتائج أفضل. سنراجع جميع الأدوية التي تتناولها لضمان عدم وجود تداخلات."
        }
      ]
    },
    {
      title: "التكلفة والدفع",
      questions: [
        {
          question: "كم تكلف العلاجات؟",
          answer: "تختلف تكلفة العلاجات حسب نوع العلاج ومدة الجلسة. نقدم أسعاراً تنافسية وعروضاً خاصة للحزم العلاجية. يمكنك الاطلاع على قائمة الأسعار الكاملة على موقعنا أو الاستفسار عند الحجز."
        },
        {
          question: "ما هي طرق الدفع المتاحة؟",
          answer: "نقبل الدفع النقدي، البطاقات الائتمانية، والتحويل البنكي. كما نقدم خطط دفع مرنة للحزم العلاجية طويلة المدى."
        },
        {
          question: "هل تقدمون خصومات أو عروض خاصة؟",
          answer: "نعم، نقدم خصومات للطلاب وكبار السن والعائلات. كما نوفر عروضاً خاصة للحزم العلاجية وخصومات موسمية. تابع موقعنا ووسائل التواصل الاجتماعي للاطلاع على أحدث العروض."
        },
        {
          question: "هل تغطي شركات التأمين تكلفة العلاج؟",
          answer: "بعض شركات التأمين تغطي العلاج التكميلي. ننصحك بالتواصل مع شركة التأمين الخاصة بك للاستفسار عن التغطية. يمكننا مساعدتك في تحضير التقارير اللازمة لطلب التعويض."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background font-arabic" dir="rtl">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-beauty-cream">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
              <h1 className="text-5xl font-bold text-beauty-primary mb-6 font-amiri">
                الأسئلة الشائعة
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                إجابات شاملة على الأسئلة الأكثر شيوعاً حول خدماتنا وعلاجاتنا التكميلية
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12" data-aos="fade-up" data-aos-delay={categoryIndex * 100}>
                  <h2 className="text-2xl font-bold text-beauty-primary mb-6 font-amiri">
                    {category.title}
                  </h2>
                  
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`${categoryIndex}-${index}`}
                        className="bg-white rounded-lg border border-beauty-warm/20 shadow-sm"
                      >
                        <AccordionTrigger className="px-6 py-4 text-right hover:text-beauty-primary transition-colors duration-300 font-semibold">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-foreground/80 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-beauty-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-beauty-primary mb-6 font-amiri">
                لم تجد إجابة لسؤالك؟
              </h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                فريقنا جاهز لمساعدتك والإجابة على جميع استفساراتك
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Phone,
                  title: "اتصل بنا",
                  info: "+966 50 123 4567",
                  action: "tel:+966501234567"
                },
                {
                  icon: Mail,
                  title: "راسلنا",
                  info: "info@alnajah-center.com",
                  action: "mailto:info@alnajah-center.com"
                },
                {
                  icon: MessageCircle,
                  title: "واتساب",
                  info: "تواصل فوري",
                  action: "https://wa.me/966501234567"
                },
                {
                  icon: MapPin,
                  title: "زرنا",
                  info: "الرياض، المملكة العربية السعودية",
                  action: "#"
                }
              ].map((contact, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-500 hover:scale-105 bg-white border-0 text-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-beauty-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-beauty-primary/20 transition-colors duration-300">
                      <contact.icon className="w-8 h-8 text-beauty-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-beauty-primary mb-2 group-hover:text-beauty-accent transition-colors duration-300">
                      {contact.title}
                    </h3>
                    <p className="text-foreground/70 mb-4 text-sm">
                      {contact.info}
                    </p>
                    <a 
                      href={contact.action}
                      className="text-beauty-primary hover:text-beauty-accent font-medium transition-colors duration-300"
                    >
                      تواصل الآن
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12" data-aos="fade-up">
              <Link to="/appointment">
                <Button 
                  size="lg" 
                  className="bg-beauty-primary hover:bg-beauty-accent text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  احجز استشارة مجانية
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;