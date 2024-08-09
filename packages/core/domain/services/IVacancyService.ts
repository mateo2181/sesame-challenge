import { CandidatePost, CandidateUpdateStatus } from "../types/candidates";
import { AddCandidateResponse, VacancyResponse, VacancyStatusResponse } from "../types/vacancies";

export interface IVacancyService {
    getCandidates(vacancyId: string): Promise<VacancyResponse>;
    getVacancyStatus(vacancyId: string): Promise<VacancyStatusResponse>;
    addCandidate(data: CandidatePost): Promise<AddCandidateResponse>;
    updateCandidateStatus(data: CandidateUpdateStatus): Promise<AddCandidateResponse>;
}