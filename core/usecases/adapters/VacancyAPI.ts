import { IVacancyAPI } from "~/domain/ports/IVacancyAPI";
import { CandidatePost, CandidateUpdateStatus } from "~/domain/types/candidates";
import { VacancyResponse, VacancyStatusResponse } from "~/domain/types/vacancies";
import clientAPI from "./clientApi";

export const VacancyAPI: IVacancyAPI = ({
    getVacancyCandidates: async (vacancyId: string) => {
        const res = await clientAPI.get<VacancyResponse>(`/recruitment/v1/vacancies/${vacancyId}/candidates`);
        return res.data;
    },
    getVacancyStatus: async (vacancyId: string) => {
        const res = await clientAPI.get<VacancyStatusResponse>(`/recruitment/v1/candidate-status/${vacancyId}`);
        return res.data;
    },
    addCandidateToVacancy: async (data: CandidatePost) => {
        const res = await clientAPI.post<VacancyResponse>(`/recruitment/v1/candidates`, data);
        return res.data;
    },
    updateCandidateStatusVacancy: async (data: CandidateUpdateStatus) => {
        const { candidateId, ...body } = data;
        const res = await clientAPI.put<VacancyResponse>(`/recruitment/v1/candidates/${candidateId}`, body);
        return res.data;
    }
});