import {
  IcClaim,
  IcCustomerManagement,
  IcDashboard,
  IcHistory,
  IcOperator,
  IcServiceManagement,
  IcStatistics,
} from '@assets/icon';
import { IMenuVO } from '@models';

export const menus: IMenuVO[] = [
  {
    key: '000000',
    title: '대시보드',
    icon: IcDashboard,
    navigateUrl: '/',
  },
  {
    key: '010000',
    title: '회원관리',
    icon: IcCustomerManagement,
    navigateUrl: '/partners',
  },
  {
    key: '020000',
    title: '서비스관리',
    icon: IcServiceManagement,
    navigateUrl: '/service',
  },
  {
    key: '030000',
    title: '내역조회',
    icon: IcHistory,
    navigateUrl: '/history',
  },
  {
    key: '040000',
    title: '통계정산',
    icon: IcStatistics,
    navigateUrl: '/statistics',
  },
  {
    key: '050000',
    title: '청구관리',
    icon: IcClaim,
    navigateUrl: '/claim',
  },
  {
    key: '060000',
    title: '운영자관리',
    icon: IcOperator,
    navigateUrl: '/admin',
  },
];
