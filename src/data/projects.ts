export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;      // Thumbnail voor de grid
  video?: string;     // Optionele hoofdvideo
  images: string[];    // Mix van foto's en video's: ["/img1.jpg", "/vid1.mp4"]
  details: string[];
}

export const projects: Project[] = [
  // Je huidige projecten
  {
    id: 0,
    slug: "fietshellingbaan-zwolle",
    location: "CS | Zwolle",
    title: "Fietshellingbaan",
    category: "Montage",
    image: "/images/projects/cszwolle/cszwolle1.jpg",
    images: [
      "/images/projects/cszwolle/cszwolle2.jpg",
      "/images/projects/cszwolle/cszwolle3.jpg",
      "/images/projects/cszwolle/cszwolle4.jpg",
      "/images/projects/cszwolle/cszwolle5.jpg",
      "/images/projects/cszwolle/cszwolle6.jpg"
    ],
    description: "CS Zwolle hebben we de fietshellingbaan voorzien van nieuwe treden met Kerara stootborden en betonnen goten. De betonconstructie is vooraf vakkundig uitgevlakt met Sopro RAM-mortel en de montage is uitgevoerd conform het Sopro-lijmadvies.",
    details: ["Kerara Stootborden", "Sopro RAM-mortel", "Sopro-lijmadvies"]
  },
  {
    id: 1,
    slug: "zandcement-dekvloer-geldrop",
    location: "Privé Woning | Geldrop",
    title: "80 m² Zandcementdekvloer",
    category: "Montage",
    image: "/images/projects/privewoninggeldrop/privewoninggeldrop1.jpg",
    images: [
      "/images/projects/privewoninggeldrop/privewoninggeldrop4.jpg",
      "/images/projects/privewoninggeldrop/privewoninggeldrop3.jpg",
      "/images/projects/privewoninggeldrop/privewoninggeldrop2.jpg"
    ],
    description: "Realisatie van een 80 m² zandcementdekvloer op basis van duurzame ECO to floor gietmortel. Een project gekenmerkt door een hoogwaardige verwerking met een uiterst nauwkeurige vlakheidsgraad als resultaat.",
    details: ["Uiterst nauwkeurige vlakheidsgraad", "Duurzaam", "Hoogwaardige verwerking"]
  },
  {
    id: 2,
    slug: "specialistisch-metselwerk-en-natuursteen-rijksmuseum-amsterdam",
    location: "Rijksmuseum | Amsterdam",
    title: "Specialistisch Metselwerk & Natuursteen",
    category: "Montage",
    image: "/images/projects/rijksmuseumamsterdam/rijksmuseumamsterdam1.jpg",
    images: [
      "/images/projects/rijksmuseumamsterdam/rijksmuseumamsterdam1.jpg",
      "/images/projects/rijksmuseumamsterdam/rijksmuseumamsterdam2.jpg",
      "/images/projects/rijksmuseumamsterdam/rijksmuseumamsterdam3.jpg"
    ],
    description: "Uitvoering van hoogwaardig metselwerk en de nauwkeurige montage van natuursteen elementen binnen een monumentale setting. Een project waarbij de hoogste eisen zijn gesteld aan esthetiek, duurzaamheid en vaktechnische precisie.",
    details: ["Esthetiek", "Duurzaam", "Monumentaal", "Vaktechnische precisie"]
  },

  {
    id: 3,
    slug: "montage-natuursteen-station-driebergen-zeist",
    location: "Station Driebergen-Zeist | Driebergen",
    title: "Montage Natuursteen",
    category: "Montage",
    image: "/images/projects/stationdriebergen/stationdriebergen1.jpg",
    images: [
      "/images/projects/stationdriebergen/stationdriebergen3.jpg",
      "/images/projects/stationdriebergen/stationdriebergen2.jpg",
      "/images/projects/stationdriebergen/stationdriebergen4.jpg"
    ],
    description: "Realisatie van grootschalige natuursteenmontage binnen de vernieuwde stationsomgeving. Een project waarbij de focus lag op een naadloze aansluiting van natuursteenelementen in een intensief gebruikte publieke ruimte.",
    details: ["Montage", "Natuursteen", "Publieke Ruimte"]
  },
  {
    id: 4,
    slug: "vloer-en-traprefractie-in-drainagemortel-maarssen",
    location: "Privé Woning | Maarssen",
    title: "Vloer- en traprefractie in drainagemortel",
    category: "Drainage",
    image: "/images/projects/privewoningmaarssen/privewoningmaarssen1.jpg",
    images: [
      "/images/projects/privewoningmaarssen/privewoningmaarssen2.jpg",
      "/images/projects/privewoningmaarssen/privewoningmaarssen3.jpg",
      "/images/projects/privewoningmaarssen/privewoningmaarssen4.jpg",
      "/images/projects/privewoningmaarssen/privewoningmaarssen5.jpg",
      "/images/projects/privewoningmaarssen/privewoningmaarssen6.jpg",
      "/images/projects/privewoningmaarssen/privewoningmaarssen7.jpg",
      "/images/projects/privewoningmaarssen/privewoningmaarssen8.jpg",
      "/images/projects/privewoningmaarssen/privewoningmaarssen9.jpg",
      "/images/projects/privewoningmaarssen/privewoningmaarssen10.jpg",
      "/images/projects/privewoningmaarssen/privewoningmaarssen11.jpg",
      "/images/projects/privewoningmaarssen/privewoningmaarssen12.jpg",
      "/images/projects/privewoningmaarssen/privewoningmaarssen13.jpg",
      "/images/projects/privewoningmaarssen/privewoningmaarssen14.jpg",
      "/images/projects/privewoningmaarssen/privewoningmaarssen15.jpg",
      "/images/projects/privewoningmaarssen/privewoningmaarssen16.jpg",
      "/images/projects/privewoningmaarssen/privewoningmaarssen17.jpg",
      "/images/projects/privewoningmaarssen/privewoningmaarssen18.jpg",
      "/images/projects/privewoningmaarssen/privewoningmaarssen19.jpg",
      "/images/projects/privewoningmaarssen/privewoningmaarssen20.jpg",
      "/images/projects/privewoningmaarssen/privewoningmaarssen21.jpg",
      "/images/projects/privewoningmaarssen/privewoningmaarssen22.jpg",
      "/images/projects/privewoningmaarssen/privewoningmaarssen23.jpg",
      "/images/projects/privewoningmaarssen/privewoningmaarssen24.jpg",
      "/images/projects/privewoningmaarssen/privewoningmaarssen25.jpg",
      "/images/projects/privewoningmaarssen/privewoningmaarssen26.jpg",
    ],
    description: "Vakkundige plaatsing van een drainagevloer en bijbehorende traptreden. Uitgevoerd met materialen van hoogwaardige kwaliteit voor een duurzaam en strak eindresultaat.",
    details: ["Drainage", "Hoogwaardig", "Duurzaam", "Strak"]
  },
  {
    id: 5,
    slug: "vloertechniek-op-tegeldragers-epo-rijswijk",
    location: "EPO: Europees Octrooibureau | Rijswijk",
    title: "10.000m² Vloertechniek op Tegeldragers",
    category: "Montage",
    image: "/images/projects/vloereporijswijk/vloereporijswijk1.jpg",
    images: [
/*      "/images/projects/vloereporijswijk/vloereporijswijk1.mp4",
      "/images/projects/vloereporijswijk/vloereporijswijk2.mp4",*/
      "/images/projects/vloereporijswijk/vloereporijswijk2.jpg",
      "/images/projects/vloereporijswijk/vloereporijswijk3.jpg",
      "/images/projects/vloereporijswijk/vloereporijswijk4.jpg",
      "/images/projects/vloereporijswijk/vloereporijswijk5.jpg",
      "/images/projects/vloereporijswijk/vloereporijswijk6.jpg",
      "/images/projects/vloereporijswijk/vloereporijswijk7.jpg",
      "/images/projects/vloereporijswijk/vloereporijswijk8.jpg",
      "/images/projects/vloereporijswijk/vloereporijswijk9.jpg",
      "/images/projects/vloereporijswijk/vloereporijswijk10.jpg",
      "/images/projects/vloereporijswijk/vloereporijswijk11.jpg",
      "/images/projects/vloereporijswijk/vloereporijswijk12.jpg",
      "/images/projects/vloereporijswijk/vloereporijswijk13.jpg",
      "/images/projects/vloereporijswijk/vloereporijswijk14.jpg",
      "/images/projects/vloereporijswijk/vloereporijswijk15.jpg",
      "/images/projects/vloereporijswijk/vloereporijswijk16.jpg",
      "/images/projects/vloereporijswijk/vloereporijswijk17.jpg",
      "/images/projects/vloereporijswijk/vloereporijswijk18.jpg",
      "/images/projects/vloereporijswijk/vloereporijswijk19.jpg",
      "/images/projects/vloereporijswijk/vloereporijswijk20.jpg",
      "/images/projects/vloereporijswijk/vloereporijswijk21.jpg",
      "/images/projects/vloereporijswijk/vloereporijswijk22.jpg",
      "/images/projects/vloereporijswijk/vloereporijswijk23.jpg",
      "/images/projects/vloereporijswijk/vloereporijswijk24.jpg",
      "/images/projects/vloereporijswijk/vloereporijswijk25.jpg",
      "/images/projects/vloereporijswijk/vloereporijswijk26.jpg",
      "/images/projects/vloereporijswijk/vloereporijswijk27.jpg",
      "/images/projects/vloereporijswijk/vloereporijswijk28.jpg",
      "/images/projects/vloereporijswijk/vloereporijswijk29.jpg",
      "/images/projects/vloereporijswijk/vloereporijswijk30.jpg",
      "/images/projects/vloereporijswijk/vloereporijswijk31.jpg",
      "/images/projects/vloereporijswijk/vloereporijswijk32.jpg",
      "/images/projects/vloereporijswijk/vloereporijswijk33.jpg",
      "/images/projects/vloereporijswijk/vloereporijswijk34.jpg",
      "/images/projects/vloereporijswijk/vloereporijswijk35.jpg",
      "/images/projects/vloereporijswijk/vloereporijswijk36.jpg",
      "/images/projects/vloereporijswijk/vloereporijswijk37.jpg",
    ],
    description: "Vakkundige plaatsing van een omvangrijk vloersysteem, volledig afgestemd op de glaslijn van het gebouw. Uitgevoerd met lasergestuurde precisiezagen en vacuümmontage voor een hoogwaardige afwerking over grote afstanden.",
    details: ["Precisiezagen", "Vacuümmontage", "Hoogwaardige afwerking"]
  },
  {
    id: 6,
    slug: "waterval-epo-rijswijk",
    location: "EPO: Europees Octrooibureau | Rijswijk",
    title: "450m Waterval – Specialistisch Tegelwerk",
    category: "Montage",
    image: "/images/projects/watervaleporijswijk/watervaleporijswijk1.jpg",
    images: [
      "/images/projects/watervaleporijswijk/watervaleporijswijk1.mp4",
      "/images/projects/watervaleporijswijk/watervaleporijswijk2.mp4",
      "/images/projects/watervaleporijswijk/watervaleporijswijk2.jpg",
      "/images/projects/watervaleporijswijk/watervaleporijswijk3.jpg",
      "/images/projects/watervaleporijswijk/watervaleporijswijk4.jpg",
      "/images/projects/watervaleporijswijk/watervaleporijswijk5.jpg",
      "/images/projects/watervaleporijswijk/watervaleporijswijk6.jpg",
    ],
    description: "Vakkundige montage van tegelwerk tegen een betonnen achterconstructie over een lengte van 450 meter. Specialistische uitvoering waarbij precisie-maatvoering essentieel was voor de correcte waterloop en een strak esthetisch resultaat.",
    details: ["Precisie-maatvoering", "Correcte waterloop", "Esthetisch"]
  },
  {
    id: 7,
    slug: "project-grotius-montage-natuursteen-den-haag",
    location: "Grotius Toren | Den Haag",
    title: "Project Grotius | Montage Natuursteen",
    category: "Montage",
    image: "/images/projects/grotiusdenhaag/grotiusdenhaag1.png",
    images: [
      "/images/projects/grotiusdenhaag/grotiusdenhaag3.jpg",
      "/images/projects/grotiusdenhaag/grotiusdenhaag4.jpg",
      "/images/projects/grotiusdenhaag/grotiusdenhaag5.jpg",
      "/images/projects/grotiusdenhaag/grotiusdenhaag6.jpg",
      "/images/projects/grotiusdenhaag/grotiusdenhaag7.jpg",
      "/images/projects/grotiusdenhaag/grotiusdenhaag8.jpg",
      "/images/projects/grotiusdenhaag/grotiusdenhaag9.jpg",
      "/images/projects/grotiusdenhaag/grotiusdenhaag10.jpg",
    ],
    description: "Realisatie van grootschalige natuursteenmontage op een logistiek uitdagende en moeilijk bereikbare locatie. De zware steenelementen zijn vakkundig bevestigd middels een traditioneel ankersysteem, wat zorgt voor een uiterst solide en duurzame constructie.",
    details: ["Duurzaam", "Ankersysteem", "Moeilijk bereikbare locatie"]
  },
  {
    id: 8,
    slug: "hoogwaardige-supervlakke-vloer-rituals",
    location: "Rituals",
    title: "Hoogwaardige Supervlakke Vloer",
    category: "Montage",
    image: "/images/projects/vloerrituals/vloerrituals1.jpg",
    images: [
      "/images/projects/vloerrituals/vloerrituals1.mp4",
      "/images/projects/vloerrituals/vloerrituals2.jpg",
      "/images/projects/vloerrituals/vloerrituals3.jpg",
      "/images/projects/vloerrituals/vloerrituals4.jpg",
      "/images/projects/vloerrituals/vloerrituals5.jpg",
      "/images/projects/vloerrituals/vloerrituals6.jpg",
      "/images/projects/vloerrituals/vloerrituals7.jpg",
      "/images/projects/vloerrituals/vloerrituals8.jpg",
      "/images/projects/vloerrituals/vloerrituals9.jpg",
      "/images/projects/vloerrituals/vloerrituals10.jpg",
      "/images/projects/vloerrituals/vloerrituals11.jpg",
      "/images/projects/vloerrituals/vloerrituals12.jpg",
      "/images/projects/vloerrituals/vloerrituals13.jpg",
      "/images/projects/vloerrituals/vloerrituals14.jpg",
      "/images/projects/vloerrituals/vloerrituals15.jpg",
      "/images/projects/vloerrituals/vloerrituals16.jpg",
      "/images/projects/vloerrituals/vloerrituals17.jpg",
      "/images/projects/vloerrituals/vloerrituals18.jpg",
      "/images/projects/vloerrituals/vloerrituals19.jpg",
      "/images/projects/vloerrituals/vloerrituals20.jpg",
      "/images/projects/vloerrituals/vloerrituals21.jpg",
      "/images/projects/vloerrituals/vloerrituals22.jpg",
      "/images/projects/vloerrituals/vloerrituals23.jpg",
      "/images/projects/vloerrituals/vloerrituals24.jpg",
    ],
    description: "Vakkundige uitvoering van een vloer met een maximale vlakheidsgraad. Gerealiseerd met focus op precisie en een hoogwaardig afwerkingsniveau, volledig in lijn met de merkidentiteit van Rituals.",
    details: ["Precisie", "Hoogwaardig Afwerkingsniveau", "Merkidentiteit"]
  },
];
