// Task 1: linterface Teacher cest le contrat de base pour un prof
// readonly veut dire quon peut pas changer le prenom et nom apres creation
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  // les annees dexperience sont optionelles le ? veut dire ca peut etre absent
  yearsOfExperience?: number;
  location: string;
  // le crochet permet dajouter nimporte quelle autre propriete quon veut
  [key: string]: unknown;
}

// Task 2: Directors cest Teacher mais en plus puissant il a les rapport en plus
interface Directors extends Teacher {
  numberOfReports: number;
}

// Task 3: on defini la signature de la fonction printTeacher avant de limplemeneter
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// la fontion prend prenom et nom et retourne initiale du prenom suivi du nom
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Task 4: linterface du constructeur dit comment on doit creer un StudentClass
interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

// sa cest les methodes que doit avoir tout objet etudiant
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// la classe concrette qui implements les deux interface au dessus
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  // le constructeur stock le prenom et nom dans lobjet
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // retourne un message qui dit que letudiant travail ses devoirs
  workOnHomework(): string {
    return 'Currently working';
  }

  // retourne juste le prenom pour identifier letudiant
  displayName(): string {
    return this.firstName;
  }
}
