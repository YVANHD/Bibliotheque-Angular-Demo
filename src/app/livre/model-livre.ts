export class Livre {

    constructor(public id?: number,
                public name?: string,
                public auteur?: string,
                public description?: string,
                public prix?: number,
                public image?: string) {

    }

}

// la class Livre avec le mot cle export qui rend ainsi possible son importation dans
// un autre fichier. creation d'une constante tableau de Livre
export const LIVRES: Livre[] = [
    {
        id: 1,
        name: 'Comment se faire des amis',
        auteur: 'Dale Carnegie',
        // tslint:disable-next-line:max-line-length
        description: 'Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.',
        prix: 500 ,
        image: '../assets/miam.jpg'
    },
    {
        id: 2,
        name: 'Nicola Tesla, ET LE Gouvernement Des État-Unis',
        auteur: 'Maximillien de Lafayette',
        // tslint:disable-next-line:max-line-length
        description: 'Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.',
        prix: 500,
        image: '../assets/miam.jpg'
    },
    {
        id: 3,
        name: 'Dictionnaire amoureux de lhumour',
        auteur: ' Jean Loup Chiflet ',
        // tslint:disable-next-line:max-line-length
        description: 'Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.',
        prix: 500,
        image: '../assets/miam.jpg'
    },
    {
        id: 4,
        name: 'Exercices en Java',
        auteur: 'Claude Delannoy',
        // tslint:disable-next-line:max-line-length
        description: 'Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.',
        prix: 500,
        image: '../assets/miam.jpg'
    },
    {
        id: 5,
        name: 'Films, Series, Dessins animés',
        auteur: 'Chekiro',
        // tslint:disable-next-line:max-line-length
        description: 'Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.',
        prix: 500,
        image: '../assets/miam.jpg'
    },
    {
        id: 6,
        name: 'LES Rivieres Pourpres',
        auteur: 'Claude Depardieu',
        // tslint:disable-next-line:max-line-length
        description: 'Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.',
        prix: 500,
        image: '../assets/miam.jpg'
    },
    {
        id: 7,
        name: 'LES Rivieres Pourpres',
        auteur: 'Claude Depardieu',
        // tslint:disable-next-line:max-line-length
        description: 'Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.',
        prix: 500,
        image: '../assets/miam.jpg'
    },
    {
        id: 8,
        name: 'LES Rivieres Pourpres',
        auteur: 'Claude Depardieu',
        // tslint:disable-next-line:max-line-length
        description: 'Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.',
        prix: 500,
        image: '../assets/miam.jpg'
    },
    {
        id: 9,
        name: 'LES Rivieres Pourpres',
        auteur: 'Claude Depardieu',
        // tslint:disable-next-line:max-line-length
        description: 'Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.',
        prix: 500,
        image: '../assets/miam.jpg'
    },
    {
        id: 10,
        name: 'LES Rivieres Pourpres',
        auteur: 'Claude Depardieu',
        // tslint:disable-next-line:max-line-length
        description: 'Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.',
        prix: 500,
        image: '../assets/miam.jpg'
    },
    {
        id: 11,
        name: 'LES Rivieres Pourpres',
        auteur: 'Claude Depardieu',
        // tslint:disable-next-line:max-line-length
        description: 'Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.',
        prix: 500,
        image: '../assets/miam.jpg'
    },
    {
        id: 12,
        name: 'LES Rivieres Pourpres',
        auteur: 'Claude Depardieu',
        // tslint:disable-next-line:max-line-length
        description: 'Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.',
        prix: 500,
        image: '../assets/miam.jpg'
    },

];
