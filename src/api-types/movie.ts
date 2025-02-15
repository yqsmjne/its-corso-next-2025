export interface Movie {
  /**
   * Identificativo univoco del film
   */
  id: number;

  /**
   * Titolo del film
   */
  title: string;

  /**
   * Genere del film (es. commedia, azione, dramma)
   */
  genre: string;

  /**
   * Restrizioni di età (opzionale)
   */
  restriction?: string;

  /**
   * Lingua del film
   */
  language: string;

  /**
   * Regista del film
   */
  director: string;

  /**
   * Cast del film, un array di nomi degli attori
   */
  cast: string[];

  /**
   * Descrizione del film
   */
  description: string;

  /**
   * Anno di uscita del film
   */
  year: number;

  /**
   * URL dell'immagine di copertina del film
   */
  image_url: string;

  /**
   * Durata del film in minuti
   */
  duration: number;

  /**
   * URL del trailer del film (opzionale)
   */
  trailer_url?: string;

  /**
   * Valutazione del film (opzionale)
   */
  rating?: number;

  /**
   * Array di identificativi dei tag associati al film (opzionale)
   */
  tags_ids?: number[];
}
