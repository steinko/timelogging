import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import sinon from 'sinon'
import TogableTimerForm from '../../src/components/TogableTimerForm.jsx'
import TimerForm from '../../src/components/TimerForm.jsx' // eslint-disable-line

configure({ adapter: new Adapter() })

describe('Unit test TogableTimerForm', () => {

  it('should conatin a segment', () => {
    const togableTimerForm = shallow(<TogableTimerForm  />)
    expect(togableTimerForm.is('Segment')).to.equal(true)
  })

  it('should conatin button witha a plus icon', () => {
    const togableTimerForm = shallow(<TogableTimerForm />)
    expect(togableTimerForm
      .find('Button')
      .find( {icon: 'plus'} )
      .exists()
    ) // eslint-disable-line
    .to.equal(true)
  })

   it('should change isOpen state', () => {
   const togabeleTimerForm = shallow(<TogableTimerForm  />)
   expect( togabeleTimerForm.state().isOpen ).to.equal(false) 
   togabeleTimerForm.find('Button').simulate('click')
   expect( togabeleTimerForm.state().isOpen ).to.equal(true) 
  })

  it('should render TimerForm', () => {
    const togableTimerForm = mount(<TogableTimerForm />)
    togableTimerForm.find('Button').simulate('click')
    expect(togableTimerForm.find('TimerForm').exists()).to.equal(true)
  })

  xit ('should close a TimerForm', ()=> { 
     let stub = sinon.stub()
     const togabeleTimerForm = mount(<TogableTimerForm onFormSubmit =  {stub}/>) 
     togabeleTimerForm. find('Button')
      .find( {icon: 'plus'} ).simulate('click')
     const timerForm = togabeleTimerForm.find('TimerForm')
     const button  =  timerForm.find('Button').find( {color: 'red'})
     button.simulate('click')
     expect( togabeleTimerForm.state().isOpen).to.equal(false)
  
  })

})
