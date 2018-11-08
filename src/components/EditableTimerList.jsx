import * as React from 'react'
import EditableTimer from './EditableTimer.jsx'  // eslint-disable-line
import TimerData from './TimerData.jsx'



type Props = { 
   timers: Array<TimerData> ,
   onFormSubmit: any
 }

/**
 * Displayes a list of timer containers
 */
export default class EditableTimerList extends React.Component<Props>  {
  
  render () {
    const timers = this.props.timers.map((timer:TimerData) => ( // eslint-disable-line
  
        <EditableTimer // eslint-disable-line
          key = {timer.id}
          id = {timer.id}
          title =  {timer.title}
          onFormSubmit = {this.props.onFormSubmit}
        />

        
    ))
    return(
       <div id= 'timers'>
          {timers}
        </div>
        )
  }
}
