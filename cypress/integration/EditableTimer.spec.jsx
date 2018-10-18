import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import sinon from 'sinon'
import EditableTimer from '../../src/components/EditableTimer.jsx'
import Timer from '../../src/components/Timer.jsx' // eslint-disable-line
import TimerForm from '../../src/components/TimerForm.jsx' // eslint-disable-line


configure({ adapter: new Adapter() })

describe('Unit Test EditableTimer', () => {

   
  context('No props', ()=> {

    var editableTimer

    beforeEach(() => {  
      editableTimer = shallow(<EditableTimer />)
    })

    it('expect a isOpen state that is false', () => {
      expect(editableTimer.
        state().isOpen)
        .to.equal(false)
         
    })

    it('expect a timer', () => {
      expect(editableTimer
        .is('Timer')
      )
      .to.equal(true)
    })

     it('expect a isOpen state that is false ', () => { 
      // const closeForm = sinon.spy(EditableTimer.prototype,'closeForm')
       const editableTimeInstance =  editableTimer.instance()
       editableTimeInstance.closeForm()
       expect(editableTimer
        .state().isOpen
       )
      .to.equal(false)
      //expect(closeForm.prototype).to.have.property('callCount', 1);
    })

  })

    xit('expect a timer with title Learn Java', () => {
      var title = 'Learn Java'
      expect(mount(<EditableTimer  title = { title } />)
        .find('TimerForm')
        .find('Input')
        .containsMatchingElement(<input value={title} />))
        .to.equal(true)
  })
    
})
