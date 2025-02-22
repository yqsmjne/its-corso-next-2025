export interface Schedule {
  /**
   * Identificativo univoco della programmazione
   */
  id: number;

  /**
   * Identificativo del film programmato
   */
  id_movie: number;

  /**
   * Identificativo della sala in cui il film è programmato
   */
  id_room: number;

  /**
   * Data della programmazione (formato: YYYY-MM-DD)
   */
  date: string;

  /**
   * Ora della programmazione (formato: HH:MM)
   */
  time: string;

  /**
   * Array di identificativi dei tag associati alla programmazione (opzionale)
   */
  tags_ids?: number[];
}
