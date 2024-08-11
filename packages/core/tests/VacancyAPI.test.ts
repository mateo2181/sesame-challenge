import { describe, it, expect, beforeEach, vi } from 'vitest';
import { VacancyService } from '../domain/services/VacancyService';
import { VacancyAPI } from "../usecases/adapters/VacancyAPI";
import { CandidatePost, CandidateUpdateStatus } from '../domain/types';

describe('VacancyAPI', () => {
  let vacancyService: VacancyService;

  beforeEach(() => {
    vacancyService = new VacancyService(VacancyAPI);
  });

  it('Should fetch vacancy candidates correctly', async () => {  
    const vacancyId = 'vacancy-1';
    const response = await vacancyService.getCandidates(vacancyId);
    expect(response.data).toHaveLength(1);
    expect(response.meta.currentPage).toBe(1);
  });

  it('Should fetch vacancy status correctly', async () => {
    const vacancyId = 'vacancy-1';
    const response = await vacancyService.getVacancyStatus(vacancyId);
    expect(response.data).toHaveLength(2);
    expect(response.meta.total).toBe(2);
  });

  it('Should add a candidate to a vacancy correctly', async () => {
    const candidateData: CandidatePost = {
      vacancyId: 'vacancy-1',
      firstName: 'Marc',
      lastName: 'Foden',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      statusId: 'status-1',
      linkedinURL: 'https://linkedin.com/in/johndoe',
    };

    const response = await vacancyService.addCandidate(candidateData);
    expect(response.data.firstName).toBe('John');
  });

  it('Should update candidate status in a vacancy correctly', async () => {
    const candidateStatusData: CandidateUpdateStatus = {
      candidateId: '1',
      firstName: 'Marc',
      lastName: 'Foden',
      vacancyId: 'vacancy-1',
      email: 'fodenmancity@gmail.com',
      statusId: 'status-2'
    };

    const response = await vacancyService.updateCandidateStatus(candidateStatusData);
    expect(response.data.statusId).toBe('status-2');
  });

});