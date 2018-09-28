import React from 'react'
import TimerForm from './TimerForm' // eslint-disable-line

export default class TogableTimerForm extends React.Component {
  render () {
    if (this.props.isOpen) {
      return (<TimerForm />)
    } else {
      return (
        <div >
        </div>
      )
    }
  }
}
