// script.js for language switching

const translations = {
  fr: {
    siteTitle: "salut salé",
    contact: "Contact",
    aboutTitle: "À propos de moi",
    aboutDescription: `
      Je m'appelle Hannah, je suis franco-allemande et passionnée par le mouvement et la nutrition. Après avoir grandi et enseigné le ski en Autriche, je me suis installée dans le Finistère Sud, là où le sel de l'océan fait partie du quotidien. C'est ici qu'est né "salut salé".

      J'accompagne chacun·e à travers des consultations diététiques et cours de Yoga, de préparation physique et de stretching. Curieux de mieux bouger ou mieux manger ? Mes séances s'adaptent à vos besoins et votre rythme.

      J’aime transmettre avec simplicité et authenticité le goût de l’équilibre et du plaisir, dans le mouvement comme dans l’assiette.

      Mes services sont proposés en français, allemand et anglais.

      Diplômes : BTS Diététique / Formation de professeure de Yoga – 200h multistyle (Hatha, Vinyasa, Ashtanga) / Formation coach santé et fitness
    `,
    servicesTitle: "SERVICES",
    servicesSubtitle: "Voici les différents services proposés...",
    service1:
      "Consultation bilan diététique (1 heure)<br />à votre domicile ou en ligne",
    service1Cost: "65,00 €",
    service2:
      "Consultation suivi diététique (30 minutes)<br />à votre domicile ou en ligne",
    service2Cost: "35,00 €",
    service3: "Cours de Yoga privé (1 heure)<br />à votre domicile ou en ligne",
    service3Cost: "65,00 € (+ 10,00 € par personne de plus)",
    service4:
      "Cours de Yoga collectif (1 heure)<br />lieux différents ou en ligne",
    service4Cost: "15,00 €",
    contactSection: `
      Horaires : lundi, mercredi, jeudi et vendredi de 9h à 18h, et le samedi de 9h à 14h.
      Les rendez-vous se fixent sur demande — n’hésitez pas à me contacter pour convenir d’un créneau.

      Français
      Deutsch
      English

      Des questions ?
      hannahgerrier@gmail.com
      07 63 33 36 70
    `,
    legalTitle: "Mentions légales",
    legalContent:
      "Responsable du site<br />Hannah Gerrier<br />9 Rue Marcel Cariou<br />29120 Pont L'Abbé<br />France<br />hannahgerrier@gmail.com<br />",
    subtitle: "NUTRITION - YOGA",
    who: "salut salé - Hannah Gerrier",
    locationNotice:
      "<b>* Déplacements à domicile :</b> sans frais de déplacement jusqu’à 10 km de Pont-l’Abbé (Place Gambetta), puis 0,50 €/km (aller-retour) au-delà.",
  },
  de: {
    siteTitle: "salut salé",
    contact: "Kontakt",
    aboutTitle: "Über mich",
    aboutDescription: `Mein Name ist Hannah, ich bin Deutsch-Französin und meine Leidenschaften sind Bewegung und Ernährung. Ich bin in Österreich aufgewachsen und habe dort als Skilehrerin gearbeitet, bevor ich mich im Südwesten der Bretagne (Finistère) niedergelassen habe – dort, wo das Salz des Ozeans zum Alltag gehört. Hier ist „salut salé“ entstanden.

Ich begleite jede*n durch Ernährungsberatungen sowie Yoga-, Fitness- und Stretching-Kurse. Neugierig, sich besser zu bewegen oder gesünder zu ernähren? Meine Einheiten passen sich Ihren Bedürfnissen und Ihrem Rhythmus an.

Ich biete meine Angebote auf Französisch, Deutsch und Englisch an.

Abschlüsse: Ernährungsberaterin (Diätologin) / 200h Multistyle Yogalehrerin (Hatha, Vinyasa, Ashtanga) / Gesundheits- und Fitnesscoach`,
    servicesTitle: "ANGEBOTE",
    servicesSubtitle:
      "Hier finden Sie die verschiedenen angebotenen Angebote …",
    service1: `Ernährungsberatung - Erstgespräch (1 Stunde)
bei Ihnen zu Hause* oder online`,
    service1Cost: "65,00 €",
    service2: `Ernährungsberatung - Folgegespräch
(30 minutes)
bei Ihnen zu Hause* oder online`,
    service2Cost: "35,00 €",
    service3: `Private Yogastunde (1 Stunde)
bei Ihnen zu Hause* oder online`,
    service3Cost: "65,00 € (+ 10,00 € pro zusätzliche Person)",
    service4: `Yoga Gruppenkurs (1 Stunde)
an verschiedenen Orten oder online`,
    service4Cost: "15,00 €",
    contactSection: `Verfügbarkeit: Montag, Mittwoch, Donnerstag und Freitag von 9:00 bis 18:00 Uhr, Samstag von 9:00 bis 14:00 Uhr.
Termine nach Vereinbarung — kontaktieren Sie mich gerne, um einen Termin zu vereinbaren.

Deutsch
English
Français

Fragen ?
hannahgerrier@gmail.com
+33 (0) 7 63 33 36 70`,
    legalTitle: "Impressum",
    legalContent: `Verantwortlich für die Webseite
Hannah Gerrier
9 Rue Marcel Cariou
29120 Pont L'Abbé
Frankreich
hannahgerrier@gmail.com`,
    subtitle: "ERNÄHRUNG - YOGA",
    who: "salut salé - Hannah Gerrier",
    locationNotice:
      "<b>* Angebote bei Ihnen zu Hause :</b> kostenlos bis 10 km um Pont-l’Abbé (Place Gambetta), darüber hinaus 0,50 €/km (Hin- und Rückfahrt).",
  },
  en: {
    siteTitle: "salut salé",
    contact: "Contact",
    aboutTitle: "About me",
    aboutDescription: `My name is Hannah, I am French-German and passionate about movement and nutrition. After growing up and teaching skiing in Austria, I settled in the south-west of Brittany (Finistère), where the salt of the ocean is part of everyday life. This is where "salut salé" was born.

I guide each person through dietary consultations as well as Yoga, fitness, and stretching classes. Curious to move better or eat healthier? My sessions adapt to your needs and rhythm.

I enjoy sharing with simplicity and authenticity with those who want to find their balance and pleasure – in movement as well as on the plate.

My services are offered in French, German, and English.

Qualifications: Dietitian / 200h Mutlistyle Yoga Teacher (Hatha, Vinyasa, Ashtanga) / Health & Fitness Coach`,
    servicesTitle: "SERVICES",
    servicesSubtitle: "Here are the different services offered...",
    service1: `Dietetic consultation (1 hour)
at your home* or online`,
    service1Cost: "65.00 €",
    service2: `Dietetic Follow-Up (30 minutes)
at your home* or online`,
    service2Cost: "35.00 €",
    service3: `Private Yoga Class (1 hour)
at your home* or online`,
    service3Cost: "65.00 € (+ 10.00 € per additional participant)",
    service4: `Group Yoga Class (1 hour)
at different locations or online`,
    service4Cost: "15.00 €",
    contactSection: `Availability: Monday, Wednesday, Thursday, and Friday from 9 a.m. to 6 p.m., and Saturday from 9 a.m. to 2 p.m.
Appointments are by request — feel free to contact me to arrange a time.

English
Français
Deutsch

Questions ?
hannahgerrier@gmail.com
+ 33 (0) 7 63 33 36 70`,
    legalTitle: "Legal notice",
    legalContent: `Website Owner
Hannah Gerrier
9 Rue Marcel Cariou
29120 Pont L'Abbé
France
hannahgerrier@gmail.com`,
    subtitle: "NUTRITION - YOGA",
    who: "salut salé - Hannah Gerrier",
    locationNotice:
      "<b>* Home visits :</b> free of charge within 10 km of Pont-l’Abbé (Place Gambetta), then €0.50/km (round trip) beyond.",
  },
};

function setLanguage(lang, updateUrl = true) {
  const t = translations[lang];
  if (!t) return;
  // Helper to convert newlines to <br/>
  const nl2br = (str) => str.replace(/\n/g, "<br />");

  document.getElementById("siteTitle").textContent = t.siteTitle;
  document.getElementById("contactLink").textContent = t.contact;
  document.getElementById("aboutTitle").textContent = t.aboutTitle;
  document.getElementById("aboutDescription").innerHTML = nl2br(
    t.aboutDescription,
  );
  document.getElementById("servicesTitle").textContent = t.servicesTitle;
  document.getElementById("servicesSubtitle").textContent = t.servicesSubtitle;
  document.getElementById("service1").innerHTML = nl2br(t.service1);
  document.getElementById("service1Cost").textContent = t.service1Cost;
  document.getElementById("service2").innerHTML = nl2br(t.service2);
  document.getElementById("service2Cost").textContent = t.service2Cost;
  document.getElementById("service3").innerHTML = nl2br(t.service3);
  document.getElementById("service3Cost").textContent = t.service3Cost;
  document.getElementById("service4").innerHTML = nl2br(t.service4);
  document.getElementById("service4Cost").textContent = t.service4Cost;
  document.getElementById("contactSection").innerHTML = nl2br(t.contactSection);
  document.getElementById("legalTitle").textContent = t.legalTitle;
  document.getElementById("legalContent").innerHTML = nl2br(t.legalContent);
  document.getElementById("subtitle").textContent = t.subtitle;
  document.getElementById("who").textContent = t.who;
  document.getElementById("locationNotice").innerHTML = t.locationNotice;

  const select = document.getElementById("langSelect");
  if (lang === "de") select.value = "Deutsch";
  else if (lang === "en") select.value = "English";
  else select.value = "Francais";

  if (updateUrl) {
    const url = new URL(window.location);
    url.searchParams.set("lang", lang);
    window.history.pushState({}, "", url);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("langSelect");

  select.addEventListener("change", function () {
    let lang = "fr";
    if (select.value === "Deutsch") lang = "de";
    else if (select.value === "English") lang = "en";
    setLanguage(lang);
  });

  const urlParams = new URLSearchParams(window.location.search);

  let initialLang = urlParams.get("lang");

  if (!initialLang) {
    return;
  }

  if (!translations[initialLang]) {
    initialLang = "fr";
  }

  setLanguage(initialLang, false);
});
