/// <reference types="cypress"/>

describe('Login', () => {
    it('Login com sucesso', () => {
        // Acessa a página de login
        cy.visit('http://www.aprendendotestar.com.br/treinar-automacao.php') 
        // Digita o nome de usuário
        cy.get(':nth-child(2) > td > input').type('admin')
        // Digita a senha
        cy.get(':nth-child(4) > td > input').type('admin')
        // Digita o Nome
        cy.get(':nth-child(6) > td > input').type('Admin')
        // Clica no botão de login
        cy.get('td > .btn').click()
        // Verifica se o login foi bem-sucedido
        cy.get(':nth-child(2) > :nth-child(4)').should('have.text', 'admin')
    })

    it('Clicar em Apagar', () => {
        // Acessa a página de login
        cy.visit('http://www.aprendendotestar.com.br/treinar-automacao.php')    
        // Clicar para apagar os dados
        cy.get(':nth-child(2) > :nth-child(5)').click()
    })

    it('Login com usuário em branco', () => {
        cy.visit('http://www.aprendendotestar.com.br/treinar-automacao.php') 
        //cy.get(':nth-child(2) > td > input').type('')
        cy.get(':nth-child(4) > td > input').type('admin')
        cy.get(':nth-child(6) > td > input').type('Admin')
        cy.get('td > .btn').click()
    })

    it('Login com senha em branco', () => {
        cy.visit('http://www.aprendendotestar.com.br/treinar-automacao.php') 
        cy.get(':nth-child(2) > td > input').type('admin')
        cy.get(':nth-child(6) > td > input').type('Admin')
        cy.get('td > .btn').click()
    })
    
    it('Login com nome em branco', () => {
        cy.visit('http://www.aprendendotestar.com.br/treinar-automacao.php') 
        cy.get(':nth-child(2) > td > input').type('admin')
        cy.get(':nth-child(4) > td > input').type('admin')
        cy.get('td > .btn').click()
        cy.get(':nth-child(7) > td').should('have.text', 'Existem campos em branco.')
    })
})