export type SidebarItem = {
    name: string,
    children: Array<SidebarItem>,
    icon?: string,
    link?: string,
}

export type CandidateItem = {
    id: string,
    firstName: string,
    lastName: string,
    email?: string
}