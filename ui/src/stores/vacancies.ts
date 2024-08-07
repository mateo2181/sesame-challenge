import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { VacancyData } from '~/core/domain/types/index'

export const useVacanciesStore = defineStore('vacancies', () => {
  const vacancyDetail = ref<VacancyData>()

  return { vacancyDetail }
})
