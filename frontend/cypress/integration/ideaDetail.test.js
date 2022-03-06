/// <reference types="cypress" />

const baseURL = 'http://localhost:3000';

describe('User can log in', () => {
    // beforeEach(() => {
    //     cy.visit(`${baseURL}/login`);
    // });

    it('User can click on login button', () => {
        cy.request(`${baseURL}/login`)
    });

    it('User can be redirected to main page after loggin in', () => {

    });
});