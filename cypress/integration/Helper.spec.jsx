import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { configure, shallow } from 'enzyme'
import TimerForm from '../../src/components/TimerForm.jsx'
import Helper from '../../src/components/Helper.jsx'
configure({ adapter: new Adapter() })


describe('Unit test Helper', () => { 
  it( 'shoul generate id', () => {
    const timerForm = shallow( <TimerForm title = 'Title' project = 'Project' />)
    const helper = new Helper()
    const timerFormWithId = helper.newTimer(timerForm)

    expect(timerFormWithId.title === '').to.equal(true)
    expect(timerFormWithId.id === undefined).to.equal(false)
    //expect(timerFormWithId.state().project).to.equal('Project')
  })
})