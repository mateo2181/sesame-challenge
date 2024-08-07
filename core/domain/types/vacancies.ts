type VacancyBasicRelation = {
    id: string,
    companyId: string,
    name: string,
    createdAt: Date
}
 
type VacancyStatus = {
    id: string,
    name: string,
    companyId: string,
    order: number,
    createdAt: Date,
    updatedAt: Date,
    vacancyId: string
}

type Vacancy = {
    id: string,
    companyId: string,
    name: string,
    description: string,
    department: string,
    contactType: string,
    experience: string,
    createdById: string,
    status: 'open' | 'closed' | 'draft',
    openedAt: Date,
    createdAt: Date,
    updatedAt: Date,
    public: boolean,
    locationVacancy: VacancyBasicRelation,
    scheduleType: VacancyBasicRelation,
    category: VacancyBasicRelation 
}

export type VacancyData = {
    id: string,
    companyId: string,
    vacancy: Vacancy,
    vacancyId: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    type: string,
    statusId: string,
    status: VacancyStatus,
    linkedInURL: string,
    desiredSalary: string,
    startWorkDate: string,
    evaluation: number,
    web: string,
    location: string,
    hasDocument: boolean,
    comment: string,
    appliedAt: Date,
    threadId: string,
    lastComment: any,
    numComments: number,
    imageProfileURL: string,
    checklist: any,
    createdAt: Date,
    updatedAt: Date,
    employeeId: string
}

export type Metadata = {
    currentPage: number,
    lastPage: number,
    total: number,
    perPage: number
}

export type VacancyResponse = {
    data: VacancyData,
    meta: Metadata
}

export type VacancyStatusResponse = {
    data: Array<VacancyStatus>,
    meta: Metadata
}