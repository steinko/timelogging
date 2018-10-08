describe('End to end test for Timer', () => {

  before(() => {

   cy.visit('http://localhost:3000')
  })

  context('No existing timers', () => {

    it('should add a new timer', () => {

    })

  })

  context('Timers exists', () => {

    it('Should containn  titel Learn Java', ()=> { 
      cy.contains('Learn Java')
    })

    it('Should contain project cooler project', ()=> { 
      cy.contains('Cooler Project')
    })

    xit('should contain Learn JavaScript', ()=> { 
      cy.get ('label')
        .contains('Title')
        .next()
        .find( '[defaultValue = "Learn JavaScript" ]')
    })
   
    xit('should display the title for the Editabletimer ', () => {
      cy.get ('label')
        .contains('Title')
        .next()
        .should('have.data','defaultValue' ,'Learn JavaScript' )
    })


      it('should conain a button cansel ', () => {
      cy.get('Button').contains('Cancel')
     })

      it('should conain a button cansel ', () => {
      cy.get('Button').contains('Start')
     })


     it('should conain a button Create ', () => {
       cy.get('Button').contains('Create')
     })

     it('should conain a button Update ', () => {
      cy.get('Button').contains('Update')
     })
     it('should conain a button Update ', () => {
      cy.contains('02:29:46')
     })
  })
})

