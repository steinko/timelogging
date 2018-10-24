// @flow
import * as React from 'react'
import uuidv4 from 'uuid/v4'

import Timer from './Timer.jsx' // eslint-disable-line
import TimerForm from './TimerForm.jsx' // eslint-disable-line



type Props = {
  onFormSubmit:any,
  editFormOpen: boolean,
  title: string,
  id: uuidv4,
  key: uuidv4
 }

 type State = { isOpen: boolean }
 
/** 
* Displays either a timer or a timer's edit form
*/
export default class EditableTimer extends React.Component <Props,State>{

  constructor(props) {
    super(props)
    this.state = { 
      isOpen: false,

      }
  }

  handleEditClick = () => { 
    this.openForm()
   }

  handelSubmit = (timer) => {  
    this.props.onFormSubmit(timer)
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
