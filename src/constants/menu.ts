import {
  Dashboard as DashboardIcon,
  ShoppingCart as ShoppingCartIcon,
  People as PeopleIcon,
  AttachMoney as AttachMoneyIcon,
  FileUpload,
  DocumentScanner,
} from '@mui/icons-material';

import { IMenuItem } from '../types';
import { ROUTES } from './routes';

export const MENU_LIST: IMenuItem[] = [
  {
    route: ROUTES.main,
    literal: 'Documents',
    Icon: DocumentScanner,
  },
  {
    route: ROUTES.orders,
    literal: 'Upload',
    Icon: FileUpload,
  },
  {
    route: ROUTES.customers,
    literal: 'Customers',
    Icon: PeopleIcon,
  },
  {
    route: ROUTES.inventory,
    literal: 'Inventory',
    Icon: AttachMoneyIcon,
  },
];
