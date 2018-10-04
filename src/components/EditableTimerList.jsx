
import React from 'react'
import EditableTimer from './EditableTimer'  // eslint-disable-line


export default class EditableTimerList extends React.Component  {
  render () {
   console.log('Start EditableList') // eslint-disable-line
    return (
      <div >
        <EditableTimer
          title = 'Learn JavaScript'
          editFormOpen = {true}
        />
      </div>
    )
  }
}
