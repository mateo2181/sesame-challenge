import { IVacancyAPI } from "../ports/IVacancyAPI";
import { CandidatePost, CandidateUpdateStatus } from "../types/candidates";
import { IVacancyService } from "./IVacancyService";

export class VacancyService implements IVacancyService {

    vacancyAPI: IVacancyAPI;

    constructor(vacancyAPI: IVacancyAPI) {
        this.vacancyAPI = vacancyAPI;
    }

    async getCandidates(vacancyId: string) {
        const response = await this.vacancyAPI.getVacancyCandidates(vacancyId);
        return response;
    }

    async getVacancyStatus(vacancyId: string) {
        const response = await this.vacancyAPI.getVacancyStatus(vacancyId);
        return response;
    }

    async addCandidate(data: CandidatePost) {
        return this.vacancyAPI.addCandidateToVacancy(data);
    }

    async updateCandidateStatus(data: CandidateUpdateStatus) {
        const response = await this.vacancyAPI.updateCandidateStatusVacancy(data);
        return response;
    }
}
