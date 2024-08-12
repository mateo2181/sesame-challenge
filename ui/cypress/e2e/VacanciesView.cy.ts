describe('VacanciesView', () => {
    beforeEach(() => {
        cy.visit('/vacancies/24899ebc-e121-46e5-95dd-3e6b1cd613ad');

        cy.intercept("GET", "/recruitment/v1/vacancies/24899ebc-e121-46e5-95dd-3e6b1cd613ad/candidates", {
            fixture: "candidates"
        }).as("getVacancyCandidates");
        cy.intercept("GET", "/recruitment/v1/candidate-status/24899ebc-e121-46e5-95dd-3e6b1cd613ad", {
            fixture: "vacanciesStatuses"
        }).as("getVacancyStatuses");
    });

    it('Should display the header with the correct title', () => {
        cy.get('h1').should('contain', 'Reclutamiento');
    });

    it('Should display the VacanciesTab with the columns for each vacancy status', () => {
        cy.wait(['@getVacancyCandidates', '@getVacancyStatuses']);
        cy.getBySel('board-column').should('have.length', 5);
    });

    it('Should display the VacanciesTab with the candidates cards inside each column status', () => {
        cy.wait(['@getVacancyCandidates', '@getVacancyStatuses']);
        cy.getBySel('board-column').eq(0).children('[data-test="board-column-card"]').should('have.length', 3);
        cy.getBySel('board-column').eq(1).children('[data-test="board-column-card"]').should('have.length', 1);
        cy.getBySel('board-column').eq(2).children('[data-test="board-column-card"]').should('have.length', 2);
        cy.getBySel('board-column').eq(3).children('[data-test="board-column-card"]').should('have.length', 4);
        cy.getBySel('board-column').eq(4).children('[data-test="board-column-card"]').should('have.length', 1);
    });

});