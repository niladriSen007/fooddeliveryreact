
import i18next from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { LogOut } from "lucide-react"
import { initReactI18next } from "react-i18next"

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    lng: "en",
    returnObjects: true,
   resources:{
    en:{
      translation:{
        navLinks:{
          home:"Home",
          order:"Order",
          category:"Category",
          login:"Login",
          register:"Register",
          language:"Language",
          logout:"Log Out"
        },
        chooseLanguage:"Choose your language",
        heroBanner : "Locally Produced Food Deliverd Directly To Your Door",
        heroDesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      }
    },
    hi:{
      translation:{
        navLinks:{
          home:"होम",
          order:"ऑर्डर",
          category:"श्रेणी",
          login:"लॉग इन",
          register:"रजिस्टर",
          language:"भाषा",
          logout:"लॉग आउट"
        },
        chooseLanguage : "अपनी भाषा चुनें",
        heroBanner : "अपने दरवाजे पर सीधे पहुंचाए गए स्थानीय उत्पादित भोजन",
        heroDesc:"लोरेम इप्सम डोलर सिट अमेट, कोंसेक्टेटुर एडिपिस्किंग एलिट। सेड डो एउस्मोड टेम्पोर इंकीडिडुंट उत लबोरे एट दोलोरे मग्ना अलिक्वा। उत एनिम एड मिनिम वेनियाम, क्विस नोस्त्रुड एक्सर्सिटेशन उल्लाम्को लाबोरिस निसी उत अलिक्विप एक्स एअ कोम्मोदो कोंसेक्वाट।"
      }
   },
    es:{
      translation:{
        navLinks:{
          home:"Casa",
          order:"Orden",
          category:"Categoría",
          login:"Iniciar sesión",
          register:"Registrarse",
          language:"Idioma",
          logout:"Cerrar sesión"

        },
        chooseLanguage : "Elige tu idioma",
        heroBanner : "Comida producida localmente entregada directamente a su puerta",
        heroDesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      }
    },
    fr:{
      translation:{
        navLinks:{
          home:"Accueil",
          order:"Ordre",
          category:"Catégorie",
          login:"S'identifier",
          register:"S'inscrire",
          language:"Langue",
          logout:"Se déconnecter"
        },
        chooseLanguage : "Choisissez votre langue",
        heroBanner : "Nourriture produite localement livrée directement à votre porte",
        heroDesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      }
    },
    bn:{
      translation:{
        navLinks:{
          home:"হোম",
          order:"অর্ডার",
          category:"বিভাগ",
          login:"লগইন",
          register:"নিবন্ধন",
          language:"ভাষা",
          logout:"প্রস্থান"
        },
        chooseLanguage : "আপনার ভাষা চয়ন করুন",
        heroBanner : "আপনার দরজার দিকে সরাসরি পৌঁছে দেওয়া স্থানীয় উৎপাদিত খাদ্য",
        heroDesc:"লোরেম ইপসুম ডোলর সিট আমেট, কন্সেক্টেটুর এডিপিস্কিং এলিট। সেড ডো এউসমোড টেম্পোর ইনকিডিডুন্ট উত লাবোরে এট ডোলোরে মাগ্না আলিক্বা। উত এনিম এড মিনিম ভেনিয়াম, কুইস নোস্ত্রুদ এক্সার্সিটেশন উল্লাম্কো লাবোরিস নিসি উত আলিক্বিপ এক্স এঅ কোম্মোদো কন্সেক্বাট।"
      }
    }
  },
  })