// @flow
import * as React from 'react'
import TimerForm from './TimerForm.jsx' // eslint-disable-line
import { Segment, Button } from 'semantic-ui-react'

type Props = { 

  onFormSubmit: any
 }

 type State = { 
   isOpen: boolean 
  }

/** 
* Displayes a form to create a new timer
*/
export default class TogableTimerForm extends React.Component<Props,State> {
  
  state = { 
    isOpen: false
  }

  handelFormOpen = () => {
      this.setState({
        isOpen:true
      })
    }
    handelFormClose = () => {
      this.setState({
        isOpen:false
      })
    }

    handelFormSubmit = (timer) => { 
      this.props.onFormSubmit(timer)
      this.setState({ isOpen: false })
     }

  render () {
    if (this.state.isOpen) { // eslint-disable-line
      return (
          <TimerForm  id = 'timerForm'
            onFormSubmit = {this.handelFormSubmit }
            omFormClose =  {this.handelFormClose }  
          />)
    } else {
      return (
        <Segment basic textAlign = 'center'>
          <Button 
            basic 
            icon = 'plus'
            id = 'Create'
            onClick={this.handelFormOpen }
          />         
        </Segment>
      )
    }
  }
}
