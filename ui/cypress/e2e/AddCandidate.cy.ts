describe('ModalAddCandidate', () => {
    beforeEach(() => {
        cy.visit('/vacancies/24899ebc-e121-46e5-95dd-3e6b1cd613ad');
        cy.contains('Añadir candidato').click();

        cy.intercept("POST", "/recruitment/v1/candidates", {
            fixture: "candidateAdded"
        }).as("postCandidate");
    });

    it('Should display validation errors when form is incomplete', () => {
        cy.get('button[type="submit"]').click();
        cy.getBySel('add-candidate-modal-error').should('exist');
    });

    it('Should submit the form when all required fields are filled and call the API', () => {
        cy.get('input[name="firstName"]').type('Lucas');
        cy.get('input[name="lastName"]').type('Rosales');
        cy.get('input[name="email"]').type('lucasr@gmail.com');
        cy.get('input[name="phone"]').type('63421212');
        cy.get('select[name="statusId"]').select('New');

        cy.get('button[type="submit"]').click();

        cy.get('@postCandidate.all').should('have.length', 1)
        cy.get('.modal').should('not.exist');
    });

    it('Should close the modal when the cancel button is clicked', () => {
        cy.get('button').contains('Cancelar').click();
        cy.get('.modal').should('not.exist');
    });
});