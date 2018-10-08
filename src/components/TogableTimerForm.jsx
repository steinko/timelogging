import React from 'react'
import TimerForm from './TimerForm' // eslint-disable-line
import { Segment } from 'semantic-ui-react'

//Displayes a form to create a new timer
export default class TogableTimerForm extends React.Component {
  render () {
    if (this.props.isOpen) { // eslint-disable-line
      return (<TimerForm title = ''/>)
    } else {
      return (
        <Segment basic textAlign = 'center'>
         <button basic icon>
           <icon name = 'plus'></icon>
         </button>
        </Segment>
      )
    }
  }
}
