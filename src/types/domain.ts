export type EditionStatus =
  | "draft"
  | "inscriptions_ouvertes"
  | "inscriptions_fermees"
  | "terminee";

export interface Edition {
  year: number;
  slug: string;
  editionNumber: number;
  date: string;
  location: string;
  status: EditionStatus;
  registrationUrl: string;
  resultsUrl?: string;
  photosUrl?: string;
}

export type RaceType = "Adultes" | "Enfants" | "Villageoise" | "Walking";

export interface RaceCategory {
  id: string;
  editionSlug: string;
  name: string;
  distanceKm: number;
  type: RaceType;
  startTime: string;
  description: string;
}

export type TrainingCategory =
  | "Adultes"
  | "Juniors"
  | "Nordic walking"
  | "Prépa 20 km";

export interface TrainingSession {
  id: string;
  title: string;
  category: TrainingCategory;
  day: string;
  time: string;
  location: string;
  level: string;
}

export interface Sponsor {
  id: string;
  name: string;
  level: "principal" | "partenaire";
  website?: string;
}

export interface CommitteeMember {
  id: string;
  name: string;
  role: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
