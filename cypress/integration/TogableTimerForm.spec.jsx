import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import TogableTimerForm from '../../src/components/TogableTimerForm'
import TimerForm from '../../src/components/TimerForm.jsx' // eslint-disable-line

configure({ adapter: new Adapter() })

describe('Unit test TogableTimerForm', () => {
  it('should render <div> </div>', () => {
    const togableTimerForm = shallow(<TogableTimerForm isOpen = { false } />)
    expect(togableTimerForm.is('div')).to.equal(true)
  })

  it('should render TimerForm', () => {
    const togableTimerForm = mount(<TogableTimerForm isOpen= { true } />)
    expect(togableTimerForm.find('TimerForm').exists()).to.equal(true)
  })
})
