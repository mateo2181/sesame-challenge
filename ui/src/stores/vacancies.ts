import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { VacancyStatus, CandidatePost, CandidateUpdateStatus } from '@monorepo/core/dist/domain/types'
import { vacancyService } from "@monorepo/core/dist/usecases";
import type { CandidateItem, UpdateCandidateStatusForm } from '@/types';
import { mapCandidateItem } from '@/types/mapping';
import { groupBy } from '@/utils';

export const useVacanciesStore = defineStore('vacancies', () => {

  const candidates = ref<CandidateItem[]>([]);
  const vacancyStatus = ref<VacancyStatus[]>([]);
  const isLoadingStatuses = ref<boolean>(false);
  const error = ref<string>('');
  const isAddingCandidate = ref<boolean>(false);
  const errorAddingCandidate = ref<string>('');
  const errorUpdatingCandidateStatus = ref<string>('');
  const updatingStatusCandidateId = ref<string | null>(null);

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
    const { firstName, lastName, statusId, vacancyId, email, phone } = form;
    const formMapped: CandidatePost = { firstName, lastName, statusId, vacancyId };

    if(email) formMapped['email'] = email;
    if(phone) formMapped['phone'] = phone;

    errorAddingCandidate.value = '';
    isAddingCandidate.value = true;
    try {
      const res = await vacancyService.addCandidate(formMapped);
      candidates.value.push(mapCandidateItem(res.data));
    } catch (err) {
      errorAddingCandidate.value = 'Error adding candidate';
    } finally {
      isAddingCandidate.value = false;
    }
  }

  async function updateStatus(form: CandidateUpdateStatus) {
    errorUpdatingCandidateStatus.value = '';
    updatingStatusCandidateId.value = form.candidateId;
    try {
      await vacancyService.updateCandidateStatus(form);
    } catch (err) {
      errorUpdatingCandidateStatus.value = 'Error updating candidate status';
    } finally {
      updatingStatusCandidateId.value = null;
    }
  }

  function updateCandidateStatus({ newStatusId, vacancyId, candidate }: UpdateCandidateStatusForm) {
    candidates.value = candidates.value.map(c => ({
      ...c,
      statusId: c.id === candidate.id ? newStatusId : c.statusId
    }))
    const { id, firstName, lastName, email } = candidate;
    const formUpdateCandidateStatus = {
      candidateId: id,
      firstName,
      lastName,
      email,
      statusId: newStatusId,
      vacancyId
    };
    updateStatus(formUpdateCandidateStatus);

  }

  return {
    candidates,
    vacancyStatus,
    isLoadingStatuses,
    candidatesByStatus,
    isAddingCandidate,
    errorAddingCandidate,
    updatingStatusCandidateId,
    getCandidates,
    getStatusVacancy,
    addCandidate,
    updateCandidateStatus
  }
})
