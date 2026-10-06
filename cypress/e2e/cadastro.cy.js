/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';
describe('Funcionalidade: Cadastro no Hub de Leitura', () => {
    beforeEach(() => {
        cy.visit('register.html')

    });

    it('Deve fazer cadastro com sucesso, usando JS', () => {
        let email = `teste${Date.now()}@teste.com`
        cy.get('#name').type('Raquel Aguilera')
        cy.get('#email').type(email)
        cy.get('#phone').type('22974545687')
        cy.get('#password').type('teste@123')
        cy.get('#confirm-password').type('teste@123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')

    });

    it('Deve fazer cadastro com sucesso, usando faker', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('22974545687')
        cy.get('#password').type('teste@123')
        cy.get('#confirm-password').type('teste@123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')
        cy.get('#user-name').should('contain', nome)


    });



});

