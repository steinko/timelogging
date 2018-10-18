
import React from 'react'
import EditableTimer from './EditableTimer.jsx'  // eslint-disable-line

// Displayes a list of timer containers
export default class EditableTimerList extends React.Component  {
  constructor (props) {
    super(props)
    }

  render () {
    const timers = this.props.timers.map((timer) => ( // eslint-disable-line
  
        <EditableTimer // eslint-disable-line
          title =  {timer.title} // eslint-disable-line
          project = 'Cooler Project'// eslint-disable-line
          elapsed = '89786767'
          runningSince = {null}
          editFormOpen = {timer.editFormOpen}
        />

        
    ))
    return(
       <div id= 'timers'>
          {timers}
        </div>
        )
  }
}
