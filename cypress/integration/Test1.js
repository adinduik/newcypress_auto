//Sample Test



describe ("Cypress Automation Testing",function(){

    
it("Test Case 1", function(){

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    
    cy.get('.search-keyword').type("Cucumber");
    cy.get('.search-button').click();
})