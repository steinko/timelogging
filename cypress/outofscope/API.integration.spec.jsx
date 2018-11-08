//import Client from '../../src/lib/service/service.jsx'
describe( 'Integration tests of services that all the server', () => {
// const client = new Client()
  //beforeEach( async ()=> {       
   //  const timers = await client.loadTimers()
   //  timers.map( timer => 
   //     { client.deleteTimer(timer)
  //      })  
  //  const respons =  client.loadTimersFromFile()
   //  respons.map(timer =>  {client.insertTimer(timer.json())} )
   //})
    
  xit('should insert a timer to the database', async () => { 

        // const timer = { id: "77d3e1a5-18d1-4341-a4d2-6756427f511f" ,
          //               title: "integrasjons test av  en kule title"
          //             }

           //const response =  await client.insertTimer(timer) 
           //expect(response.status).to.eq(201)
          // const timers = await client.loadTimers()
           //const foundTimer = timers.find(element => 
              //  { return element.id === timer.id }) 
          // expect(foundTimer.json()).to.equal(timer)
    })

  xit('should update a timers tile in the database', async () => { 

         const timer = { id: "77d3e1a5-18d1-4341-a4d2-6756427f511f" ,
                         title: "oppdater med en enda kule title"
                 }

          // const response =  await client.updateTimer(timer) 
           expect(response.status).to.eq(201)
          // const timers =  await client.loadTimers()
           const foundTimer = timers.find(element => 
                { return element.id === timer.id }) 
           expect(foundTimer.json()).to.equal(timer)
    })



    xit('should start a timer in the database', async () => { 

         const startData = { id: "77d3e1a5-18d1-4341-a4d2-6756427f511f" ,
                         runningSince: "22:23:21"
                 }

           const response =  await client.startTimer(startData) 
           expect(response.status).to.eq(201)
         //  const timers = await client.loadTimers()
           const foundTimer = timers.find(element => 
                { return element.id === startData.id }) 

           expect(foundTimer.json().runningSince).to.equal(startData.runningSince)
    })

})
