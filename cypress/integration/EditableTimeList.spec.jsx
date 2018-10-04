import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import EditableTimerList from '../../src/components/EditableTimerList'
configure({ adapter: new Adapter() })

describe('Unit Test Editable Timer List', () => {
  it('should contain <div></div>', () => {
    const editableTimerList = shallow(<EditableTimerList />)
    expect(editableTimerList.is('div')).to.equal(true)
  })

  xit('should contain <EditabelTimer></EditabelTimer>', () => {
    const editableTimerList = mount(<EditableTimerList />)
    expect(editableTimerList.is('EditableTimer')).to.equal(true)
  })

  xit('should contain timerform with tite Learn JavaScript', () => {
    expect(shallow(<EditableTimerList />)
      .find('EditableTimer')
      .find('TimerForm')
      .containsMatchingElement(<input defaultValue='Learn JavaScript' />))
      .to.equal(true)
  })
})
