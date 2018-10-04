import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import EditableTimer from '../../src/components/EditableTimer'
import Timer from '../../src/components/Timer' // eslint-disable-line
import TimerForm from '../../src/components/TimerForm' // eslint-disable-line

configure({ adapter: new Adapter() })

describe('Unit Test Editable Timer', () => {
  it('should render timer', () => {
    expect(shallow(<EditableTimer editFormOpen = { false } />)
      .is('Timer'))
      .to.equal(true)
  })

  it('should render timerform', () => {
    expect(shallow(<EditableTimer editFormOpen = { true }/>)
      .is('TimerForm'))
      .to.equal(true)
  })
  xit('should contain tmer with tite Learn Java', () => {
    var title = 'Learn Java'
    expect(mount(<EditableTimer editFormOpen = { true } title = { title } />)
      .find('TimerForm')
      .find('Input')
      .containsMatchingElement(<input defaultValue={title} />))
      .to.equal(true)
  })
})
