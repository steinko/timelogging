import React from 'react'
import EditableTimerList from './EditableTimerList.jsx' // eslint-disable-line
import TogableTimerForm from './TogableTimerForm.jsx'  // eslint-disable-line

import uuidv4 from 'uuid/v4'
import { Grid } from 'semantic-ui-react'
import Helper from '../../src/components/Helper.jsx'

//Parent container
export default class TimersDashboard extends React.Component {
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

  handleCreateFormSubmit = (timer) => {
    this.createTimer(timer)
    }

    createTimer = (timer) => {
      const helper = new Helper
      const t = helper.newTimer(timer)
      this.setState({ 
        timers: this.state.timers.concat(t)
      })
     }

  render () {
    return (
      <Grid centered columns = {3} >
        <Grid.Column>
          <EditableTimerList
            timers = {this.state.timers } />
          <TogableTimerForm
          onFormSubmit= { this.handleCreateFormSubmit}
            isOpen = { false } />

        </Grid.Column>
      </Grid>
    )
  }
}
