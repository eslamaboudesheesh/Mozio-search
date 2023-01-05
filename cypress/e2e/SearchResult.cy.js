/// <reference types="cypress"/>

describe("Home page", () => {
    // page run

    it("loading page in desktop Viewport", () => {
        cy.visit('/')
        cy.viewport(1280, 720);
        cy.url().should('contains', '/');
    });

    // submit form 
    it('check if submit with correct data  ', () => {
        cy.visit('/')
        cy.window().then((win) => {
            win.sessionStorage.clear()
        })
        cy.get("[data-cy='city-origin']").should('exist');
        cy.get("[data-cy='city-origin']").click();
        cy.get("[data-cy='city-origin']").type("Paris")
        cy.contains("Paris").then((option) => {
            option[0].click();
        })
        cy.get("[data-cy='city-dest']").should('exist');
        cy.get("[data-cy='city-dest']").click();
        cy.get("[data-cy='city-dest']").type("Lyon")
        cy.contains("Lyon").then((option) => {
            option[0].click();
        });

        cy.get("[data-cy='multiple-Auto']").should('exist');
        cy.get("[data-cy='multiple-Auto']").click();
        cy.get("[data-cy='multiple-Auto']").type("Lyon")
        cy.contains("Lyon").then((option) => {
            option[0].click();
        });
        cy.get("[data-cy='multiple-Auto']").type("Paris")
        cy.contains("Paris").then((option) => {
            option[0].click();
        });

        cy.get("[data-cy='date-trip']").should('exist');
        cy.get("[data-cy='date-trip']").click();
        cy.get('[data-testid=CalendarIcon]').click();
        cy.get('[data-testid=ArrowRightIcon]').click();
        cy.contains("11").click();

        cy.get("[data-cy='number-input']").should('exist');
        cy.get("[data-cy='number-input']").click();
        cy.get("[data-cy='number-input']").type(2)

        cy.contains("Submit").click();
        cy.url().should('include', '/SearchResult/search');


    })

    it('check if result page data  visible', () => {
        cy.url().should('include', '/SearchResult/search/')
        cy.get("[data-cy='result-page']").should('exist');
        cy.get("[data-cy='data-loader']").should('exist');
        cy.get("[data-cy='data-loader']").should('not.exist');
    })

    it('check if card data  visible', () => {
        cy.url().should('include', '/SearchResult/search/')
        cy.get("[data-cy='card-data']").should('exist');
        cy.get("[data-cy='card-data']").should('contain', 'Driving Distance');
        cy.get("[data-cy='card-img']").should('be.visible')
            .and('have.prop', 'naturalWidth')
            .should('be.greaterThan', 0);
        cy.get("[data-cy='dest-km']").should('contain', '391.5 K.M');
        cy.get("[data-cy='dest-route']").should('contain', 'From Paris to Lyon');

    })
})