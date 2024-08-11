import { http, HttpResponse } from 'msw';
import { VacancyResponse, VacancyStatusResponse, AddCandidateResponse } from '../../domain/types';

const BASE_URL = 'https://api-test.sesametime.com';

const VACANCY = {
    id: 'vacancy-1',
    companyId: '123',
    name: 'Software Engineer',
    description: 'Job description',
    department: 'Engineering',
    contactType: 'Full-time',
    experience: 'Mid-level',
    createdById: 'user-1',
    status: 'open' as const,
    openedAt: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
    public: true,
    locationVacancy: {
      id: 'loc-1',
      companyId: '123',
      name: 'Málaga',
      createdAt: new Date(),
    },
    scheduleType: {
      id: 'sched-1',
      companyId: '123',
      name: 'Schedule 1',
      createdAt: new Date(),
    },
    category: {
      id: 'cat-1',
      companyId: '123',
      name: 'Category 1',
      createdAt: new Date(),
    }
};

export const handlers = [
  // Mock GET /vacancies/:id/candidates
  http.get(`${BASE_URL}/recruitment/v1/vacancies/:vacancyId/candidates`, () => {
    const mockResponse: VacancyResponse = {
        data: [
          {
            id: '1',
            companyId: '123',
            vacancyId: 'vacancy-1',
            vacancy: VACANCY,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            phone: '123-456-7890',
            type: 'internal',
            statusId: 'status-1',
            status: {
              id: 'status-1',
              name: 'New',
              companyId: '123',
              order: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
              vacancyId: 'vacancy-1'
            },
            linkedInURL: 'https://linkedin.com/in/johndoe',
            desiredSalary: '50000',
            startWorkDate: '2023-09-01',
            evaluation: 4,
            web: 'https://example.com',
            location: 'Málaga',
            hasDocument: true,
            comment: '',
            appliedAt: new Date(),
            threadId: 'thread-1',
            lastComment: null,
            numComments: 0,
            imageProfileURL: 'https://example.com/profile.jpg',
            checklist: null,
            createdAt: new Date(),
            updatedAt: new Date(),
            employeeId: 'emp-1',
            creatorEmployee: 'user-1'
          }
        ],
        meta: {
          currentPage: 1,
          lastPage: 1,
          total: 1,
          perPage: 10
        }
      };
    return HttpResponse.json(mockResponse);
  }),

  // Mock GET /candidate-status/:vacancyId
  http.get(`${BASE_URL}/recruitment/v1/candidate-status/:vacancyId`, () => {
    const mockVacancyStatusResponse: VacancyStatusResponse = {
        data: [
          {
            id: 'status-1',
            name: 'New',
            companyId: '123',
            order: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
            vacancyId: 'vacancy-1'
          },
          {
            id: 'status-2',
            name: 'Accepted',
            companyId: '123',
            order: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
            vacancyId: 'vacancy-1'
          }
        ],
        meta: {
          currentPage: 1,
          lastPage: 1,
          total: 2,
          perPage: 10
        }
      };
    return HttpResponse.json(mockVacancyStatusResponse);
  }),

  // Mock POST /candidates
  http.post(`${BASE_URL}/recruitment/v1/candidates`, () => {
    const candidateData = {
        vacancyId: 'vacancy-1',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        type: 'internal',
        statusId: 'status-1',
        linkedInURL: 'https://linkedin.com/in/johndoe',
        desiredSalary: '50000',
        startWorkDate: '2023-09-01',
        evaluation: 4,
        web: 'https://example.com',
        location: 'Málaga',
        hasDocument: true,
        comment: 'Great candidate'
      };
  
      const mockAddCandidateResponse: AddCandidateResponse = {
        data: {
          ...candidateData,
          id: '1',
          companyId: '123',
          vacancy: VACANCY,
          status: {
            id: 'status-1',
            name: 'New',
            companyId: '123',
            order: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
            vacancyId: 'vacancy-1'
          },
          appliedAt: new Date(),
          threadId: 'thread-1',
          lastComment: null,
          numComments: 0,
          imageProfileURL: 'https://example.com/profile.jpg',
          checklist: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          employeeId: 'emp-1',
          creatorEmployee: 'user-1'
        },
        meta: {
          currentPage: 1,
          lastPage: 1,
          total: 1,
          perPage: 10
        }
      };
      return HttpResponse.json(mockAddCandidateResponse);
  }),

  // Mock PUT /candidates/:candidateId
  http.put(`${BASE_URL}/recruitment/v1/candidates/:candidateId`, () => {
    const candidateData = {
        vacancyId: 'vacancy-1',
        firstName: 'Marc',
        lastName: 'Foden',
        email: 'fodenmancity@gmail.com',
        phone: '123-456-7890',
        type: 'internal',
        statusId: 'status-2',
        linkedInURL: 'https://linkedin.com/in/johndoe',
        desiredSalary: '50000',
        startWorkDate: '2023-09-01',
        evaluation: 4,
        web: 'https://example.com',
        location: 'Málaga',
        hasDocument: true,
        comment: 'Great candidate'
      };
  
      const mockAddCandidateResponse: AddCandidateResponse = {
        data: {
          ...candidateData,
          id: '1',
          companyId: '123',
          vacancy: VACANCY,
          status: {
            id: 'status-2',
            name: 'Accepted',
            companyId: '123',
            order: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
            vacancyId: 'vacancy-1'
          },
          appliedAt: new Date(),
          threadId: 'thread-1',
          lastComment: null,
          numComments: 0,
          imageProfileURL: 'https://example.com/profile.jpg',
          checklist: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          employeeId: 'emp-1',
          creatorEmployee: 'user-1'
        },
        meta: {
          currentPage: 1,
          lastPage: 1,
          total: 1,
          perPage: 10
        }
      };
      return HttpResponse.json(mockAddCandidateResponse);
  }),
];