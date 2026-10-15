import type { ImageMetadata } from 'astro';

import tostadaTinga from '../assets/img/tostada_tinga.png';
import carneAsada from '../assets/img/carne_asada.png';
import huarache from '../assets/img/huarache.png';
import sope from '../assets/img/sope.png';
import enchiladas from '../assets/img/enchiladas.png';
import streetTacos from '../assets/img/street_tacos.png';
import threeTacoCombo from '../assets/img/3_taco_combo.png';
import tacoPescado from '../assets/img/taco_pescado.png';
import tacoCamaron from '../assets/img/taco_camaron.png';
import tostadaCeviche from '../assets/img/tostada_ceviche.png';
import coctelCamaron from '../assets/img/coctel_camaron.png';
import burritosImg from '../assets/img/burritos.png';
import burritos2Img from '../assets/img/burritos_2.png';
import tortasImg from '../assets/img/tortas.png';
import quesadillaImg from '../assets/img/quesadilla.png';
import burritosBowlsImg from '../assets/img/burritos_bowls.png';
import flautasImg from '../assets/img/flautas.jpeg';
import chickenTaquitosImg from '../assets/img/chiken_taquitos.jpeg';

export interface MenuItem {
  name: string;
  description?: string;
  price?: string;
  extras?: string;
  tag?: string;
  opciones?: string[];
  image?: ImageMetadata;
}

export interface MenuSection {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
}

export interface BowlOption {
  name: string;
  description: string;
  extraPrice?: string;
}

export interface BowlsSection {
  id: string;
  title: string;
  subtitle: string;
  basePrice: string;
  image?: ImageMetadata;
  options: BowlOption[];
}

export const bowls: BowlsSection = {
  id: 'bowls',
  title: 'Burrito Bowls',
  subtitle: 'Build it your way',
  basePrice: '$14',
  image: burritosBowlsImg,
  options: [
    {
      name: 'Asada Bowl',
      description:
        'Asada meat, White Rice, black beans, pico de gallo, Mexican Blend Cheese, Cotija Cheese, Sour Cream, guacamole and our house Cilantro Lime Ranch Dressing.',
    },
    {
      name: 'Shredded Pollo Bowl',
      description:
        'POLLO / Shredded Chicken, White Rice, black beans, lettuce, pico de gallo, mexican blend shredded cheese, cotija cheese, sour cream, and our house Cilantro Lime Ranch Dressing',
    },
    {
      name: 'Shrimp Bowl',
      description:
        'Shrimp, White Rice, black beans, lettuce, pico de gallo, mexican blend shredded cheese, cotija cheese, sour cream, and our house Cilantro Lime Ranch Dressing',
      extraPrice: '+$3',
    },
    {
      name: 'Pollo Asado',
      description:
        'Chunks of Pollo Asado, White Rice, black beans, pico de gallo, mexican blend shredded cheese, cotija cheese, sour cream, and our house Cilantro Lime Ranch Dressing',
      extraPrice: '+$3',
    },
    {
      name: 'Fish Bowl',
      description:
        'Strips of Fish, White Rice, black beans, pico de gallo, mexican blend shredded cheese, cotija cheese, sour cream, and our house Cilantro Lime Ranch Dressing',
      extraPrice: '+$3',
    },
    {
      name: 'Adobada Bowl',
      description:
        'Chunks of Adobada (Marinated Pork), White Rice, black beans, pico de gallo, mexican blend shredded cheese, cotija cheese, sour cream, and our house Cilantro Lime Ranch Dressing',
    },
    {
      name: 'Carnitas Bowl',
      description:
        'Shredded Pork Carnitas, White Rice, black beans, pico de gallo, Mexican blend shredded cheese, cotija cheese, sour cream, and our house Cilantro Lime Ranch Dressing',
    },
    {
      name: 'Steak Bowl',
      description:
        'Steak Fajita + Chunks of Fajita Asada Steak White Rice, black beans, pico de gallo, mexican blend shredded cheese, cotija cheese, sour cream, and our house Cilantro Lime Ranch Dressing',
      extraPrice: '+$3',
    },
  ],
};

export const menu: MenuSection[] = [
  {
    id: 'specialties',
    title: 'Specialties & Antojitos',
    subtitle: 'House favorites',
    items: [
      {
        name: 'Tostadas de Tinga',
        description:
          'Shredded Chicken Marinated in a Chipotle Adobo sauce, sauteed with onion and Roma Tomatoes, topped with lettuce, sour cream and white cotija cheese.',
        price: '$4.95',
        tag: 'Each',
        image: tostadaTinga,
      },
      {
        name: 'Carne Asada',
        description:
          'Thinly Sliced Skirt Steak Seasoned and Charbroiled to perfection garnished with guacamole, green onions. Served with rice and beans and choice of corn or flour tortillas.',
        price: '$26.95',
        tag: 'Signature',
        image: carneAsada,
      },
      {
        name: 'Flautas De Pollo',
        description:
          'Two large flautas made with corn tortillas filled with shredded beef OR Chicken, deep fried topped with, sour cream, cotija cheese, lettuce, tomatoes, served with rice and beans.',
        price: '$16.95',
        image: flautasImg,
      },
      {
        name: 'Chimichanga',
        description:
          'Rolled fried flour tortilla filled with shredded beef OR Chicken, topped with lettuce, tomato, sour cream, and guacamole, served with rice and beans.',
        price: '$16.95',
        extras: 'A la carta: $10.95',
      },
      {
        name: 'Huaraches',
        description:
          'A corn tortilla shaped as a sandal topped with Choice of meat, refried beans, cabbage, sour cream, and white cotija cheese.',
        price: '$15',
        image: huarache,
      },
      {
        name: 'Quesadilla',
        description:
          'A 12" flour tortilla filled with mexican blend shredded cheese your Choice of meat topped with lettuce, tomato, sour cream.',
        price: '$12.99',
        image: quesadillaImg,
      },
      {
        name: 'Sope',
        description:
          'A round thick corn tortilla topped with Choice of Meat, refried beans, lettuce, sour cream, and white cotija cheese.',
        price: '$7',
        image: sope,
      },
      {
        name: 'Enchiladas Rojas or Verdes',
        description:
          'Two enchiladas filled with shredded beef OR Chicken topped with your choice of green tomatillo sauce or red mole sauce, sour cream, cotija cheese, lettuce, tomatoes, served with rice and beans.',
        price: '$16.95',
        image: enchiladas,
      },
      {
        name: 'Chicken Taquitos',
        description:
          'Flour tortillas deep fried and filled with chicken and cheese, garnished with lettuce, pico de gallo, sour cream, cotija, and guacamole.',
        price: '$13.99',
        image: chickenTaquitosImg,
      },
    ],
  },
  {
    id: 'tacos',
    title: 'Tacos',
    subtitle: 'Made to order',
    items: [
      {
        name: '"Street Tacos"',
        description:
          '"Street Tacos" Made out of two Small corn tortillas Choice of meat, topped with onion and cilantro.',
        price: '$3.00 EA.',
        extras: 'Tripas & Lengua +$1.00',
        tag: 'Each',
        image: streetTacos,
      },
      {
        name: '3 Taco Combo',
        description:
          '3 Street Tacos (1) Choice of Meat served With Spanish Rice and Refried Beans.',
        price: '$13.99',
        tag: 'Combo',
        image: threeTacoCombo,
      },
      {
        name: 'Pescado/Fish Taco',
        description:
          'Made out of two regular corn tortillas, topped with tilapia fish, cabbage, pico de gallo, mayo and special sauce.',
        price: '$7.00 EA.',
        tag: 'Each',
        image: tacoPescado,
      },
      {
        name: 'Camaron/Shrimp Taco',
        description:
          'Made out of two regular corn tortillas, topped with shrimp, cabbage, pico de gallo, mayo and special sauce.',
        price: '$7.00 EA.',
        tag: 'Each',
        image: tacoCamaron,
      },
      {
        name: 'El Norteño',
        description:
          'Made out of two corn tortillas topped with Asada, Chorizo, Nopales (cactus), pico de gallo, guacamole and cotija cheese.',
        price: '$7.00 EA.',
        tag: 'Each',
      },
      {
        name: 'El Mexicano',
        description:
          'Made out of two regular corn tortillas topped with Grilled Steak pico de gallo and cotija cheese.',
        price: '$7.00 EA.',
        tag: 'Each',
      },
    ],
  },
  {
    id: 'seafood',
    title: 'Plates & Seafood',
    subtitle: 'From the coast',
    items: [
      {
        name: 'Tostadas de Ceviche',
        description:
          'Served Cold on a crisp corn tortilla (Tostada) topped with shrimp, crab meat, onion cilantro, tomatoes, and slices of avocado.',
        price: '$9',
        image: tostadaCeviche,
      },
      {
        name: 'Coctel De Camaron',
        description:
          'Large tiger prawns mixed with our house special tomato juice, garnished with onions, cilantro, tomatoes, lime and avocado.',
        price: '$19',
        image: coctelCamaron,
      },
      {
        name: 'Camarones A La Diabla',
        description:
          'Large Shrimp sautéed with fresh mushrooms in a very spicy sauce (Picoso!) served with rice, beans and corn or flour tortillas.',
        price: '$23.95',
        tag: 'Spicy',
      },
      {
        name: 'Camarones Al Mojo De Ajo',
        description:
          'Large Shrimp sautéed with fresh mushrooms, and onions in a house made garlic sauce served with rice, beans and corn or flour tortillas.',
        price: '$23.95',
      },
      {
        name: 'Enchiladas de Camaron',
        description:
          '2 flour tortillas filled with shrimp, onions, tomatoes, topped with a sour cream based sauce, served with rice, fried beans, garnished with lettuce, tomatoes.',
        price: '$22.95',
      },
    ],
  },
  {
    id: 'fajitas',
    title: 'Fajitas',
    subtitle: 'Sizzling from the grill',
    items: [
      {
        name: 'Mar Y Tierra',
        description:
          'Grilled strips of Skirt Steak, Shrimp, Chicken, onions, bell peppers served with rice, refried beans. Choice of corn or flour tortillas.',
        price: '$29.95',
        tag: 'For two',
      },
      {
        name: 'Chicken Fajitas',
        description:
          'Grilled Strips of Chicken, onions, bell peppers served with refried beans and rice. Choice of corn or flour tortillas.',
        price: '$24.95',
      },
      {
        name: 'Beef Fajitas',
        description:
          'Grilled Strips of Skirt Steak, onions, bell peppers served with refried beans and rice. Choice of corn or flour tortillas.',
        price: '$24.95',
      },
      {
        name: 'Shrimp Fajitas',
        description:
          'Grilled Shrimp, onions, bell peppers served with refried beans and rice. Choice of corn or flour tortillas.',
        price: '$24.95',
      },
      {
        name: 'Pollo A La Crema',
        description:
          'Tender strips of Chicken cooked with our own special creamy mushroom Sauce, served with rice, refried beans, corn or flour tortillas.',
        price: '$19.95',
      },
    ],
  },
  {
    id: 'burritos',
    title: 'Burritos',
    subtitle: 'Wrapped in a 12" flour tortilla',
    items: [
      {
        name: 'Bean & Cheese',
        description: 'Made out of 12" flour tortilla filled with bean and cheese.',
        price: '$7',
        extras: '+Chorizo $3 · +sour cream $1',
      },
      {
        name: 'Veggie',
        description:
          'Made out of 12" flour tortilla filled with White rice, black beans, Mexican blend shredded cheese, lettuce, sour cream, guacamole, pico de gallo.',
        price: '$12',
        tag: 'Veggie',
      },
      {
        name: 'Macho Burrito',
        description:
          'Made out of 12" flour tortilla filled with Asada, Bacon, Chorizo, grilled onions Spanish rice, refried beans, pico de gallo, lettuce, cheese, sour cream, guacamole, and a jalapeño roasted on top.',
        price: '$15',
        tag: 'Big appetite',
        image: burritosImg,
      },
      {
        name: 'Basico',
        description:
          'Made out of 12" flour tortilla Choice of meat, Spanish rice, refried beans, onion and cilantro.',
        price: '$12',
      },
      {
        name: 'Supremo',
        description:
          'Made out of 12" flour tortilla Choice of meat, Spanish rice, refried beans, cheese, lettuce, tomato, sour cream, guacamole, onion and cilantro.',
        price: '$13',
        image: burritos2Img,
      },
    ],
  },
  {
    id: 'tortas',
    title: 'Tortas',
    subtitle: 'Mexican sandwiches',
    items: [
      {
        name: 'Tortas',
        description:
          'A hot deli sandwich Made with Mexican Telera bread Choice of Meat, refried beans, lettuce, tomatoes, avocado, and mayo.',
        price: '$10',
        image: tortasImg,
      },
    ],
  },
  {
    id: 'kids',
    title: 'Kids Menu',
    subtitle: 'For the little ones',
    items: [
      {
        name: 'Kids Burrito',
        description: 'Flour Tortilla, Rice, Bean & Cheese',
        price: '$7.00',
        extras: '+ Chicken or Ground Beef $2.00',
      },
      {
        name: 'Kids Quesadilla',
        description: 'flour tortilla & Cheese',
        price: '$7.00',
        extras: '+Chicken or Ground beef $2.00',
        image: quesadillaImg,
      },
      {
        name: 'Kids taco (1)',
        description: 'Chicken or Ground Beef served with Rice and Beans',
        price: '$7.00',
      },
    ],
  },
  {
    id: 'desserts',
    title: 'Desserts',
    subtitle: 'Sweet endings',
    items: [
      {
        name: 'Flan',
        price: '$4.99',
      },
      {
        name: 'Fried Ice Cream',
        price: '$6.99',
      },
      {
        name: 'Churros',
        description: 'Fresa, Chocolate, Caramelo',
        price: '$4.99',
      },
    ],
  },
  {
    id: 'drinks',
    title: 'Drinks',
    subtitle: 'Refreshing sips',
    items: [
      {
        name: 'Fountain Drinks',
        opciones: ['16 oz. - $3.95', '24 oz. - $4.95', '32 oz. - $5.95'],
      },
      {
        name: 'Aguas Frescas',
        opciones: ['Horchata 32 oz - $4.25', 'Jamaica 32 oz - $4.25'],
      },
      {
        name: 'Jarritos',
        price: '$3.95',
      },
      {
        name: 'Coca-Cola Mexicana 1/2 litro',
        price: '$5.95',
      },
    ],
  },
  {
    id: 'alcohol',
    title: 'Alcohol',
    subtitle: 'Cheers!',
    items: [
      {
        name: 'Beer',
        price: '$5.00',
        opciones: ['Corona', 'Coors Light', 'Michelob Ultra'],
      },
      {
        name: "Maria's Margarita",
        price: '$14.00',
      },
      {
        name: 'Cadillac Margarita',
        price: '$17.00',
      },
      {
        name: 'Michelada Regular',
        price: '$15.00',
      },
      {
        name: "Bloody Maria's",
        price: '$14.00',
      },
      {
        name: 'Pina Colada',
        price: '$14.00',
      },
      {
        name: 'Pina Colada Virgen',
        price: '$10.00',
      },
      {
        name: 'Michelada "La Chabelita"',
        price: '$19.00',
      },
      {
        name: 'Cervezas Mexicanas',
        price: '$5.50',
        opciones: [
          'Dos Equis Lager',
          'Dos Equis Ambar',
          'Tecate',
          'Modelo',
          'Sol',
          'Pacifico',
          'Corona',
        ],
      },
      {
        name: 'Mezcalitas',
        price: '$10.00',
        opciones: ['Maracuya', 'Jamaica', 'Pina', 'Mango'],
      },
    ],
  },
];
