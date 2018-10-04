import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { configure, shallow } from 'enzyme'
import TimerForm from '../../src/components/TimerForm'
configure({ adapter: new Adapter() })

describe('Unit test TimerForm', () => {
  var timerForm
  var title = 'Learn React'

  beforeEach(() => {
    timerForm = shallow(<TimerForm title = {title}/>)
  })

  it('should contain <div></div>', () => {
    expect(timerForm.is('div')).to.equal(true)
  })

  it('should conatin class ui centerd card', () => {
    expect(timerForm.find('.ui_centered_card').exists()).to.equal(true)
  })

  it('should conatin  default value Learn React', () => {
    expect(timerForm.containsMatchingElement(<input defaultValue={title} />)).to.equal(true)
  })
})
