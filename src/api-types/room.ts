export type Room = {
  /**
   * Identificativo univoco della sala
   */
  id: string;

  /**
   * Nome della sala
   */
  name: string;

  /**
   * Numero di posti disponibili nella sala
   */
  available_seats: number;
};
