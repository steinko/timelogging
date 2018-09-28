import React from 'react'
import TimerForm from './TimerForm'

export default class TogableTimerForm extends React.Component {
    render()  {
          if (this.props.isOpen)  {
             return (<TimerForm />)
         }
         else 
         return(
        <div >
        </div> 
      )
    }
}