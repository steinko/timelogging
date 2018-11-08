describe('API testing', () => { 
   beforeEach( async ()=> {
       
       timers = await loadTimers()
          .its('body')
          .each(timer => cy.request('DELETE',`timers/${timer.id }` ))
          date =  await fs.readFile('../fixtures/timers.json')
          
    })


    it('should lenght 2', () => { 
        
        cy.request('timers').its('body').should('length', 0)
          
    })

    it('should store a timer object', () => { 
        const timer = { 
                  id: '15228f90-6a34-4672-954b-357012f74ed0' ,
                  title: 'stored obejct'
              }
        
        cy.request('POST', 'timers', timer)
           .then( respons => { 
                 expect(respons.status).to.eq(201)
            })

        cy.request('timers')
        .its('body')
        .then(elements=> expect(elements[0].id).to.eq(timer.id))
    })
})