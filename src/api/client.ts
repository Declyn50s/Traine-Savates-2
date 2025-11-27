// Simple client prêt à être branché sur le backend réel.
// Pour l'instant on renvoie des données mockées.
export const API_BASE_URL = "/api/public";

export async function apiGet<T>(path: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(`${API_BASE_URL}${path}`);
    if (!res.ok) throw new Error("Erreur API");
    return (await res.json()) as T;
  } catch {
    // En dev, on retourne simplement le fallback.
    return fallback;
  }
}
