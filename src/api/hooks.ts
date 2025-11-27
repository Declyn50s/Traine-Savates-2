import { useQuery } from "@tanstack/react-query";
import type {
  Edition,
  RaceCategory,
  TrainingSession,
  Sponsor,
  CommitteeMember,
  FaqItem,
} from "../types/domain";
import { apiGet } from "./client";

// --- Données mockées (remplaçables par le backend plus tard) ---

const mockEdition: Edition = {
  year: 2025,
  slug: "2025",
  editionNumber: 32,
  date: "Samedi 26 avril 2025",
  location: "Cheseaux-sur-Lausanne",
  status: "inscriptions_ouvertes",
  registrationUrl: "https://inscriptions.traine-savates.ch",
  resultsUrl: "https://resultats.traine-savates.ch",
  photosUrl: "https://photos.traine-savates.ch",
};

const mockRaces: RaceCategory[] = [
  {
    id: "10k",
    editionSlug: "2025",
    name: "Course 10.3 km",
    distanceKm: 10.3,
    type: "Adultes",
    startTime: "10h45",
    description:
      "Parcours vallonné sur routes et chemins forestiers balisés, idéal pour les coureurs confirmés.",
  },
  {
    id: "5k",
    editionSlug: "2025",
    name: "Course 5.1 km",
    distanceKm: 5.1,
    type: "Adultes",
    startTime: "10h00",
    description:
      "Boucle accessible à toutes et tous, parfaite pour une première course populaire.",
  },
  {
    id: "villageoise",
    editionSlug: "2025",
    name: "Villageoise 2 km",
    distanceKm: 2,
    type: "Villageoise",
    startTime: "13h00",
    description:
      "Course conviviale au cœur du village, ouverte à tous les âges.",
  },
  {
    id: "kids",
    editionSlug: "2025",
    name: "BCV kids 2 km",
    distanceKm: 2,
    type: "Enfants",
    startTime: "13h30",
    description:
      "Parcours sécurisé pour les plus jeunes, avec arrivée sous l'arche officielle.",
  },
  {
    id: "walking",
    editionSlug: "2025",
    name: "Walking / Marche 5.1 km",
    distanceKm: 5.1,
    type: "Walking",
    startTime: "10h50",
    description:
      "Boucle en marchant ou nordic walking, pour profiter de l'ambiance sans chrono.",
  },
];

const mockTrainings: TrainingSession[] = [
  {
    id: "adultes-lundi",
    title: "Entraînement adultes",
    category: "Adultes",
    day: "Lundi",
    time: "19h00",
    location: "Salle de gym du Maraîs du Billet, Cheseaux",
    level: "Tous niveaux – groupes par rythme",
  },
  {
    id: "adultes-jeudi",
    title: "Sortie fartlek / côtes",
    category: "Adultes",
    day: "Jeudi",
    time: "19h00",
    location: "Rendez-vous devant la salle de sport",
    level: "Coureurs avec un peu d'expérience",
  },
  {
    id: "juniors-mercredi",
    title: "Entraînement juniors",
    category: "Juniors",
    day: "Mercredi",
    time: "17h15",
    location: "Terrain de sport de Cheseaux",
    level: "Dès 8 ans – groupes par âge",
  },
  {
    id: "nordic-mardi",
    title: "Nordic walking",
    category: "Nordic walking",
    day: "Mardi",
    time: "18h30",
    location: "Chemins aux alentours de Cheseaux",
    level: "Ouvert à tous – bâtons bienvenus",
  },
  {
    id: "prepa-20k",
    title: "Préparation 20 km de Lausanne",
    category: "Prépa 20 km",
    day: "Samedi",
    time: "9h00",
    location: "Lieu communiqué selon séance",
    level: "Coureurs visant une course de printemps",
  },
];

const mockSponsors: Sponsor[] = [
  { id: "bcv", name: "BCV", level: "principal" },
  { id: "migros", name: "Migros Vaud", level: "principal" },
  { id: "imsa", name: "IMSA", level: "principal" },
  { id: "ortho", name: "Orthothérapies", level: "principal" },
  { id: "mcd", name: "McDonald's", level: "principal" },
  { id: "hertz", name: "Hertz", level: "partenaire" },
  { id: "autre-a", name: "Partenaire A", level: "partenaire" },
  { id: "autre-b", name: "Partenaire B", level: "partenaire" },
];

const mockCommittee: CommitteeMember[] = [
  { id: "1", name: "Prénom Nom", role: "Président·e" },
  { id: "2", name: "Prénom Nom", role: "Vice-président·e" },
  { id: "3", name: "Prénom Nom", role: "Responsable course" },
  { id: "4", name: "Prénom Nom", role: "Trésorier·ère" },
];

const mockFaq: FaqItem[] = [
  {
    id: "poussettes",
    question: "Les poussettes sont-elles autorisées ?",
    answer:
      "Oui sur certains parcours (villageois notamment), sous la responsabilité des parents.",
  },
  {
    id: "meteo",
    question: "La course a-t-elle lieu par tous les temps ?",
    answer:
      "Sauf conditions météo extrêmes, la course est maintenue. En cas d'annulation, l'information est publiée sur le site et les réseaux.",
  },
];

// --- Hooks publics ---

export function useActiveEdition() {
  return useQuery({
    queryKey: ["edition", "active"],
    queryFn: () => apiGet<Edition>("/edition/active", mockEdition),
    initialData: mockEdition,
  });
}

export function useRaceCategories() {
  return useQuery({
    queryKey: ["edition", "active", "races"],
    queryFn: () => apiGet<RaceCategory[]>("/edition/active/races", mockRaces),
    initialData: mockRaces,
  });
}

export function useTrainingSessions() {
  return useQuery({
    queryKey: ["club", "trainings"],
    queryFn: () => apiGet<TrainingSession[]>("/club/trainings", mockTrainings),
    initialData: mockTrainings,
  });
}

export function useSponsors() {
  return useQuery({
    queryKey: ["sponsors"],
    queryFn: () => apiGet<Sponsor[]>("/sponsors", mockSponsors),
    initialData: mockSponsors,
  });
}

export function useCommittee() {
  return useQuery({
    queryKey: ["club", "committee"],
    queryFn: () => apiGet<CommitteeMember[]>("/club/committee", mockCommittee),
    initialData: mockCommittee,
  });
}

export function useFaq() {
  return useQuery({
    queryKey: ["infos", "faq"],
    queryFn: () => apiGet<FaqItem[]>("/infos-pratiques/faq", mockFaq),
    initialData: mockFaq,
  });
}
