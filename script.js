// script.js for language switching

const translations = {
  fr: {
    siteTitle: "salut salé",
    contact: "Contact",
    aboutTitle: "À propos de moi",
    aboutDescription:
      "Je m'appelle Hannah, je suis franco-allemande et passionnée par le mouvement et la nutrition. Après avoir grandi et enseigné le ski en Autriche, je me suis installée dans le Finistère Sud, là où le sel de l'océan fait partie du quotidien. C'est ici qu'est né \"salut salé\".<br /><br />J'accompagne chacun·e à travers des consultations diététiques et cours de Yoga, de préparation physique et de stretching. Curieux de mieux bouger ou mieux manger ? Mes séances s'adaptent à vos besoins et vos rythmes.<br /><br />J’aime transmettre avec simplicité et authenticité le goût de l’équilibre et du plaisir, dans le mouvement comme dans l’assiette.<br /><br />Langues : français / allemand / anglais<br />Diplômes : Diététicienne / professeure de Yoga / coach sportif",
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
    contactSection:
      "du lundi au samedi, sur demande Français<br /><br />Deutsch<br />English<br /><br />Des questions ?<br />hannahgerrier@gmail.com<br />07 63 33 36 70<br />",
    legalTitle: "Mentions légales",
    legalContent:
      "Responsable du site<br />Hannah Gerrier<br />9 Rue Marcel Cariou<br />29120 Pont L'Abbé<br />France<br />hannahgerrier@gmail.com<br />",
    subtitle: "NUTRITION - YOGA",
    who: "salut salé - Hannah Gerrier",
  },
  de: {
    siteTitle: "salut salé",
    contact: "Kontakt",
    aboutTitle: "Über mich",
    aboutDescription: `Mein Name ist Hannah, ich bin Deutsch-Französin und meine Leidenschaften sind Bewegung und Ernährung. Ich bin in Österreich aufgewachsen und habe dort als Skilehrerin gearbeitet, bevor ich mich im Südwesten der Bretagne (Finistère) niedergelassen habe – dort, wo das Salz des Ozeans zum Alltag gehört. Hier ist „salut salé“ entstanden.
     
Ich begleite jede*n durch Ernährungsberatungen sowie Yoga-, Fitness- und Stretching-Kurse. Neugierig, sich besser zu bewegen oder gesünder zu ernähren? Meine Einheiten passen sich Ihren Bedürfnissen und Ihrem Rhythmus an.

Sprachen:  Deutsch / Englisch / Französisch
Abschlüsse: Ernährungsberaterin (Diätologin) / Yogalehrerin / Gesundheits- und Fitnesscoach`,
    servicesTitle: "ANGEBOTE",
    servicesSubtitle:
      "Hier finden Sie die verschiedenen angebotenen Angebote …",
    service1: `Ernährungsberatung - Erstgespräch
(1 Stunde)
bei Ihnen zu Hause oder online`,
    service1Cost: "65,00 €",
    service2: `Ernährungsberatung - Folgegespräch
(30 minutes)
bei Ihnen zu Hause oder online`,
    service2Cost: "35,00 €",
    service3: `Private Yogastunde (1 Stunde)
bei Ihnen zu Hause oder online`,
    service3Cost: "65,00 € (+ 10,00 € pro zusätzliche Person)",
    service4: `Yoga Gruppenkurs (1 Stunde)
an verschiedenen Orten oder online`,
    service4Cost: "15,00 €",
    contactSection: `Montag bis Samstag, auf Anfrage

Deutsch
Englisch
Französisch

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
  },
  en: {
    siteTitle: "salut salé",
    contact: "Contact",
    aboutTitle: "About me",
    aboutDescription: `My name is Hannah, I am French-German and passionate about movement and nutrition. After growing up and teaching skiing in Austria, I settled in the south-west of Brittany (Finistère), where the salt of the ocean is part of everyday life. This is where "salut salé" was born.

I guide each person through dietary consultations as well as Yoga, fitness, and stretching classes. Curious to move better or eat healthier? My sessions adapt to your needs and rhythm.

I enjoy sharing with simplicity and authenticity with those who want to find their balance and pleasure – in movement as well as on the plate.

Languages: English / French / German
Qualifications: Dietitian / Yoga Teacher / Health & Fitness Coach`,
    servicesTitle: "SERVICES",
    servicesSubtitle: "Here are the different services offered...",
    service1: `Dietetic consultation (1 hour)
at your home or online`,
    service1Cost: "65.00 €",
    service2: `Dietetic Follow-Up (30 minutes)
at your home or online`,
    service2Cost: "35.00 €",
    service3: `Private Yoga Class (1 hour)
at your home or online`,
    service3Cost: "65.00 € (+ 10.00 € per additional person)",
    service4: `Group Yoga Class (1 hour)
at different locations or online`,
    service4Cost: "15.00 €",
    contactSection: `Monday to Friday, by appointment

English
French
German

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
    t.aboutDescription
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

  const urlParams = new URLSearchParams(window.location.search);
  let initialLang = urlParams.get("lang") || "fr";

  if (!translations[initialLang]) {
    initialLang = "fr";
  }

  setLanguage(initialLang, false);

  select.addEventListener("change", function () {
    let lang = "fr";
    if (select.value === "Deutsch") lang = "de";
    else if (select.value === "English") lang = "en";
    setLanguage(lang);
  });
});
