
import React from 'react'
import PropTypes from 'prop-types'

import Timer from './Timer' // eslint-disable-line
import TimerForm from './TimerForm' // eslint-disable-line

// Displays either a timer or a timer's edit form
export default class EditableTimer extends React.Component {
  render () {
    if (this.props.editFormOpen) { // eslint-disable-line
      return (
        <TimerForm
          title = {this.props.title}
          project = {this.props.project} 
        />  // eslint-disable-line
      )
    } else {
      return (
        <Timer 
          title = {this.props.title}
          project = {this.props.project} 
          elapsed = {this.props.elapsed} 
          runningSince = {this.props.runningSince} 
        />
      )
    }
  }
}

EditableTimer.propType = {
  title: PropTypes.string,
  project: PropTypes.string,
  elapsed: PropTypes.string,
  runningSince:PropTypes.string,
  editFormOpen:PropTypes.boolean
  }
