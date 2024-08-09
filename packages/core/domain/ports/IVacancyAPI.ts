import { CandidatePost, CandidateUpdateStatus } from "../types/candidates";
import { AddCandidateResponse, VacancyResponse, VacancyStatusResponse } from "../types/vacancies";

export interface IVacancyAPI {
    getVacancyCandidates(vacancyId: string): Promise<VacancyResponse>;
    getVacancyStatus(vacancyId: string): Promise<VacancyStatusResponse>;
    addCandidateToVacancy(data: CandidatePost): Promise<AddCandidateResponse>;
    updateCandidateStatusVacancy(data: CandidateUpdateStatus): Promise<AddCandidateResponse>;
}