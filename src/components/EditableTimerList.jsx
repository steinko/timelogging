
import React from 'react'
import EditableTimer from './EditableTimer'  // eslint-disable-line

// Displayes a list of timer containers
export default class EditableTimerList extends React.Component  {
  render () {
  
    return (
      <div>
        <EditableTimer
          title = 'Learn JavaScript'
          project = 'Cool Project'
          elapsed = '89786756'
          runningSince = {null}
          editFormOpen = {true}
        />
        <EditableTimer
          title = 'Learn Java'
          project = 'Cooler Project'
          elapsed = '9999999'
          runningSince = {null}
          editFormOpen = {false}
        />
      </div>
    )
  }
}
