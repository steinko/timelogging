
import React from 'react'
import Timer from './Timer' // eslint-disable-line
import TimerForm from './TimerForm' // eslint-disable-line



export default class EditableTimer extends React.Component {
  render () {
    if (this.props.editFormOpen) { // eslint-disable-linn
      return (
        <TimerForm
          title = {this.props.title} />  
      )
    } else {
      return (
        <Timer />
      )
    }
  }
}
