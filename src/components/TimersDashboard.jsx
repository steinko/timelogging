import React from 'react'
import EditableTimerList from './EditableTimerList' // eslint-disable-line
import TogableTimerForm from './TogableTimerForm'  // eslint-disable-line
import { Grid } from 'semantic-ui-react'

//Parent container
export default class TimersDashboard extends React.Component {
  render () {
    return (
      <Grid centered columns = {3} >
        <Grid.Column>
          <EditableTimerList />
          <TogableTimerForm
            isOpen = { true } />

        </Grid.Column>
      </Grid>
    )
  }
}
