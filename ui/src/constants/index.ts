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
            link: '/vacancies/24899ebc-e121-46e5-95dd-3e6b1cd613ad',
            children: []
          }
        ]
      }
    ]
  }
];

export const VACANCY_STATUS_DATA: { [key: string]: { color: string, icon: string } } = {
  'New': {
    color: '#22C55E',
    icon: 'icon-inbox'
  },
  'Accepted': {
    color: '#14B8A6',
    icon: 'icon-user'
  },
  'Interview': {
    color: '#14B8A6',
    icon: 'icon-user'
  },
  'Selected': {
    color: '#3B82F6',
    icon: 'icon-confetti'
  },
  'Discarded': {
    color: '#ED6F6F',
    icon: 'icon-ban'
  },
  'default': {
    color: '#3B82F6',
    icon: 'icon-inbox'
  },
};

export const getVacancyStatusData = (key: string): { color: string, icon: string } => {
  return VACANCY_STATUS_DATA[key] ?? VACANCY_STATUS_DATA['default']
};
