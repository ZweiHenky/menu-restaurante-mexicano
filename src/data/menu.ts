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

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  extras?: string;
  tag?: string;
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
  basePrice: '$13',
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
        'Shredded Chicken, Spanish (Red) Rice, pinto beans, lettuce, pico de gallo, mexican blend shredded cheese, cotija cheese, sour cream, and our house Cilantro Lime Ranch Dressing.',
    },
    {
      name: 'Shrimp Bowl',
      description:
        'Shrimp, White Rice, lettuce, corn, black beans, pico de gallo, mexican blend shredded cheese, cotija cheese, sour cream, and our house Cilantro Lime Ranch Dressing.',
      extraPrice: '+$3',
    },
    {
      name: 'Pollo Asado Bowl',
      description:
        'Chunks of Pollo Asado, White Rice, black beans, pico de gallo, mexican blend shredded cheese, cotija cheese, sour cream, and our house Cilantro Lime Ranch Dressing.',
      extraPrice: '+$3',
    },
    {
      name: 'Fish Bowl',
      description:
        'Strips of Fish, White Rice, black beans, pico de gallo, mexican blend shredded cheese, cotija cheese, sour cream, and our house Cilantro Lime Ranch Dressing.',
      extraPrice: '+$3',
    },
    {
      name: 'Adobada Bowl',
      description:
        'Chunks of Adobada (Marinated Pork), Spanish Rice, pinto beans, pico de gallo, mexican blend shredded cheese, cotija cheese, sour cream, and our house Cilantro Lime Ranch Dressing.',
    },
    {
      name: 'Carnitas Bowl',
      description:
        'Shredded Pork Carnitas, Spanish (Red) Rice, pinto beans, pico de gallo, Mexican blend shredded cheese, cotija cheese, sour cream, and our house Cilantro Lime Ranch Dressing.',
    },
    {
      name: 'Steak Bowl',
      description:
        'Steak Fajita + Chunks of Fajita Asada Steak, White Rice, black beans, pico de gallo, mexican blend shredded cheese, cotija cheese, sour cream, and our house Cilantro Lime Ranch Dressing.',
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
        price: '$3.00',
        tag: 'Each',
        image: tostadaTinga,
      },
      {
        name: 'Carne Asada',
        description:
          'Thinly Sliced Skirt Steak Seasoned and Charbroiled to perfection garnished with guacamole, green onions. Served with rice and beans and choice of corn or flour tortillas.',
        price: '$23.99',
        tag: 'Signature',
        image: carneAsada,
      },
      {
        name: 'Flautas De Pollo',
        description:
          'Two large flautas made with corn tortillas filled with Chicken deep fried topped with sour cream, cotija cheese, lettuce, tomatoes, served with rice and beans.',
        price: '$13.99',
      },
      {
        name: 'Huaraches',
        description:
          'A corn tortilla shaped as a sandal topped with Choice of meat, refried beans, cabbage, sour cream, and white cotija cheese.',
        price: '$15',
        image: huarache,
      },
      {
        name: 'Platillo de Tortilla de Harina de 12"',
        description:
          'A 12" flour tortilla filled with Mexican blend shredded cheese, your Choice of meat topped with lettuce, tomato, sour cream.',
        price: '$13.99',
      },
      {
        name: 'Sope',
        description:
          'A round thick corn tortilla topped with Choice of Meat, refried beans, lettuce, sour cream, and white cotija cheese.',
        price: '$5',
        image: sope,
      },
      {
        name: 'Enchiladas Rojas or Verdes',
        description:
          'Two enchiladas filled with Chicken ONLY topped with your choice of green tomatillo sauce or red mole sauce, sour cream, cotija cheese, lettuce, tomatoes, served with rice and beans.',
        price: '$13.99',
        image: enchiladas,
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
          '"Street Tacos" made out of two small corn tortillas, Choice of meat, topped with onion and Cilantro.',
        price: '$3.00',
        tag: 'Each',
        image: streetTacos,
      },
      {
        name: '3 Taco Combo',
        description:
          '3 Street Tacos, Choice of Meat, served with Spanish Rice and Refried Beans & 16oz. fountain drink.',
        price: '$12.99',
        tag: 'Combo',
        image: threeTacoCombo,
      },
      {
        name: 'Pescado / Fish Taco',
        description:
          'Made out of two regular corn tortillas, topped with tilapia fish, cabbage, pico de gallo, mayo and special sauce.',
        price: '$5.00',
        tag: 'Each',
        image: tacoPescado,
      },
      {
        name: 'Camaron / Shrimp Taco',
        description:
          'Made out of two regular corn tortillas, topped with shrimp, cabbage, pico de gallo, mayo and special sauce.',
        price: '$5.00',
        tag: 'Each',
        image: tacoCamaron,
      },
      {
        name: 'El Norteño',
        description:
          'Made out of Asada, Chorizo, Nopales (cactus) corn tortillas, topped with pico de gallo, guacamole and cotija cheese.',
        price: '$5.00',
        tag: 'Each',
      },
      {
        name: 'El Mexicano',
        description:
          'Made out of Grilled Steak corn or flour tortilla, topped with pico de gallo and cotija cheese.',
        price: '$5.00',
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
        price: '$7',
        image: tostadaCeviche,
      },
      {
        name: 'Coctel De Camaron',
        description:
          'Large tiger prawns mixed with our house special tomato juice, garnished with onions, cilantro, tomatoes, lime and avocado.',
        price: '$17',
        image: coctelCamaron,
      },
      {
        name: 'Camarones A La Diabla',
        description:
          'Large Shrimp sauteed with fresh mushrooms in a very spicy sauce (Picoso!) served with rice, beans and corn or flour tortillas.',
        price: '$19',
        tag: 'Spicy',
      },
      {
        name: 'Camarones Al Mojo De Ajo',
        description:
          'Large Shrimp sauteed with fresh mushrooms, and onions in a house made garlic sauce served with rice, beans and corn or flour tortillas.',
        price: '$19',
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
          'Grilled strips of Skirt Steak, Shrimp, Chicken, onions, bell peppers served with rice, beans. Choice of corn or flour tortillas.',
        price: '$27',
        tag: 'For two',
      },
      {
        name: 'Chicken Fajitas',
        description:
          'Grilled strips of Chicken, onions, bell peppers served with refried beans and rice. Choice of corn or flour tortillas.',
        price: '$20',
      },
      {
        name: 'Beef Fajitas',
        description:
          'Grilled strips of Skirt Steak, onions, bell peppers served with refried beans and rice. Choice of corn or flour tortillas.',
        price: '$20',
      },
      {
        name: 'Shrimp Fajitas',
        description:
          'Grilled Shrimp, onions, bell peppers served with refried beans and rice. Choice of corn or flour tortillas.',
        price: '$21',
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
        description: 'Made out of a 12" flour tortilla filled with bean and cheese.',
        price: '$7',
        extras: '+Chorizo $3 · +Sour cream $1',
      },
      {
        name: 'Veggie',
        description:
          'Made out of a 12" flour tortilla filled with White rice, black beans, Mexican blend shredded cheese, lettuce, tomato, sour cream, guacamole, pico de gallo.',
        price: '$10',
        tag: 'Veggie',
      },
      {
        name: 'Macho Burrito',
        description:
          'Made out of a 12" flour tortilla filled with Bacon, with Asada, Chorizo, grilled onions, Spanish rice, refried beans, pico de gallo, lettuce, cheese, sour cream, guacamole, and a roasted jalapeño on top.',
        price: '$15',
        tag: 'Big appetite',
        image: burritosImg,
      },
      {
        name: 'Basico',
        description:
          'Made out of a 12" flour tortilla, Choice of meat, Spanish rice, refried beans, onion and cilantro.',
        price: '$10',
      },
      {
        name: 'Supremo',
        description:
          'Made out of a 12" flour tortilla, Choice of meat, Spanish rice, refried beans, cheese, lettuce, tomato, sour cream, guacamole, onion and cilantro.',
        price: '$12',
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
        name: 'Torta',
        description:
          'A hot deli sandwich made with Mexican Telera bread, Choice of Meat, refried beans, lettuce, tomatoes, avocado, and mayo.',
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
        description: 'Flour Tortilla, Rice, Bean & Cheese.',
        price: '$7.00',
        extras: '+Chicken or Ground Beef $2.00',
      },
      {
        name: 'Kids Quesadilla',
        description: 'Flour tortilla & Cheese.',
        price: '$7.00',
        extras: '+Chicken or Ground Beef $2.00',
        image: quesadillaImg,
      },
      {
        name: 'Kids Taco (1)',
        description: 'Chicken or Ground Beef served with Rice and Beans.',
        price: '$7.00',
      },
    ],
  },
];
