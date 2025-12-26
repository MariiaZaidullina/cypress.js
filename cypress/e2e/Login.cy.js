describe('Проверка авторизации', function () {
//позитив
   it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css','color','rgb(0, 85, 152)'); //цвет кнопки

        cy.get('#mail').type('german@dolnikov.ru'); //верный логин
        cy.get('#pass').type('qa_one_love1'); //верный пароль
        cy.get('#loginButton').click(); //войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //после авторизации есть фраза
        cy.get('#messageHeader').should('be.visible'); //видно надпись авторизации
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видно крестик
    })

//забыл пароль
it('забыл пароль', function () {
        cy.visit('https://login.qa.studio'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css','color','rgb(0, 85, 152)'); //цвет кнопки

        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('masha.kop@bk.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видно крестик

    })

//негатив, пароль
    it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css','color','rgb(0, 85, 152)'); //цвет кнопки

        cy.get('#mail').type('german@dolnikov.ru'); //верный логин
        cy.get('#pass').type('qa_one_love797'); //неверный пароль
        cy.get('#loginButton').click(); //войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //видно надпись ошибки
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видно крестик
    })

//негатив, логин
    it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css','color','rgb(0, 85, 152)'); //цвет кнопки

        cy.get('#mail').type('german@dolnikovay.ru'); //неверный логин
        cy.get('#pass').type('qa_one_love1'); //верный пароль
        cy.get('#loginButton').click(); //войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //видно надпись ошибки
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видно крестик
    })

//валидация 
    it('проверка валидации логина', function () {
        cy.visit('https://login.qa.studio'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css','color','rgb(0, 85, 152)'); //цвет кнопки

        cy.get('#mail').type('germandolnikov.ru'); //логин без собачки
        cy.get('#pass').type('qa_one_love1'); //верный пароль
        cy.get('#loginButton').click(); //войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //текст ошибки
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видно крестик
    })

//заглавные буквы в логине
it('Ввести логин с заглавными буквами', function () {
        cy.visit('https://login.qa.studio'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css','color','rgb(0, 85, 152)'); //цвет кнопки

        cy.get('#mail').type('GerMan@Dolnikov.ru'); //верный логин
        cy.get('#pass').type('qa_one_love1'); //верный пароль
        cy.get('#loginButton').click(); //войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //после авторизации есть фраза
        cy.get('#messageHeader').should('be.visible'); //видно надпись авторизации
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видно крестик
    })

})




