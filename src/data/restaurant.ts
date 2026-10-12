export interface MeatOption {
  label: string;
  value: string;
}

export const restaurant = {
  name: "Maria's Taqueria",
  slogan: 'Authentic Mexican Food',
  services: ['Restaurant & Catering', 'Dine-In & Orders To Go'],
  address: '1427 N. Argonne Rd, Spokane Valley, WA 99212',
  street: '1427 N. Argonne Rd',
  city: 'Spokane Valley, WA 99212',
  phone: '(509) 816-2348',
  phoneHref: 'tel:+15098162348',
  notice: 'CALL AHEAD FOR ORDERS TO GO',
  notasGenerales: [
    'First basket of warm chips and house salsa is complimentary. Additional basket: $2.99',
    'Extra salsa: $1.00',
  ],
  instagram: '@mariastacoccomer',
} as const;

export const meatOptions = {
  general: [
    { label: 'Asada', value: 'Beef Steak' },
    { label: 'Carne Molida', value: 'Ground Beef' },
    { label: 'Carnitas', value: 'Pork' },
    { label: 'Adobada', value: 'Marinated Pork' },
    { label: 'Pollo', value: 'Chicken' },
    { label: 'Chorizo', value: 'Ground Mexican Sausage' },
    { label: 'Buche', value: 'Pork' },
  ],
  burritos: [
    { label: 'Asada', value: 'Beef Steak' },
    { label: 'Carnitas', value: 'Pork' },
    { label: 'Adobada', value: 'Marinated Pork' },
    { label: 'Pollo', value: 'Chicken' },
    { label: 'Chorizo', value: 'Ground Mexican Sausage' },
    { label: 'Lengua', value: '+$3' },
  ],
} as const satisfies { general: MeatOption[]; burritos: MeatOption[] };
