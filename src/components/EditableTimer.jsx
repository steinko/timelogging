import React from 'react'
import Timer from './Timer' // eslint-disable-line
import TimerForm from './TimerForm' // eslint-disable-line

export default class EditableTimer extends React.Component {
  render () {
    if (this.props.editFormOpen) {
      return (
        <TimerForm />
      )
    } else {
      return (
        <Timer />
      )
    }
  }
}
