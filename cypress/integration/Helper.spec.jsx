import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { configure, shallow } from 'enzyme'
import TimerForm from '../../src/components/TimerForm'
import Helper from '../../src/components/Helper'
configure({ adapter: new Adapter() })


describe('Unit test Helper', () => { 
  it( 'shoul generate id', () => {
    const timerForm = shallow( <TimerForm title = 'Title' project = 'Project' />)
    const helper = new Helper()
    const timerFormWithId = helper.newTimer(timerForm)

    //expect(timerFormWithId.props.id.exist()).to.equale(true)
    expect(timerFormWithId.state().title).to.equal('Title')
    //expect(timerFormWithId.state().project).to.equal('Project')
  })
})