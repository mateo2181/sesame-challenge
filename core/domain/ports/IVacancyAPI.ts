import { CandidatePost, CandidateUpdateStatus } from "../types/candidates";
import { VacancyResponse, VacancyStatusResponse } from "../types/vacancies";

export interface IVacancyAPI {
    getVacancyCandidates(vacancyId: string): Promise<VacancyResponse>;
    getVacancyStatus(vacancyId: string): Promise<VacancyStatusResponse>;
    addCandidateToVacancy(data: CandidatePost): Promise<VacancyResponse>;
    updateCandidateStatusVacancy(data: CandidateUpdateStatus): Promise<VacancyResponse>;
}