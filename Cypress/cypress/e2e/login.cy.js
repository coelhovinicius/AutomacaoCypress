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



/*// <reference types="cypress"/>

describe('Login', () => {

    it('Login com sucesso', () => {
        
        cy.visit('https://www.saucedemo.com/') // Acessar a tela de login
        cy.get('#user-name').type('standard_user') // Digitar o nome de usuario
        cy.get('#password').type('secret_sauce') // Digitar senha
        cy.get('#login-button').click() // Clicar no botão em login
        /*cy.get('#swal2-title').should('have.text', 'Login realizado') // Validação
        //cy.wait(3000) // Aguardar 3 segundos
    })

    /*it('Login com senha vazia', () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user').type('vinicius@gmail.com')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('have.text', 'Senha inválida.')
        //cy.wait(3000)
    })

    it('Login com e-mail inválido', () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user').type('vinicius')
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
        //cy.wait(3000)
    })

    it('Login com senha inválida', () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user').type('vinicius@gmail.com')
        cy.get('#password').type('123')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('have.text', 'Senha inválida.')
        //cy.wait(3000)
    })
})*/