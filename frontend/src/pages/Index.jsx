import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FileText, ArrowRight, Edit, Download, Save, Search, CheckCircle2, HelpCircle } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

const HERO_CIRCLES = [
  {
    style: {
      top: "8%",
      left: "4%",
      width: "260px",
      height: "260px",
    },
    anim: "animate-hero-float-1",
    bg: "bg-white/60 dark:bg-blue-500/30 blur-2xl",
  },
  {
    style: {
      top: "18%",
      right: "6%",
      width: "200px",
      height: "200px",
    },
    anim: "animate-hero-float-2",
    bg: "bg-white/70 dark:bg-blue-400/40 blur-2xl",
  },
  {
    style: {
      bottom: "16%",
      left: "38%",
      width: "170px",
      height: "170px",
    },
    anim: "animate-hero-float-3",
    bg: "bg-white/60 dark:bg-indigo-500/35 blur-2xl",
  },
  {
    style: {
      bottom: "10%",
      right: "14%",
      width: "140px",
      height: "140px",
    },
    anim: "animate-hero-float-4",
    bg: "bg-white/50 dark:bg-blue-600/30 blur-2xl",
  },
  {
    style: {
      top: "40%",
      left: "60%",
      width: "120px",
      height: "120px",
    },
    anim: "animate-hero-float-5",
    bg: "bg-white/40 dark:bg-indigo-400/40 blur-2xl",
  },
];

const Index = () => {
  const isMobile = useMobile();
  const { isAuthenticated } = useAuth();
  const { language, t } = useLanguage();
  const { theme } = useTheme();
  const location = useLocation();

  const steps = [
    {
      icon: FileText,
      title: language === 'fr' ? 'Choisissez un modèle' : 'Choose a template',
      description: language === 'fr'
        ? 'Sélectionnez un modèle de CV parmi notre collection de designs professionnels.'
        : 'Select a CV template from our collection of professional designs.'
    },
    {
      icon: Edit,
      title: language === 'fr' ? 'Remplissez vos informations' : 'Fill in your information',
      description: language === 'fr'
        ? 'Ajoutez vos coordonnées, expériences, compétences et formation avec notre éditeur simple.'
        : 'Add your contact details, experiences, skills, and education with our simple editor.'
    },
    {
      icon: Save,
      title: language === 'fr' ? 'Sauvegardez votre travail' : 'Save your work',
      description: language === 'fr'
        ? 'Créez un compte pour sauvegarder votre CV et y revenir plus tard pour le modifier.'
        : 'Create an account to save your CV and come back to it later for edits.'
    },
    {
      icon: Download,
      title: language === 'fr' ? 'Téléchargez votre CV' : 'Download your CV',
      description: language === 'fr'
        ? 'Téléchargez votre CV au format PDF prêt à être envoyé aux recruteurs.'
        : 'Download your CV as a PDF ready to be sent to recruiters.'
    }
  ];

  const faqs = [
    {
      question: language === 'fr'
        ? 'Comment commencer à créer mon CV ?'
        : 'How do I start creating my CV?',
      answer: language === 'fr'
        ? 'Cliquez sur "Créer mon CV", choisissez un modèle et commencez à remplir vos informations.'
        : 'Click on "Create my CV", choose a template and start filling in your information.'
    },
    {
      question: language === 'fr'
        ? 'Est-ce que le service est gratuit ?'
        : 'Is the service free?',
      answer: language === 'fr'
        ? 'Oui, la création et le téléchargement de CV sont entièrement gratuits.'
        : 'Yes, creating and downloading CVs is completely free.'
    },
    {
      question: language === 'fr'
        ? 'Dans quel format puis-je télécharger mon CV ?'
        : 'In what format can I download my CV?',
      answer: language === 'fr'
        ? 'Vous pouvez télécharger votre CV au format PDF, qui est universellement accepté.'
        : 'You can download your CV in PDF format, which is universally accepted.'
    },
    {
      question: language === 'fr'
        ? 'Puis-je modifier mon CV après l\'avoir sauvegardé ?'
        : 'Can I edit my CV after saving it?',
      answer: language === 'fr'
        ? 'Oui, vous pouvez modifier votre CV à tout moment après l\'avoir sauvegardé.'
        : 'Yes, you can edit your CV at any time after saving it.'
    }
  ];

  React.useEffect(() => {
    document.title = t('title.home');
  }, [t]);

  // Add effect to handle scroll after navigation
  React.useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      // Clean up the state to prevent scrolling on subsequent renders
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className={`relative py-16 md:py-20 overflow-hidden ${theme === 'dark'
            ? 'bg-gradient-to-br from-slate-900 to-slate-800'
            : 'bg-gradient-to-br from-cvfacile-dark to-cvfacile-primary'
          }`}>
          <div className="container px-4 mx-auto text-center flex flex-col items-center justify-center relative z-20">
            <div className="relative inline-block">
              <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white font-poppins animate-float flex flex-wrap items-center gap-1 justify-center">
                {t('app.subtitle')}
                <span className="pro-badge text-sm font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 bg-[length:200%_100%] text-white px-2 py-0.5 rounded-md inline-flex items-center justify-center shadow-sm animate-shine ml-2 align-middle">PRO</span>
              </h1>
            </div>
            <p className="max-w-2xl mx-auto w-80 mb-8 text-sm md:text-xl md:w-auto text-white/90">
              {language === 'fr'
                ? 'CV Facile Pro vous permet de créer, personnaliser et télécharger des CV professionnels au format PDF'
                : 'Easy CV Pro allows you to create, customize and download professional CVs in PDF format'}
            </p>
            <Link
              to="/build"
              className="inline-flex items-center px-6 py-3 text-white text-sm md:text-base font-medium rounded-full shadow-lg glass-effect"
            >
              {isMobile ? t('app.create') : t('app.create.now')} <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-10">
            {HERO_CIRCLES.map(({ anim, style, bg }, i) => (
              <div
                key={i}
                className={`absolute rounded-full ${bg} ${anim}`}
                style={style}
              ></div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className={`py-16 ${theme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'}`}>
          <div className="container px-4 mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center font-poppins dark:text-white">
              {language === 'fr' ? 'Comment ça marche' : 'How it works'}
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="relative p-6 rounded-xl glass-card transition-transform hover:scale-105"
                  >
                    <div className={`w-12 h-12 mb-4 rounded-full flex items-center justify-center ${theme === 'dark'
                        ? 'bg-gradient-to-br from-blue-600 to-blue-500'
                        : 'bg-cvfacile-primary'
                      }`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold dark:text-white">
                      {step.title}
                    </h3>
                    <p className="dark:text-gray-300 text-gray-600">
                      {step.description}
                    </p>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                        <ArrowRight className="w-8 h-8 text-gray-300 dark:text-gray-600" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faqs" className="py-16 dark:bg-slate-900 bg-slate-50">
          <div className="container px-4 mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center font-poppins dark:text-white">
              {language === 'fr' ? 'Questions fréquentes' : 'Frequently Asked Questions'}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl glass-card transition-all duration-200 hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-4">
                    <div className={`mt-1 ${theme === 'dark' ? 'text-blue-400' : 'text-cvfacile-primary'
                      }`}>
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold dark:text-white">
                        {faq.question}
                      </h3>
                      <p className="dark:text-gray-300 text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Section */}
        <section className="py-12 md:py-16 dark:bg-slate-900 bg-slate-50">
          <div className="container px-4 mx-auto">
            <h2 className="mb-10 md:mb-12 text-xl md:text-3xl font-bold text-center font-poppins dark:text-white">
              {t('app.why.choose')}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: t('app.prof.templates'),
                  description: language === 'fr'
                    ? "Choisissez parmi une sélection de modèles élégants et professionnels adaptés à votre secteur d'activité."
                    : "Choose from a selection of elegant and professional templates suited to your industry."
                },
                {
                  title: t('app.easy.custom'),
                  description: language === 'fr'
                    ? "Personnalisez les couleurs, les polices et la mise en page pour créer un CV qui vous ressemble."
                    : "Customize colors, fonts and layout to create a CV that looks like you."
                },
                {
                  title: t('app.pdf.export'),
                  description: language === 'fr'
                    ? "Téléchargez votre CV en format PDF de haute qualité, prêt à être partagé avec les recruteurs."
                    : "Download your CV in high quality PDF format, ready to be shared with recruiters."
                },
                {
                  title: t('app.intuitive.interface'),
                  description: language === 'fr'
                    ? "Notre interface conviviale vous guide à chaque étape de la création de votre CV."
                    : "Our user-friendly interface guides you through every step of creating your CV."
                },
                {
                  title: t('app.real.time.preview'),
                  description: language === 'fr'
                    ? "Visualisez les modifications apportées à votre CV en temps réel pour un résultat parfait."
                    : "See the changes made to your CV in real time for a perfect result."
                },
                {
                  title: t('app.secure.save'),
                  description: language === 'fr'
                    ? "Créez un compte pour sauvegarder vos CV et y accéder à tout moment depuis n'importe quel appareil."
                    : "Create an account to save your CVs and access them at any time from any device."
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 transition-all rounded-xl glass-card hover:scale-[1.02]"
                >
                  <CheckCircle2 className={`w-8 h-8 mb-4 ${theme === 'dark' ? 'text-blue-400' : 'text-cvfacile-primary'
                    }`} />
                  <h3 className="mb-2 text-lg font-semibold dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="dark:text-gray-300 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {!isAuthenticated && (
          <section className={`py-12 md:py-16 text-white ${theme === 'dark'
              ? 'bg-gradient-to-br from-slate-900 to-slate-800'
              : 'bg-gradient-to-br from-cvfacile-dark to-cvfacile-primary'
            }`}>
            <div className="container px-4 mx-auto text-center">
              <h2 className="mb-6 text-2xl md:text-4xl font-bold font-poppins">
                {t('app.boost.career')}
              </h2>
              <p className="max-w-2xl mx-auto mb-8 text-lg md:text-xl text-white/90">
                {language === 'fr'
                  ? 'Créez un compte gratuit pour sauvegarder vos CV, accéder à des modèles premium et partager vos réalisations.'
                  : 'Create a free account to save your CVs, access premium templates and share your achievements.'}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/register"
                  className="px-6 py-3 text-lg font-medium transition-all glass-effect rounded-full"
                >
                  {t('app.create.account')}
                </Link>
                <Link
                  to="/build"
                  className="px-6 py-3 text-lg font-medium transition-all border border-white rounded-full hover:bg-white/10"
                >
                  {t('app.create')}
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
