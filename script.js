// script.js for language switching
// Every key in a translation object is the id of the element it fills.

const translations = {
  fr: {
    siteTitle: "salut salé",
    contactLink: "Contact",
    subtitle: "YOGA - NUTRITION",
    aboutTitle: "À propos de moi",
    aboutDescription: `Je m'appelle Hannah, je suis franco-allemande et passionnée par le mouvement et la nutrition. Après avoir grandi et enseigné le ski en Autriche, je me suis installée dans le Finistère Sud, là où le sel de l'océan fait partie du quotidien. C'est ici qu'est né "salut salé".

J'accompagne chacun·e à travers des consultations diététiques et des cours de Yoga, de préparation physique et de stretching. Curieux de mieux bouger ou mieux manger ? Mes séances s'adaptent à vos besoins et votre rythme.

J’aime transmettre avec simplicité et authenticité le goût de l’équilibre et du plaisir, dans le mouvement comme dans l’assiette.

Mes services sont proposés en français, allemand et anglais.

Diplômes : BTS Diététique / Formation de professeure de Yoga – 200h multistyle (Hatha, Vinyasa, Ashtanga) / Formation coach santé et fitness`,
    service1: `Consultation <b>bilan diététique</b> (1 heure)
à votre domicile* <span class="cost">75,00 €</span>
ou en ligne <span class="cost">60,00 €</span>`,
    service2: `Consultation <b>suivi diététique</b> (30 minutes)
à votre domicile* <span class="cost">45,00 €</span>
ou en ligne <span class="cost">30,00 €</span>`,
    service3: `Cours de Yoga privé (1 heure)
à votre domicile* ou en ligne
<span class="cost">65,00 € (+ 10,00 € par personne supplémentaire)</span>`,
    service4: `Cours de Yoga collectif (1 heure)
voir ci-dessous`,
    locationNotice:
      "<b>* Déplacements à domicile :</b> sans frais de déplacement jusqu’à 10 km de Pont-l’Abbé (Place Gambetta), puis 0,50 €/km (aller-retour) au-delà.",
    planningTitle: "Le planning des cours",
    planningSubtitle: "de septembre 2026 à juin 2027",
    planning1Title: "Les cours à Pont-l'Abbé",
    planning1Content: `Jeudi - 18h15 à 19h15 - Vinyasa Yoga (plus dynamique)
Jeudi - 19h30 à 20h30 - Hatha Yoga (plus doux)

Les cours ont lieu dans le Studio 15, 15 Route de Loctudy`,
    planning1Book: "Réserver un cours",
    planning1Card: "Acheter une carte",
    planning2Title: "Les cours à Bénodet",
    planning2Content: `Mercredi - 18h15 à 19h15 - Vinyasa Yoga (plus dynamique)
Mercredi - 19h30 à 20h30 - Hatha Yoga (plus doux)

Les cours ont lieu dans le Château Les Garennes`,
    planning2Book: "Réserver un cours",
    planning3Title: "Les cours à Fouesnant",
    planning3Content: `Lundi - 18h15 à 19h15 - Vinyasa Yoga (plus dynamique)
Lundi - 19h45 à 20h45 - Hatha Yoga (plus doux)

Les cours ont lieu dans le complexe sportif Bréhoulou, salle 9`,
    planning3Book: "Réserver un cours",
    planning3Card: "Acheter une carte",
    typesTitle: "Les types de cours",
    types1Title: "Hatha Yoga (doux)",
    types1Content: `Une pratique équilibrée qui mélange la tenue de postures longues et des enchaînements fluides.

Les postures sont explorées avec attention, tout en laissant une place au mouvement pour créer une séance vivante.

Un cours pour renforcer le corps en douceur, améliorer sa mobilité et sa coordination, tout en cultivant concentration et présence.

Accessible à tous les niveaux, chacun est invité à adapter la pratique à son propre corps.`,
    types2Title: "Vinyasa Yoga (dynamique)",
    types2Content: `Une pratique rythmée et énergisante, dans laquelle les postures s'enchaînent de manière fluide au rythme de la respiration.

La séance associe mouvements, postures et transitions pour mettre progressivement le corps en action. On travaille la force, la mobilité, l'équilibre et la coordination, tout en développant une respiration consciente.

Une pratique idéale pour se dépenser, renforcer son corps et repartir avec une sensation d'énergie.

Accessible aux personnes ayant déjà pratiqué le yoga, comme aux pratiquants plus expérimentés.`,
    infosTitle: "Informations pratiques",
    infosContent: `<b>Matériel :</b> tapis disponibles sur place. Apportez votre tapis personnel et une couverture si vous le souhaitez.
<b>Tenue :</b> confortable et permettant de bouger librement.
<b>Arrivée :</b> quelques minutes avant le début du cours.
<b>Parking :</b> chaque lieu de cours dispose de places de parking.`,
    tarifsTitle: "Les tarifs",
    tarifsContent: `Cours à l'unité : 15 €
Carte 5 cours : 70 €
Carte 10 cours : 135 €
Carte 20 cours : 250 €`,
    cgvLink: "Conditions générales de vente",
    contactSection: `<b>Consultations diététiques sur rendez-vous</b>— N’hésitez pas à me contacter pour toute demande spécifique (intervention en entreprise​, demandes d'ateliers privés et professionnels...).
<b>Cours de Yoga sur réservation</b> — Réservez votre séance sur momoyoga. Envie d'une séance privée ? Contactez-moi !

Français
Deutsch
English

Des questions ?
hannahgerrier@gmail.com
07 63 33 36 70`,
    legalTitle: "Mentions légales",
    legalContent: `Responsable du site
Hannah Gerrier
29120 Pont L'Abbé
France
SIRET : 90927281700034
hannahgerrier@gmail.com`,
    hostingTitle: "Hébergement",
    hostingContent: `GitHub Inc.
88 Colin P Kelly Jr Street
San Francisco, CA 94107
États-Unis`,
    who: "salut salé - Hannah Gerrier",
  },
  de: {
    siteTitle: "salut salé",
    contactLink: "Kontakt",
    subtitle: "YOGA - ERNÄHRUNG",
    aboutTitle: "Über mich",
    aboutDescription: `Mein Name ist Hannah, ich bin Deutsch-Französin und meine Leidenschaften sind Bewegung und Ernährung. Ich bin in Österreich aufgewachsen und habe dort als Skilehrerin gearbeitet, bevor ich mich im Südwesten der Bretagne (Finistère) niedergelassen habe – dort, wo das Salz des Ozeans zum Alltag gehört. Hier ist „salut salé“ entstanden.

Ich begleite jede*n durch Ernährungsberatungen sowie Yoga-, Fitness- und Stretching-Kurse. Neugierig, sich besser zu bewegen oder gesünder zu ernähren? Meine Einheiten passen sich Ihren Bedürfnissen und Ihrem Rhythmus an.

Ich biete meine Angebote auf Französisch, Deutsch und Englisch an.

Abschlüsse: Ernährungsberaterin (Diätologin) / 200h Multistyle Yogalehrerin (Hatha, Vinyasa, Ashtanga) / Gesundheits- und Fitnesscoach`,
    service1: `Ernährungsberatung - <b>Erstgespräch</b> (1 Stunde)
bei Ihnen zu Hause* <span class="cost">75,00 €</span>
oder online <span class="cost">60,00 €</span>`,
    service2: `Ernährungsberatung - <b>Folgegespräch</b> (30 Minuten)
bei Ihnen zu Hause* <span class="cost">45,00 €</span>
oder online <span class="cost">30,00 €</span>`,
    service3: `Private Yogastunde (1 Stunde)
bei Ihnen zu Hause* oder online
<span class="cost">65,00 € (+ 10,00 € pro zusätzliche Person)</span>`,
    service4: `Yoga Gruppenkurs (1 Stunde)
siehe unten`,
    locationNotice:
      "<b>* Angebote bei Ihnen zu Hause :</b> kostenlos bis 10 km um Pont-l’Abbé (Place Gambetta), darüber hinaus 0,50 €/km (Hin- und Rückfahrt).",
    planningTitle: "Der Kursplan",
    planningSubtitle: "von September 2026 bis Juni 2027",
    planning1Title: "Die Kurse in Pont-l'Abbé",
    planning1Content: `Donnerstag - 18:15 bis 19:15 - Vinyasa Yoga (dynamischer)
Donnerstag - 19:30 bis 20:30 - Hatha Yoga (sanfter)

Die Kurse finden im Studio 15, 15 Route de Loctudy statt`,
    planning1Book: "Kurs reservieren",
    planning1Card: "Karte kaufen",
    planning2Title: "Die Kurse in Bénodet",
    planning2Content: `Mittwoch - 18:15 bis 19:15 - Vinyasa Yoga (dynamischer)
Mittwoch - 19:30 bis 20:30 - Hatha Yoga (sanfter)

Die Kurse finden im Château Les Garennes statt`,
    planning2Book: "Kurs reservieren",
    planning3Title: "Die Kurse in Fouesnant",
    planning3Content: `Montag - 18:15 bis 19:15 - Vinyasa Yoga (dynamischer)
Montag - 19:45 bis 20:45 - Hatha Yoga (sanfter)

Die Kurse finden im Sportkomplex Bréhoulou, Raum 9 statt`,
    planning3Book: "Kurs reservieren",
    planning3Card: "Karte kaufen",
    typesTitle: "Die Kursarten",
    types1Title: "Hatha Yoga (sanft)",
    types1Content: `Eine ausgewogene Praxis, die lang gehaltene Haltungen mit fließenden Abfolgen verbindet.

Die Haltungen werden achtsam erkundet, wobei die Bewegung ihren Platz behält – so entsteht eine lebendige Stunde.

Ein Kurs, um den Körper sanft zu kräftigen und Beweglichkeit und Koordination zu verbessern, während Konzentration und Präsenz kultiviert werden.

Für alle Levels geeignet – jede*r ist eingeladen, die Praxis an den eigenen Körper anzupassen.`,
    types2Title: "Vinyasa Yoga (dynamisch)",
    types2Content: `Eine rhythmische und energetisierende Praxis, bei der die Haltungen fließend im Rhythmus der Atmung ineinander übergehen.

Die Stunde verbindet Bewegungen, Haltungen und Übergänge, um den Körper nach und nach in Aktion zu bringen. Wir arbeiten an Kraft, Beweglichkeit, Gleichgewicht und Koordination und entwickeln dabei eine bewusste Atmung.

Eine ideale Praxis, um sich auszupowern, den Körper zu stärken und mit neuer Energie nach Hause zu gehen.

Geeignet für alle, die bereits Yoga praktiziert haben, ebenso wie für erfahrene Praktizierende.`,
    infosTitle: "Praktische Informationen",
    infosContent: `<b>Material:</b> Matten vor Ort verfügbar. Bringen Sie gerne Ihre eigene Matte und eine Decke mit.
<b>Kleidung:</b> bequem und bewegungsfreundlich.
<b>Ankunft:</b> einige Minuten vor Kursbeginn.
<b>Parken:</b> an jedem Kursort stehen Parkplätze zur Verfügung.`,
    tarifsTitle: "Die Preise",
    tarifsContent: `Einzelstunde: 15 €
5er-Karte: 70 €
10er-Karte: 135 €
20er-Karte: 250 €`,
    cgvLink: "Allgemeine Verkaufsbedingungen (auf Französisch)",
    contactSection: `<b>Ernährungsberatung</b> : Termine nach Vereinbarung — Sie können mich jederzeit für besondere Anfragen kontaktieren (Firmenanfragen, Anfragen für private und berufliche Workshops …).
<b>Yogakurse</b> : Reservieren Sie Ihre Stunde über momoyoga. Lust auf eine Privatstunde? Kontaktieren Sie mich!

Deutsch
English
Français

Fragen ?
hannahgerrier@gmail.com
+33 (0) 7 63 33 36 70`,
    legalTitle: "Impressum",
    legalContent: `Verantwortlich für die Webseite
Hannah Gerrier
29120 Pont L'Abbé
Frankreich
SIRET: 90927281700034
hannahgerrier@gmail.com`,
    hostingTitle: "Hosting",
    hostingContent: `GitHub Inc.
88 Colin P Kelly Jr Street
San Francisco, CA 94107
USA`,
    who: "salut salé - Hannah Gerrier",
  },
  en: {
    siteTitle: "salut salé",
    contactLink: "Contact",
    subtitle: "YOGA - NUTRITION",
    aboutTitle: "About me",
    aboutDescription: `My name is Hannah, I am French-German and passionate about movement and nutrition. After growing up and teaching skiing in Austria, I settled in the south-west of Brittany (Finistère), where the salt of the ocean is part of everyday life. This is where "salut salé" was born.

I guide each person through dietary consultations as well as Yoga, fitness, and stretching classes. Curious to move better or eat healthier? My sessions adapt to your needs and rhythm.

I enjoy sharing with simplicity and authenticity with those who want to find their balance and pleasure – in movement as well as on the plate.

My services are offered in French, German, and English.

Qualifications: Dietitian / 200h Multistyle Yoga Teacher (Hatha, Vinyasa, Ashtanga) / Health & Fitness Coach`,
    service1: `Dietetic <b>consultation</b> (1 hour)
at your home* <span class="cost">75.00 €</span>
or online <span class="cost">60.00 €</span>`,
    service2: `Dietetic <b>Follow-Up</b> (30 minutes)
at your home* <span class="cost">45.00 €</span>
or online <span class="cost">30.00 €</span>`,
    service3: `Private Yoga Class (1 hour)
at your home* or online
<span class="cost">65.00 € (+ 10.00 € per additional participant)</span>`,
    service4: `Group Yoga Class (1 hour)
see below`,
    locationNotice:
      "<b>* Home visits :</b> free of charge within 10 km of Pont-l’Abbé (Place Gambetta), then €0.50/km (round trip) beyond.",
    planningTitle: "The class schedule",
    planningSubtitle: "from September 2026 to June 2027",
    planning1Title: "Classes in Pont-l'Abbé",
    planning1Content: `Thursday - 18:15 to 19:15 - Vinyasa Yoga (more dynamic)
Thursday - 19:30 to 20:30 - Hatha Yoga (gentler)

Classes take place at Studio 15, 15 Route de Loctudy`,
    planning1Book: "Book a class",
    planning1Card: "Buy a card",
    planning2Title: "Classes in Bénodet",
    planning2Content: `Wednesday - 18:15 to 19:15 - Vinyasa Yoga (more dynamic)
Wednesday - 19:30 to 20:30 - Hatha Yoga (gentler)

Classes take place at the Château Les Garennes`,
    planning2Book: "Book a class",
    planning3Title: "Classes in Fouesnant",
    planning3Content: `Monday - 18:15 to 19:15 - Vinyasa Yoga (more dynamic)
Monday - 19:45 to 20:45 - Hatha Yoga (gentler)

Classes take place at the Bréhoulou sports complex, room 9`,
    planning3Book: "Book a class",
    planning3Card: "Buy a card",
    typesTitle: "The class types",
    types1Title: "Hatha Yoga (gentle)",
    types1Content: `A balanced practice that combines longer-held postures with fluid sequences.

The postures are explored with attention, while leaving room for movement to create a lively session.

A class to gently strengthen the body and improve mobility and coordination, while cultivating concentration and presence.

Accessible to all levels – everyone is invited to adapt the practice to their own body.`,
    types2Title: "Vinyasa Yoga (dynamic)",
    types2Content: `A rhythmic and energising practice in which the postures flow into one another with the rhythm of the breath.

The session combines movements, postures and transitions to progressively bring the body into action. We work on strength, mobility, balance and coordination while developing conscious breathing.

An ideal practice to work out, strengthen your body and leave with a feeling of energy.

Accessible to people who have practised yoga before, as well as more experienced practitioners.`,
    infosTitle: "Practical information",
    infosContent: `<b>Equipment:</b> mats available on site. Bring your own mat and a blanket if you like.
<b>Clothing:</b> comfortable and allowing free movement.
<b>Arrival:</b> a few minutes before the class starts.
<b>Parking:</b> each course location has parking available.`,
    tarifsTitle: "Prices",
    tarifsContent: `Single class: 15 €
5-class card: 70 €
10-class card: 135 €
20-class card: 250 €`,
    cgvLink: "Terms of sale (in French)",
    contactSection: `<b>Dietetic consultations</b> : By appointment only — Feel free to contact me for any specific request (corporate interventions, private and professional workshop inquiries, etc.).
<b>Yoga classes</b> : Book your class on momoyoga. Interested in a private session? Contact me!

English
Français
Deutsch

Questions ?
hannahgerrier@gmail.com
+ 33 (0) 7 63 33 36 70`,
    legalTitle: "Legal notice",
    legalContent: `Website Owner
Hannah Gerrier
29120 Pont L'Abbé
France
SIRET: 90927281700034
hannahgerrier@gmail.com`,
    hostingTitle: "Hosting",
    hostingContent: `GitHub Inc.
88 Colin P Kelly Jr Street
San Francisco, CA 94107
United States`,
    who: "salut salé - Hannah Gerrier",
  },
};

function setLanguage(lang, updateUrl = true) {
  const t = translations[lang];
  if (!t) {
    return;
  }
  const nl2br = (str) => str.replace(/\n/g, "<br />");

  for (const [id, text] of Object.entries(t)) {
    document.getElementById(id).innerHTML = nl2br(text);
  }

  const select = document.getElementById("langSelect");
  if (lang === "de") {
    select.value = "Deutsch";
  } else if (lang === "en") {
    select.value = "English";
  } else {
    select.value = "Francais";
  }

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
    if (select.value === "Deutsch") {
      lang = "de";
    } else if (select.value === "English") {
      lang = "en";
    }
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
