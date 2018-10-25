import React from 'react'
import EditableTimerList from './EditableTimerList.jsx' // eslint-disable-line
import TogableTimerForm from './TogableTimerForm.jsx'  // eslint-disable-line
import TimerData from './TimerData.jsx'

import uuidv4 from 'uuid/v4'
import { Grid } from 'semantic-ui-react'
import Helper from '../../src/components/Helper.jsx'

type Props = { }

type State = {  timers: Array<typeof TimerData>
             }

/** 
* Parent container
*/
export default class TimersDashboard extends React.Component <Props,State> {
  state = {
     timers : [
       { 
         title: 'Practice  squate',
         id: uuidv4() 
        },

      { 
        title:'Bake  squash' ,
        id: uuidv4()
      }
    ]  
  }


  handleCreateFormSubmit = (timer: typeof TimerData) => {
    this.createTimer(timer)
    }

    createTimer = (timer: typeof TimerData) => {
      const helper = new Helper()
      const t = helper.newTimer(timer)
      this.setState({ 
        timers: this.state.timers.concat(t)
      })
     }

     handelEditFormSubmit = (attrs: typeof TimerData) => { 
       this.updateTimer(attrs)
        }
       

      updateTimer = (attrs: typeof TimerData) => { 
        this.setState({ 
         timers: this.state.timers.map((timer) => { 
           if(timer.id === attrs.id)  { 

             return Object.assign( { }, timer,{
               title: attrs.title
            })
           } else {
             return timer
           }  
        })
      })
       }

  render () {
    return (
      <Grid centered columns = {3} >
        <Grid.Column>
          <EditableTimerList
            timers = {this.state.timers } 
            onFormSubmit= { this.handelEditFormSubmit}
          />
          <TogableTimerForm
            onFormSubmit= { this.handleCreateFormSubmit}
          />

        </Grid.Column>
      </Grid>
    )
  }
}
