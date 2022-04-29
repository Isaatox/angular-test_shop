export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Ordinateur gaming',
    price: 799,
    description:
      'Ordinateur pour jouer au jeux vidéo avec 1to de stockage et 32 go Ram.',
  },
  {
    id: 2,
    name: 'Tablette',
    price: 299,
    description: 'Tablette pour faire principalement du graphisme',
  },
  {
    id: 3,
    name: 'Ordinateur portable',
    price: 699,
    description: 'Pratique pour se déplacer et utile pour un bureau',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
