import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          title1: "Click on 'launch the draw' to find out who is giving to whom !" ,
          title2: "Tadaaaaaaaa !!!!!",
          actionLaunch: "LAUNCH THE DRAW",
          actionSend: "SEND THE EMAIL",
          titleTableSender: "THIS PERSON OFFERS",
          titleTableRecipient: "THIS PESON",
          alertMessage: "Cette action sera réaliser plus tard, pour le moment c'est le test !"
        },
      },
      fr: {
        translation: {
          title1: "Clique sur 'lancer le tirage' pour savoir qui offre à qui !",
          title2: "Tadaaaaaaaa !!!!!",
          actionLaunch: "LANCER LE TIRAGE",
          actionSend: "ENVOYER LE MAIL",
          titleTableSender: "CETTE PERSONNE OFFRE",
          titleTableRecipient: "A CETTE PERSONNE",
          alertMessage: "Cette action sera réaliser plus tard, pour le moment c'est le test !"
        },
      },
    },
    
  //  lng: "fr",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });