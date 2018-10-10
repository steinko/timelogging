describe('End to end test for Timer', () => {

  before(() => {

   cy.visit('http://localhost:3000')
  })

  context('No existing timers', () => {

    xit('should add a new timer', () => {
      cy.get('#Create')
        .click()    
      cy.get('Label')
      .  contains('Title')
        .type('Refine Squawk')
      cy.get("Button[color= 'blue' ]")
        .click()
      cy.get('Timer')
        .contains('Refine Squawk')
    })

  })

  context('Timers exists', () => {

    xit('Should contain  titel Learn Java', ()=> { 
      cy.contains('Learn Java')
    })

    it('Should contain project cooler project', ()=> { 
      cy.contains('Cooler Project')
    })

    xit('should contain Learn JavaScript', ()=> { 
      cy.get ('Label')
        .contains('Title')
        .next()
        .find( '[defaultValue = "Learn JavaScript" ]')
    })
   
    xit('should display the title for the Editabletimer ', () => {
      cy.get ('Label')
        .contains('Title')
        .next()
        .should('have.data','defaultValue' ,'Learn JavaScript' )
    })
     
     it('should conain time ', () => {
      cy.contains('02:29:46')
     })
  })
})

