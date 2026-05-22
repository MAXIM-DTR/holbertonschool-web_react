// ce fichier cest la declaration ambient de crud.js
// typescript peut pas lire le js directement alors on lui dit les types manuellement
import { RowID, RowElement } from './interface';

// insertRow prend une ligne et retourne son ID generé aleatoirement
export function insertRow(row: RowElement): RowID;

// deleteRow supprime la ligne avec cet id et retourne rien
export function deleteRow(rowId: RowID): void;

// updateRow met a jour la ligne avec ce rowId et retourne le meme rowId
export function updateRow(rowId: RowID, row: RowElement): RowID;
