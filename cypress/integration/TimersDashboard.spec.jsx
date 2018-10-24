import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { configure, shallow } from 'enzyme'
import sinon from 'sinon'


import TimersDashboard from '../../src/components/TimersDashboard.jsx'
import TimerForm from '../../src/components/TimerForm.jsx'
configure({ adapter: new Adapter() })

describe('Unit test Timers Dashboard', () => {
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

  it('should conatin a three column centered grid', () => {
    expect(timersDashboard
      .find('Grid')
      .find({columns: 3 }) // eslint-disable-line
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
     expect(timer.id === undefined).to.equal(true)
  })

  it('should store timers', () => {
   let timeForm = shallow (<TimerForm  />)
    const instance  = timersDashboard.instance()
    instance.handleCreateFormSubmit(timeForm)
    timeForm = shallow (<TimerForm  />)
    instance.handleCreateFormSubmit(timeForm)
    const editabeTimersList = timersDashboard.children()
    expect(editabeTimersList.children()).to.have.length(2)
   
   })

   it('should change title ', () => { 
      const timers = timersDashboard.state().timers
      const timer =  timers[0]
      const title = 'Changed'
      timer.title = title
      const instance  = timersDashboard.instance()
      instance.handelEditFormSubmit(timer)
      const timers2 = timersDashboard.state().timers
      const timerForm = timers2.find( element => { 
      return element.title === title })
      expect(timerForm.title).to.equal(title) 

   })

   xit('shold conect a function to popert onForm ' , () => { 
      const timer = { }
      const instance  = timersDashboard.instance()
      var stub = sinon(instance, 'handelEditFormSubmit')
      const editableTimerList = timersDashboard.find('EditableTimersList')
      expect(editableTimerList.props().onFormSubmit).to.equal(instance.handelEditFormSubmit(timer))
   })



})

