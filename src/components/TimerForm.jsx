import React from 'react'
import PropTypes from 'prop-types'

export default class TimerForm extends React.Component {
  render () {
    return (
      <div className = 'ui_centered_card'>
        <input type = 'text' defaultValue = {this.props.title } />
      </div>
    )
  }
}

TimerForm.propTypes = {
  title: PropTypes.string
}
