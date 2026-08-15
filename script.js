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
    planning1Content: `Jeudi - 18h15 à 19h15 - Yoga dynamique
Jeudi - 19h30 à 20h30 - Yoga doux

Les cours ont lieu dans le Studio 15, 15 Route de Loctudy`,
    planning2Title: "Les cours à Bénodet",
    planning2Content: `Mercredi - 18h15 à 19h15 - Yoga dynamique
Mercredi - 19h30 à 20h30 - Yoga doux

Les cours ont lieu dans le Château Les Garennes (réservation sur leur site internet)`,
    planning3Title: "Les cours à Fouesnant",
    planning3Content: `Lundi - 18h10 à 19h25 - Yin Yoga
Lundi - 19h30 à 20h45 - Hatha Flow

Les cours ont lieu dans le complexe sportif Bréhoulou, salle 9`,
    typesTitle: "Les types de cours",
    types1Title: "Le Yoga Doux",
    types1Content: `... une pratique équilibrée qui mélange la tenue des postures longues avec des enchaînements fluides.

Les postures sont explorées avec attention, tout en laissant une place au mouvement pour créer une pratique vivante.

Une pratique pour renforcer le corps en douceur, améliorer sa mobilité et sa coordination, tout en cultivant concentration et présence.

Accessible à tous les niveaux, chacun est invité à adapter la pratique à son propre corps.`,
    types2Title: "Le Yoga Dynamique",
    types2Content: `... une pratique rythmée et énergisante, dans laquelle les postures s'enchaînent de manière fluide au rythme de la respiration.

La séance mêle mouvements, postures et transitions pour mettre progressivement le corps en action. On travaille la force, la mobilité, l'équilibre et la coordination, tout en développant une respiration consciente.

Une pratique idéale pour se dépenser, renforcer son corps et repartir avec une sensation d'énergie.

Accessible aux personnes ayant déjà quelques bases en yoga comme aux pratiquants plus expérimentés. Les variations proposées permettent à chacun d'adapter l'intensité de la pratique.`,
    types3Title: "Le Yin Yoga",
    types3Content: `... est une pratique douce, lente et profondément relaxante qui invite à ralentir.

Les postures sont pratiquées au sol et maintenues plusieurs minutes, souvent en ayant des aides (blocks, coussins, sangle...). Cette immobilité permet au corps de relâcher progressivement les tensions et d'explorer en douceur les tissus plus profonds, notamment les fascias, les articulations et les tissus conjonctifs.

La respiration devient un véritable fil conducteur et laisse place à un état de calme et de lâcher-prise.

Une pratique pour gagner en flexibilité et en mobilité, clarifier ses pensées et reposer le corps.

Le Yin Yoga est accessible à tous - chaque posture peut être adaptée aux besoins de chacun.`,
    infosTitle: "Informations pratiques",
    infosContent: `<b>Réservation :</b> en ligne via Momoyoga
<b>Matériel :</b> tapis disponibles sur place
<b>Tenue :</b> confortable et adaptée à la pratique
<b>À prévoir :</b> eau + éventuellement tapis personnel et couverture
<b>Arrivée :</b> quelques minutes avant le début du cours`,
    tarifsTitle: "Les tarifs",
    tarifsContent: `Cours à l'unité : 15 €
Carte 5 cours : 70 €
Carte 10 cours : 135 €`,
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
9 Rue Marcel Cariou
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
    planning1Content: `Donnerstag - 18:15 bis 19:15 - Dynamisches Yoga
Donnerstag - 19:30 bis 20:30 - Sanftes Yoga

Die Kurse finden im Studio 15, 15 Route de Loctudy statt`,
    planning2Title: "Die Kurse in Bénodet",
    planning2Content: `Mittwoch - 18:15 bis 19:15 - Dynamisches Yoga
Mittwoch - 19:30 bis 20:30 - Sanftes Yoga

Die Kurse finden im Château Les Garennes statt (Reservierung über deren Website)`,
    planning3Title: "Die Kurse in Fouesnant",
    planning3Content: `Montag - 18:10 bis 19:25 - Yin Yoga
Montag - 19:30 bis 20:45 - Hatha Flow

Die Kurse finden im Sportkomplex Bréhoulou, Raum 9 statt`,
    typesTitle: "Die Kursarten",
    types1Title: "Sanftes Yoga",
    types1Content: `... eine ausgewogene Praxis, die lang gehaltene Haltungen mit fließenden Abfolgen verbindet.

Die Haltungen werden achtsam erkundet, wobei die Bewegung ihren Platz behält – so entsteht eine lebendige Praxis.

Eine Praxis, um den Körper sanft zu kräftigen und Beweglichkeit und Koordination zu verbessern, während Konzentration und Präsenz kultiviert werden.

Für alle Levels geeignet – jede*r ist eingeladen, die Praxis an den eigenen Körper anzupassen.`,
    types2Title: "Dynamisches Yoga",
    types2Content: `... eine rhythmische und energetisierende Praxis, bei der die Haltungen fließend im Rhythmus der Atmung ineinander übergehen.

Die Stunde verbindet Bewegungen, Haltungen und Übergänge, um den Körper nach und nach in Aktion zu bringen. Wir arbeiten an Kraft, Beweglichkeit, Gleichgewicht und Koordination und entwickeln dabei eine bewusste Atmung.

Eine ideale Praxis, um sich auszupowern, den Körper zu stärken und mit neuer Energie nach Hause zu gehen.

Geeignet für alle mit ersten Yoga-Grundlagen ebenso wie für erfahrene Praktizierende. Die angebotenen Variationen erlauben es jedem, die Intensität der Praxis anzupassen.`,
    types3Title: "Yin Yoga",
    types3Content: `... ist eine sanfte, langsame und tief entspannende Praxis, die zum Entschleunigen einlädt.

Die Haltungen werden am Boden praktiziert und mehrere Minuten gehalten, oft mit Hilfsmitteln (Blöcke, Kissen, Gurt ...). Diese Stille erlaubt dem Körper, Spannungen nach und nach loszulassen und sanft die tieferen Gewebe zu erkunden – insbesondere Faszien, Gelenke und Bindegewebe.

Die Atmung wird zum roten Faden und führt in einen Zustand von Ruhe und Loslassen.

Eine Praxis, um Flexibilität und Beweglichkeit zu gewinnen, die Gedanken zu klären und den Körper auszuruhen.

Yin Yoga ist für alle geeignet – jede Haltung kann an die Bedürfnisse jedes Einzelnen angepasst werden.`,
    infosTitle: "Praktische Informationen",
    infosContent: `<b>Reservierung:</b> online über Momoyoga
<b>Material:</b> Matten vor Ort verfügbar
<b>Kleidung:</b> bequem und für die Praxis geeignet
<b>Mitzubringen:</b> Wasser + eventuell eigene Matte und Decke
<b>Ankunft:</b> einige Minuten vor Kursbeginn`,
    tarifsTitle: "Die Preise",
    tarifsContent: `Einzelstunde: 15 €
5er-Karte: 70 €
10er-Karte: 135 €`,
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
9 Rue Marcel Cariou
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
    planning1Content: `Thursday - 18:15 to 19:15 - Dynamic Yoga
Thursday - 19:30 to 20:30 - Gentle Yoga

Classes take place at Studio 15, 15 Route de Loctudy`,
    planning2Title: "Classes in Bénodet",
    planning2Content: `Wednesday - 18:15 to 19:15 - Dynamic Yoga
Wednesday - 19:30 to 20:30 - Gentle Yoga

Classes take place at the Château Les Garennes (booking via their website)`,
    planning3Title: "Classes in Fouesnant",
    planning3Content: `Monday - 18:10 to 19:25 - Yin Yoga
Monday - 19:30 to 20:45 - Hatha Flow

Classes take place at the Bréhoulou sports complex, room 9`,
    typesTitle: "The class types",
    types1Title: "Gentle Yoga",
    types1Content: `... a balanced practice that combines longer-held postures with fluid sequences.

The postures are explored with attention, while leaving room for movement to create a lively practice.

A practice to gently strengthen the body and improve mobility and coordination, while cultivating concentration and presence.

Accessible to all levels – everyone is invited to adapt the practice to their own body.`,
    types2Title: "Dynamic Yoga",
    types2Content: `... a rhythmic and energising practice in which the postures flow into one another with the rhythm of the breath.

The session combines movements, postures and transitions to progressively bring the body into action. We work on strength, mobility, balance and coordination while developing conscious breathing.

An ideal practice to work out, strengthen your body and leave with a feeling of energy.

Accessible to people with some yoga basics as well as more experienced practitioners. The variations offered allow everyone to adapt the intensity of the practice.`,
    types3Title: "Yin Yoga",
    types3Content: `... is a gentle, slow and deeply relaxing practice that invites you to slow down.

The postures are practised on the floor and held for several minutes, often with props (blocks, cushions, strap ...). This stillness allows the body to gradually release tension and gently explore the deeper tissues – in particular the fascia, joints and connective tissue.

The breath becomes a true guiding thread, giving way to a state of calm and letting go.

A practice to gain flexibility and mobility, clear your mind and rest the body.

Yin Yoga is accessible to everyone – each posture can be adapted to individual needs.`,
    infosTitle: "Practical information",
    infosContent: `<b>Booking:</b> online via Momoyoga
<b>Equipment:</b> mats available on site
<b>Clothing:</b> comfortable and suited to the practice
<b>To bring:</b> water + optionally your own mat and blanket
<b>Arrival:</b> a few minutes before the class starts`,
    tarifsTitle: "Prices",
    tarifsContent: `Single class: 15 €
5-class card: 70 €
10-class card: 135 €`,
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
9 Rue Marcel Cariou
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
