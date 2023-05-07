import { IconBooks, IconUserCircle } from '@tabler/icons-react';

export type MenuItem = {
  label: string;
  link: string;
  Icon: React.ComponentType<{ className?: string; stroke?: number }>;
};

export const SideMenus: MenuItem[] = [
  { link: '/customers', label: '顧客管理', Icon: IconUserCircle },
  { link: '/books', label: '書籍管理', Icon: IconBooks },
];
