// @flow
import * as React from 'react'
import uuidv4 from 'uuid/v4'

import Timer from './Timer.jsx' // eslint-disable-line
import TimerForm from './TimerForm.jsx' // eslint-disable-line
import TimerData from './TimerData.jsx'



type Props = {
  onFormSubmit:any,
  title: string,
  id: uuidv4,
  key: ?uuidv4
 }

 type State = { isOpen: boolean }
 
/** 
* Displays either a timer or a timer's edit form
*/
export default class EditableTimer extends React.Component <Props,State>{

  constructor(props:Props) {
    super(props)
    this.state = { 
      isOpen: false,

      }
  }

  handelEditClick = () => { 
    this.openForm()
   }

  handelSubmit = (timer:TimerData) => {  
    this.props.onFormSubmit(timer)
    this.closeForm()
   }

  handelFormClose = () => {
    this.closeForm()
 }
  closeForm = () => { 
     this.setState( {isOpen: false})
    }

    openForm = () => { 
      this.setState( {isOpen: true})
      }

  render () {
    if (this.state.isOpen) { 
      return (
        <TimerForm
          title = {this.props.title}
          id = {this.props.id}
          onFormSubmit=  {this.handelSubmit}
          onFormClose= {this.handelFormClose}
        />  
      );
    } else {
      return (
        <Timer 
          title = {this.props.title}
          id = {this.props.id}
          onEditClick = {this.handelEditClick}
        />
      )
    }
  }
}
