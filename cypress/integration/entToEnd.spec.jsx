describe(('End to end test for Timer'), () => {
 // before(() => {
//    cy.visit(/')
//  })

  context('No existing timers', () => {
    it('should add a new timer', () => {

    })
  })
  context('Tmers exists', () => {
   
    xit('should display the title for the Editabletimer ', () => {
      cy.get('input').should('have.data','defaultValue' ,'Learn JavaScript' )// eslint-disable-line
    })
     xit('should conain a Card in  Editabletimer ', () => {
      cy.get('Card').should('to.exist')// eslint-disable-line
    })
     xit('should conain a Card in  Editabletimer ', () => {
      cy.get('label').conatins('Title')// eslint-disable-line
    })
  })
})
