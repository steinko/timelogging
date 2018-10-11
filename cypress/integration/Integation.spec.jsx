import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import TimersDashboard from '../../src/components/TimersDashboard'
import TogableTimerForm from '../../src/components/TogableTimerForm'
import TimerForm from '../../src/components/TimerForm' // eslint-disable-line

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
}) 