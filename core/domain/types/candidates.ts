export type CandidatePost = {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    vacancyId: string,
    statusId: string
    linkedinURL: string,
    desiredSalary: string,
    startWorkDate: string,
    web: string,
    location: string
}

export type CandidateUpdateStatus = {
    candidateId: string,
    firstName: string,
    lastName: string,
    vacancyId: string,
    statusId: string
}