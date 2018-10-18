import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { configure, shallow } from 'enzyme'
import uuidv4 from 'uuid/v4'

import TimersDashboard from '../../src/components/TimersDashboard.jsx'
import TimerForm from '../../src/components/TimerForm.jsx'
configure({ adapter: new Adapter() })

describe('Unit test TimeDashboard', () => {
  var timersDashboard

  beforeEach(() => {
    timersDashboard = shallow(<TimersDashboard />)
  })

  it('should conain a Grid', () => {
    expect(timersDashboard.is('Grid')).to.equal(true)
  })

  it('should exits a TimersDashboard', () => {
    expect(timersDashboard.exists()).to.equal(true)
  })

  xit('shouls conatin a three column centered grid', () => {
    expect(timersDashboard
      .find('Grid')
      .find([columns = 3]) // eslint-disable-line
      .exists()).to.equal(true)
  })
  
  it('should contain a EdittableTimerList', () => {
    expect(timersDashboard.find('EditableTimerList').exists()).to.equal(true)
  })
  it('should contain a TogableTimerForm', () => {
    expect(timersDashboard.find('TogableTimerForm').exists()).to.equal(true)
  })

  it('should store a timer form', () => {
    const timeForm = shallow (<TimerForm/>)
    const instance  = timersDashboard.instance()
    instance.handleCreateFormSubmit(timeForm)
    const timers = timersDashboard.state().timers
    expect(timers === undefined).to.equal(false)
    expect(timers.length).to.equal(3)
    const timer = timers.find( element => { 
     return element.title === '' })
     expect(timer=== undefined).to.equal(false)
     expect(timer.title === '').to.equal(true)
     expect(timer.id === undefined).to.equal(false)
  })

  it('should store timers', () => {
   let timeForm = shallow (<TimerForm  title = 'Title' />)
    const instance  = timersDashboard.instance()
    instance.handleCreateFormSubmit(timeForm)
    timeForm = shallow (<TimerForm  title = 'Title2' />)
    instance.handleCreateFormSubmit(timeForm)
    const editabeTimersList = timersDashboard.children()
    expect(editabeTimersList.children()).to.have.length(2)
   
   })

   xit('should execute handelEditFormSubmit', () => { 
     const timers = timersDashboard.state.timers
      const timer =  timers[0]
      const title = 'Changed'
      timer.title = { title }
    const instance  = timersDashboard.instance()
    instance.handleEditFormSubmit(timer)
    const timers2 = timersDashboard.state.timers
    const timerForm = timers2.find( element => { 
     return element.state().title === { title } })
    expect(timerForm.state().title).to.equal({ title }) 

   })



})

