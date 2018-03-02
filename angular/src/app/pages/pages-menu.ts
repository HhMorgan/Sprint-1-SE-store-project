import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },{
    title: 'FEATURES',
    group: true,
  },{
    title: 'Store',
    icon: 'nb-tables',
    link: '/pages/store',
  },{
    title: 'Cart',
    icon: 'nb-coffee-maker',
    link: '/pages/cart',
  }
];
