// RowID cest juste un alias pour number plus facile a lire dans le code
export type RowID = number;

// RowElement cest la forme dune ligne dans notre base de donnee
// age est optionel avec le ? parce que tout le monde a pas forcement son age renseigné
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}
