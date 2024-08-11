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
    email: string,
    creatorEmployee?: string
}

export type CandidatesByStatus = {[key: string]: Array<CandidateItem>}

export type UpdateCandidateStatusForm = {
    newStatusId: string,
    vacancyId: string,
    candidate: CandidateItem
}