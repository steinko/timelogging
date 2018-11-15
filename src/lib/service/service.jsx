// @flow
import * as React from 'react'
import TimerData from '../../components/TimerData.jsx'
import StartData from '../../components/StartData.jsx'
import uuidv4 from 'uuid/v4'


/**
 * Services that communicate with the servere
 */
type Props = { }
export default class Client extends React.Component<Props> {
 
  render() { return null }

  loadTimersFromFile = async () => {
         const response =  await fetch('../fixtures/timers.json') 
          let data = await response.json()
       return data

    }
    


 /**
 * Service that load timer data from servere
 */
  loadTimers =  async () => {
       let response =  await fetch('http://localhost:3030/timers')

       let data = await response.json()
       console.log(data)
       return data
  }


  /**
 * Service that update timer data to the  servere
 */
    insertTimer =  async ( timer: typeof TimerData) => {
      let response = await fetch('http://localhost:3030/timers', {
                 method: "post",
                 headers: {
                   "Content-Type": "application/json; charset=utf-8"
                  },
                 body: JSON.stringify(timer)
                 })
     let data = await response.json()
     return data
  }  


 /**
 * Service that starts  a timer on the  servere
 */
    startTimer = (start: typeof  StartData) => { 
     return fetch('http://localhost/3030/timers/start', {
                 method: "POST",
                 headers: {
                   "Content-Type": "application/json; charset=utf-8"
                  },
                body: JSON.stringify(start)
               })
   }

/**
 * Service that update  a timer on the  servere
 */
   updateTimer =  async (timerData: typeof  TimerData) => { 
     let response = await fetch('http://localhost:3030/timer', {
                 method: "put",
                 headers: {
                   "Content-Type": "application/json; charset=utf-8"
                  },
                body: JSON.stringify(timerData)
               })
      let data = await response.json()
      return data
   }

   /**
 * Service that deletes a timer from the  servere
 */
   deletTimer = (id: typeof  uuidv4) => { 
     return fetch('http://localhost/3030/timers/', {
                 method: "DELETE",
                 headers: {
                   "Content-Type": "application/json; charset=utf-8"
                  },
                body: JSON.stringify(id)
               })
     }
    }