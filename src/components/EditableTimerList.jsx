// @flow
import * as React from 'react'
import EditableTimer from './EditableTimer.jsx'  // eslint-disable-line
import uuidv4 from  'uuid/v4'

type TimerData = { 
  id: uuidv4,
  title: string
 }
type Props = { 
   timers: Array<TimerData> 
 }

/**
 * Displayes a list of timer containers
 */
export default class EditableTimerList extends React.Component<Props>  {
  
  render () {
    const timers = this.props.timers.map((timer) => ( // eslint-disable-line
  
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
