import React from 'react'
import TimerForm from './TimerForm' // eslint-disable-line

export default class TogableTimerForm extends React.Component {
  render () {
    if (this.props.isOpen) { // eslint-disable-line
      return (<TimerForm title = ''/>)
    } else {
      return (
        <div >
        </div>
      )
    }
  }
}
