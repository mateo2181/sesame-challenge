# Sesame Challenge
The challenge was solved using hexagonal architecture to encapsulate all the business logic in one place providing more maintainability and separation between domain, insfrastructure (usecases) and presentation.

## Assumptions
- Since the Authentication was not implemented, the token was added as an environment variable and stored in the local storage to be used on the Axios Client (``` packages/core/usecases/adapters/clientApi.ts```).
- When a new candidate is added, we use the ```vacancyId``` provided on the challenge description.
- ```creatorEmployee``` was hardcoded on the candidates array for challenge purposes since the API is returning always ```null``` and I want to show that data on the Candidate cards.
- Route ```vacancies/24899ebc-e121-46e5-95dd-3e6b1cd613ad``` was hardcoded to use only that vacancy as part of the challenge.


## Project structure

- `packages/core/domain`: business logic where we have ports (interfaces) and services.
- `packages/core/usecases`: We create the adapters that allow the application to access external services such as databases, APIs, etc. In our case, we will consume the API https://api-test.sesametime.com.
- `ui`: contains the presentation layer. Technical details:
    - Implemented with Vue 3.
    - Using Pinia as state management.
    - TailwindCSS and custom components for styling.
    - Unit tests with Vitest.
    - Integration tests with Cypress.


## 🚀 How to run the App
1. Install dependencies and build the packages
```console
npm install
npm run build
```
2. **OPTIONAL**. In case of changes in the packages it is possible to run ```npm run build:watch``` to compile the code instantly after the updates. 

#### Move to the ui folder:
1. Install dependencies
```console
npm install
```
2. Create the ```.env``` file using ```.env.template``` and add the token to get the data from the API.
3. Start the development server on `http://localhost:5173`
```console
npm run dev
```


## 🧪 How to run the Tests
### Move to the packages/core folder
- Run tests  
```console
npm run test
```
### Vue project (move to the ui folder)
```console
npm run test:unit
```
- Integration tests (API calls were intercepted using fixtures to mock the responses.)
```console
npm run test:e2e  // Headless mode
npm run test:e2e:dev
```


## 💪 Possible improvements
- Implement a new route ```/vacancies``` consuming the GET ```/recruitment/v1/vacancies``` endpoint to list all the vacancies (not implementes since is not part of the challenge).
- Implement SearchCandidate inside Vacantes Tab.
- Implement Candidatos Tab.
- Implement Update Candidate View to allow edition of firstname, lastname, email, etc.
- Improve errors handling and ui validations.
- Add a Custom Button component.
- Add translations using i18n library (https://vue-i18n.intlify.dev).
- Add more unit tests.


## Author
Mateo Merlo