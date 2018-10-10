import React from 'react'
import TimerForm from './TimerForm' // eslint-disable-line
import { Segment, Button, Icon } from 'semantic-ui-react'

//Displayes a form to create a new timer
export default class TogableTimerForm extends React.Component {
  
  state = { 
    isOpen: false
  }

  handelFormOpen = () => {
      this.setState({
        isOpen:true
      })
    }

    handelFormSubmit = (timer) => { 
      this.props.onFormSubmit(timer)
      this.setState({ isOpen: false })
     }

  render () {
    if (this.state.isOpen) { // eslint-disable-line
      return (
          <TimerForm 
            onFormSubmit = {this.handelFormSubmit }/>)
    } else {
      return (
        <Segment basic textAlign = 'center'>
          <Button 
            basic 
            icon 
            id = 'Create'
            onClick={this.handelFormOpen }
          >
          
         </Button>
         <Icon name = 'plus'/>
        </Segment>
      )
    }
  }
}
