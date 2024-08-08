import type { SidebarItem } from "@/types";

export const SIDEBAR_MENU_ITEMS: Array<SidebarItem> = [
  {
    name: 'Administrador',
    children: [
      {
        name: 'Talento',
        icon: 'io-star-outline',
        children: [
          {
            name: 'Reclutamiento',
            link: '/vacancies',
            children: []
          }
        ]
      }
    ]
  }
];
