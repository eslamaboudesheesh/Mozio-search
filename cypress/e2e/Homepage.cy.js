/// <reference types="cypress"/>

describe("Home page", () => {
    // page run
    beforeEach(() => {
        cy.visit('/')
    })
    it("loading page in desktop Viewport", () => {
        cy.viewport(1280, 720);
        cy.url().should('contains', '/');
    });
    // header is exist
    it('check if we have header and main title ', () => {
        cy.get("[data-cy='header-check']").should('exist');
        cy.get("[data-cy='header-check']").contains('Mozio Demo');
    });
    // form is exist
    it('check if form render  ', () => {
        cy.get("[data-cy='form-container']").should('exist');
        cy.get("[data-cy='form-container'] button ").contains('Submit');
    });

    // input number is exist
    it('check if input number render  ', () => {
        cy.get("[data-cy='number-input']").should('exist');
        cy.get("[data-cy='number-input'] label ").contains('Number Of Passengers');
    });

    // Autocomplete is exist
    it('check if Intermediate Cities Autocomplete render  ', () => {
        cy.get("[data-cy='multiple-Auto']").should('exist');
        cy.get("[data-cy='multiple-Auto'] label ").contains('Intermediate Cities');
    });
    // Autocomplete is exist
    it('check if City of destination Autocomplete render  ', () => {
        cy.get("[data-cy='city-dest']").should('exist');
        cy.get("[data-cy='city-dest'] label ").contains('City of destination');
    });

    // Autocomplete is exist
    it('check if City of origin Autocomplete render  ', () => {
        cy.get("[data-cy='city-origin']").should('exist');
        cy.get("[data-cy='city-origin'] label ").contains('City of origin');
    });
    // DatePicker is exist
    it('check if date trip DatePicker render  ', () => {
        cy.get("[data-cy='date-trip']").should('exist');
        cy.get("[data-cy='date-trip'] label ").contains('Date of the trip');
    });
    // submit form 
    it('check if submit with correct data  ', () => {
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
        cy.go('back');
        cy.url().should('not.include', '/SearchResult/search');

    })
})