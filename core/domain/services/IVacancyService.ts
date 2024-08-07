import { CandidatePost, CandidateUpdateStatus } from "../types/candidates";
import { VacancyResponse, VacancyStatusResponse } from "../types/vacancies";

export interface IVacancyService {
    getCandidates(vacancyId: string): Promise<VacancyResponse>;
    getVacancyStatus(vacancyId: string): Promise<VacancyStatusResponse>;
    addCandidate(data: CandidatePost): Promise<VacancyResponse>;
    updateCandidateStatus(data: CandidateUpdateStatus): Promise<VacancyResponse>;
}