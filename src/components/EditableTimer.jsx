
import React from 'react'
import PropTypes from 'prop-types'

import Timer from './Timer.jsx' // eslint-disable-line
import TimerForm from './TimerForm.jsx' // eslint-disable-line

// Displays either a timer or a timer's edit form
export default class EditableTimer extends React.Component {

  constructor(props) {
    super(props)
    this.state = { isOpen: false  }
  }

  handelSubmit = (timer) => {  
    this.props.onFormSubmit(timer)
    this.closeForm()
   }

  closeForm = () => { 
     this.setState( {isOpen: false})
    }

  render () {
    if (this.props.editFormOpen) { // eslint-disable-line
      return (
        <TimerForm
          title = {this.props.title}
          project = {this.props.project}
          onFormSubmit=  {this.handelSubmit}
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
  editFormOpen:PropTypes.boolean,
  onFormSubmit:PropTypes.function
  }
