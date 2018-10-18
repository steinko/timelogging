import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import sinon from 'sinon'

import TimersDashboard from '../../src/components/TimersDashboard.jsx'
import TogableTimerForm from '../../src/components/TogableTimerForm.jsx' // eslint-disable-line
import TimerForm from '../../src/components/TimerForm.jsx' // eslint-disable-line
import EditableTimer from '../../src/components/EditableTimer.jsx' // eslint-disable-line
configure({ adapter: new Adapter() })

describe('integration testing', ()=> {
  xit ('should create and store timer', ()=> { 
      const  timersDashboard =  shallow(<TimersDashboard />)
      expect(timersDashboard.state().timers).to.have.lengthOf(2)
      const togablTimerForm = timersDashboard.find('TogableTimerForm')
      expect(togablTimerForm).to.have.lengthOf(1)
      const timerForm = togablTimerForm.find('TimerForm')
      expect(timerForm).to.have.lengthOf(1)
      timerForm

      .find('Button')
       .find({ color: 'blue' }) 
        .simulate('change', {target: {value:'Cooler Title'}})
        .simulate('click')
     expect(togablTimerForm.state().isOpen).to.equal(true)
     expect(timerForm.state().title).to.equal('Cooler Title')
     expect(timersDashboard.state().timers).to.have.lengthOf(3)

        
    }) 

     it('should call ', () => { 

     const obj = { // eslint-disable-line
          onFormSubmit() { }
        }

     const timers = [ // eslint-disable-line

       { title: 'Practice squat',
         openForm:true
       },

       { title: 'Bake squash',
        openForm:false 
      }
    ]
     const stub = sinon.stub() // eslint-disable-line
    // const onFormClose = sinon.spy(EditableTimer, 'onFormClose')
     const timerArg= stub.withArgs(timers) // eslint-disable-line
     const onFormsSumitEditableTimer = mount(<EditableTimer onFormSubmit = { stub } editFormOpen = { true }/>)
      onFormsSumitEditableTimer
        .find('TimerForm')
        .find('Button')
        .first()
        .simulate('click')
       // expect(onFormClose).to.have.property('callCount', 1); 

      

    })
}) 