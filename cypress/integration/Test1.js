//Sample Test

function Launch(){

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
}

describe ("Cypress Automation Testing",function(){

    
it("Test Case 1", function(){

    //cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    Launch();
    
})

it ("Test Case 2", function(){

    Launch();
    cy.get('.search-keyword').type("Cucumber");
    cy.get('.search-button').click();
})

})
