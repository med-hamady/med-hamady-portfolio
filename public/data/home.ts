import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const homeData = {
  // Ajoute ton image dans /public/assets avec le nom ci-dessous
  myImage: "/assets/mohamed-hamady.jpg",

  contactInfo: [
    {
      Icon: IoMdMail,
      Label: "mohamed.hamady@gmail.com", // remplace si tu veux une autre adresse
      Link: "/contact",
    },
    {
      Icon: FaLocationDot,
      Label: "Nouakchott, Mauritanie",
      Link: "https://www.google.com/maps/place/Nouakchott",
    },
    {
      Icon: FaPhoneAlt,
      Label: "+222 48783201", // remplace par ton numéro réel si souhaité
      Link: "tel:+22248783201",
    },
  ],

  education: [
    {
      Icon: FaUniversity,
      Label: "ISCAE - Institut Supérieur de Comptabilité et d’Administration des Entreprises",
      Link: "https://www.iscae.mr/",
    },
    {
      Icon: FaGraduationCap,
      Label: "Licence en Réseaux Informatiques et Télécommunications",
      Link: "#",
    },
  ],

  social: [
    {
      Icon: FaGithub,
      Label: "GitHub",
      Link: "https://github.com/med-hamady",
    },
    {
      Icon: FaLinkedin,
      Label: "LinkedIn",
      Link: "https://www.linkedin.com/in/mohamedsidiyahyahamady/", // remplace par le bon lien
    },
    {
      Icon: FaFacebook,
      Label: "Facebook",
      Link: "https://www.facebook.com/ton-profil", // facultatif
    },
    {
      Icon: FaInstagram,
      Label: "Instagram",
      Link: "https://www.instagram.com/ton-profil", // facultatif
    },
  ],
};
