import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { configure, shallow } from 'enzyme'
import TimersDashboard from '../../src/components/TimersDashboard'
import TimerForm from '../../src/components/TimerForm'
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

  xit('should store a timer form', () => {
    const timeForm = shallow (<TimerForm  title = 'Title' />)
    const instance  = timersDashboard.instance()
    instance.handleCreateFormSubmit(timeForm)
    const timers = timersDashboard.state().timers
    const timerForm = timers.find( element => { 
     return element.state().title === 'Title' })
    expect(timerForm.state().title).to.equal('Title')
  })

  it('should display timers', () => {
   let timeForm = shallow (<TimerForm  title = 'Title' />)
    const instance  = timersDashboard.instance()
    instance.handleCreateFormSubmit(timeForm)
    timeForm = shallow (<TimerForm  title = 'Title2' />)
    instance.handleCreateFormSubmit(timeForm)
    const editabeTimersList = timersDashboard.children()
    expect(editabeTimersList.children()).to.have.length(2)
   
   })



})

