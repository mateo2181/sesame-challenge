import type { VacancyData } from '@monorepo/core/dist/domain/types'
import type { CandidateItem } from '@/types'

const mapCandidateItem = (item: VacancyData): CandidateItem => {
    const { id, firstName, lastName, email, statusId, updatedAt, creatorEmployee } = item;
    return {
        id,
        firstName,
        lastName,
        email,
        statusId,
        updatedAt,
        creatorEmployee: 'ATS' // Check Assumptions on README.md.
    }
}

export {
    mapCandidateItem
}