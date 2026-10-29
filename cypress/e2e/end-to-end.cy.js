
/// <reference types="cypress" />

import { faker } from '@faker-js/faker'
import cadastroPage from '../support/pages/cadastro-page'

describe('Fluxo End-to-End: Cadastro e Login', () => {

    it('Deve cadastrar um novo usuário e realizar login com sucesso', () => {

        // 1. Gerar dados dinâmicos
        const nome = faker.person.fullName()
        const email = `raquel${Date.now()}@teste.com`
        const telefone = '22974545687'
        const senha = 'Teste@123'

        // 2. Acessar a página de cadastro
        cadastroPage.visitarPaginaCadastro()

        // 3. Preencher e enviar o cadastro
        cadastroPage.preencherCadastro(
            nome,
            email,
            telefone,
            senha,
            senha
        )

        // 4. Validar o sucesso do cadastro
        cy.url().should('include', 'dashboard')

        // 5. Acessar a página de login e autenticar
        cy.visit('login.html')
        cy.get('#email').type(email)
        cy.get('#password').type(senha)
        cy.get('#login-btn').click()

        // 6. Validar o sucesso do login
        cy.url().should('include', 'dashboard')

    })

})
