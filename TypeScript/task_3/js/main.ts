// la triple slash directive dit a typescript dinclure les types de crud.d.ts
/// <reference path="./crud.d.ts" />

// on importe les types dont on a besoin depuis linterface
import { RowID, RowElement } from './interface';

// on importe toutes les fonctions de crud.js sous le namespace CRUD
import * as CRUD from './crud';

// on cree un objet row avec le type RowElement age est absent car optionel
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// on insere la ligne dans la base et on recupere lID genere
// newRowID est de type RowID cest a dire un number
const newRowID: RowID = CRUD.insertRow(row);

// on cree une nouvelle version de la ligne avec lage en plus
// on ecrase pas lancien objet on en cree un nouveau immutable
const updatedRow: RowElement = { ...row, age: 23 };

// on met a jour la ligne dans la base avec le meme ID
CRUD.updateRow(newRowID, updatedRow);

// on supprime la ligne de la base grace a son ID
CRUD.deleteRow(newRowID);
