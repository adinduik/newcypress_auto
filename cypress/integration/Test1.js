//Sample Test

function Launch()

describe ("Cypress Automation Testing",function(){

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

}

    
it("Test Case 1", function(){

    //cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    Launch();
    cy.get('.search-keyword').type("Cucumber");
    cy.get('.search-button').click();
})

})
