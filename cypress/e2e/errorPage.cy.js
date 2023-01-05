/// <reference types="cypress"/>

describe("Result page", () => {
    // page run

    it("loading page in desktop Viewport", () => {
        cy.visit('/')
        cy.viewport(1280, 720);
        cy.url().should('contains', '/');
    });

    it('check if change wrong Url error page exist  ', () => {
        cy.visit('/404')
        cy.get("[data-cy='error-page']").should('exist');
        cy.get("[data-cy='error-page']").should('contain', "Sorry, an unexpected error has occurred");
        cy.go('back');
    })

})