import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { VacancyStatus, CandidatePost } from '@monorepo/core/dist/domain/types'
import { vacancyService } from "@monorepo/core/dist/usecases";
import type { CandidateItem } from '@/types';
import { mapCandidateItem } from '@/types/mapping';
import { groupBy } from '@/utils';

export const useVacanciesStore = defineStore('vacancies', () => {

  const token = import.meta.env.VITE_TOKEN || '';
  localStorage.setItem('token', token);

  const candidates = ref<CandidateItem[]>([]);
  const vacancyStatus = ref<VacancyStatus[]>([]);
  const isLoadingStatuses = ref<boolean>(false);
  const error = ref<string>('');
  const isAddingCandidate = ref<boolean>(false);
  const errorAddingCandidate = ref<string>('');

  const candidatesByStatus = computed(() => groupBy(candidates.value, 'statusId'));

  async function getCandidates(vacancyId: string) {
    error.value = '';
    try {
      const res = await vacancyService.getCandidates(vacancyId);
      candidates.value = res.data.map(item => mapCandidateItem(item));
    } catch (err) {
      error.value = 'Error fetching data';
    }
  }

  async function getStatusVacancy(vacancyId: string) {
    error.value = '';
    isLoadingStatuses.value = true
    try {
      const res = await vacancyService.getVacancyStatus(vacancyId);
      vacancyStatus.value = res.data;
    } catch (err) {
      error.value = 'Error fetching data';
    } finally {
      isLoadingStatuses.value = false;
    }
  }

  async function addCandidate(form: CandidatePost) {
    errorAddingCandidate.value = '';
    isAddingCandidate.value = true;
    try {
      const res = await vacancyService.addCandidate(form);
      candidates.value.push(mapCandidateItem(res.data));
    } catch (err) {
      errorAddingCandidate.value = 'Error adding candidate';
    } finally {
      isAddingCandidate.value = false;
    }
  }

  return { candidates, vacancyStatus, isLoadingStatuses, candidatesByStatus, isAddingCandidate, errorAddingCandidate, getCandidates, getStatusVacancy, addCandidate }
})
