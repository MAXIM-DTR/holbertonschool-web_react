// Task 5: Advanced types Part 1

// linterface du directeur defini ce quil peut faire lui il a des privileges
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  // methode specifique au directeur les profs ont pas ca
  workDirectorTasks(): string;
}

// linterface du prof cest pareil mais avec sa propre methode de travail
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  // les profs ils ont leur propre facon de travailler différente du dir
  workTeacherTasks(): string;
}

// le directeur peut travailler de chez lui et prendre une pause cafe tranquille
class Director implements DirectorInterface {
  // le dir a le droit de faire du remote cest son privilege
  workFromHome(): string {
    return 'Working from home';
  }

  // lui il peut prendre sa pause cafe sans probleme
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  // il fait les taches de direction gerer les equipes etc
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// le prof lui il peut pas faire du remote et il a meme pas droit a sa pause
class Teacher implements TeacherInterface {
  // le prof doit venir en classe il peut pas rester chez lui
  workFromHome(): string {
    return 'Cannot work from home';
  }

  // pas de pause cafe pour le prof il doit surveiller les eleves
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  // le prof il fait son boulot donner des cours corriger des copies
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// cette fonction cree soit un prof soit un directeur selon le salaire
// si le salaire est un nombre inferieur a 500 cest un prof sinon cest un dir
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    // salaire trop bas donc cest juste un prof
    return new Teacher();
  }
  // salaire elevé ou cest une chaine donc cest un directeur
  return new Director();
}

// Task 6: Creating functions specific to employees

// type predicate ca dit a typescript que si la fonction retourne true alors cest bien un Director
// sans ca typescript saurait pas distinguer les deux types apres
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// executeWork appel la bonne methode selon le type de lemploye
// si cest un dir il fait les taches du dir sinon il fait les taches du prof
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    // cest un directeur on appelle sa methode specifique
    return employee.workDirectorTasks();
  }
  // cest un prof on appelle sa methode a lui
  return employee.workTeacherTasks();
}

// Task 7: String literal types

// Subjects est un type qui accepte seulement deux valeurs possibles Math ou History
// si tu essaies de mettre autre chose typescript va engueuler
type Subjects = 'Math' | 'History';

// teachClass prend le nom du cours et retourne ce quon enseigne
// le type Subjects force que ca peut etre que Math ou History
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    // si cest math on enseigne les maths logique
    return 'Teaching Math';
  }
  // sinon cest forcement History grace au type literal
  return 'Teaching History';
}
