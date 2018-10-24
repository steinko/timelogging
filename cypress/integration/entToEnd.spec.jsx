describe('End to end test for Timer', () => {

  before(() => {

   cy.visit('http://localhost:3000')
  })

  context('No existing timers', () => {

    xit('should add a new timer', () => {
      // click on  the create timer button 
      cy.get('#Create')
        .click()
     //A Timerform should be displayed
     cy.get('#timerForm')
     
      // check that a empty titel and project fields and a create button displa is displayed
      .find('#titleField').as('TitleField')
      .contains('')
      // Enter the Title 
      cy.get('@TitleField')
        .type('Refine Squawk')
      // click on the create timer button in the timer form
      cy.get("Button[color= 'blue' ]")
        .click()
      cy.get('Timer')
        .contains('Refine Squawk')
    })

  })

  context('Timers exists', () => {
    xit('should update the title of a timer', () => { 
      //select a timer
      cy.get('Timer').first().as('TimerToUpdate')
      
      cy.get('@TimerToUpdate')
        .find('Button[icon = "Edit" ]')
        .click()

      cy.get('TimerForm')
      .find('Label')
      .contains('Title')
      .first('Input')
      .contains('Practice  squate').as('Title Field')

      cy.get('@Title Field')
      .find("Button[color= 'blue' ]")
      .contains('Update').as('StartButton')

      //click on the edit button
      cy.get('@Title Field').type('Chaned title') 
      cy.get('@Title Field').contains('Changed title')    
      cy.get('@StartButton').click()
      cy.get('Timer')
      .first()
      .find("Header[color= 'blue' ]")
      .find('Lable')
      .contains('Title')
      .closest('Input')
      .contains('Practice  squate') 
      cy.get('TitleField').first('Button').contains('Edit').as('EditButton')
      cy.get('TitleField')
      .type('Changed title text')
      // check that the changed text is displayed
      .contains('Changed title text')
      // click on the edit button
      cy.get('@EditButton')
      .click()
      // check that the changed title text is correct in timerslist
      cy.get('@TimerToUpdate')
       .contains('Changed title text')
    } )

   

    
   
   
    
     
  })
})

