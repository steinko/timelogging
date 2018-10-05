
import React from 'react'
import PropTypes from 'prop-types'

import Timer from './Timer' // eslint-disable-line
import TimerForm from './TimerForm' // eslint-disable-line

export default class EditableTimer extends React.Component {
  render () {
    if (this.props.editFormOpen) { // eslint-disable-line
      return (
        <TimerForm
          title = {this.props.title} />  // eslint-disable-line
      )
    } else {
      return (
        <Timer />
      )
    }
  }
}

EditableTimer.propType = {
  title: PropTypes.string,
  editFormOpen:PropTypes.boolean
  }
