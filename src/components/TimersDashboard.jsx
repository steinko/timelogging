import React from 'react'
import EditableTimerList from './EditableTimerList' // eslint-disable-line
import TogableTimerForm from './TogableTimerForm'  // eslint-disable-line

export default class TimersDashboard extends React.Component {
  render () {
    return (
      <div className = 'ui-three-column-centered-grid'>
        <div className = 'column'>
          <EditableTimerList />
          <TogableTimerForm
            isOpen = { true } />

        </div>
      </div>

    )
  }
}
