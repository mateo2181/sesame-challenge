export type SidebarItem = {
    name: string,
    children: Array<SidebarItem>,
    icon?: string,
    link?: string,
}

export type CandidateItem = {
    id: string,
    statusId: string,
    firstName: string,
    lastName: string,
    updatedAt: Date,
    creatorEmployee?: string
    email?: string,
}

export type CandidatesByStatus = {[key: string]: Array<CandidateItem>}
