import * as React from 'react'
import TimerForm from './TimerForm.jsx' // eslint-disable-line
import TimerData from './TimerData.jsx'

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

    handelFormSubmit = (timer:TimerData) => { 
      this.props.onFormSubmit(timer)
      this.setState({ isOpen: false })
     }

  render () {
    if (this.state.isOpen) { // eslint-disable-line
      return (
          <TimerForm  
            onFormSubmit = {this.handelFormSubmit }
            onFormClose =  {this.handelFormClose }  
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
