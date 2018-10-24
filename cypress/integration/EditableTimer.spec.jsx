import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { configure, mount, shallow } from 'enzyme'

import uuidv4 from 'uuid/v4'



import EditableTimer from '../../src/components/EditableTimer.jsx'
import Timer from '../../src/components/Timer.jsx' // eslint-disable-line
import TimerForm from '../../src/components/TimerForm.jsx' // eslint-disable-line


configure({ adapter: new Adapter() })

describe('Unit Test EditableTimer', () => {

   
  context('No props', ()=> {

    var editableTimer

    beforeEach(() => {  
      editableTimer = mount(<EditableTimer />)
    })

    it('expect a isOpen state that is false', () => {
      expect(editableTimer.
        state().isOpen
        )
        .to.equal(false)
         
    })

    it('expect a timer', () => {
      expect(editableTimer
        .find('Timer')
        .exists()
        )
        .to.equal(true)
    })

      
  
    it('expext state isOpen true' , () =>  { 
     const editableTimeInstance =  editableTimer.instance()
     editableTimeInstance.handleEditClick()
      expect(editableTimer
        .state().isOpen
       )
      .to.equal(true)
  })

  
    

  })


    it('expect a timerform with title Learn Java', () => {
       let title = 'Learn Java'
     
        const editableTimerMount = shallow(<EditableTimer  title = { title } />)
        const instance = editableTimerMount.instance()
        instance.handleEditClick()
        const timerForm = editableTimerMount.find('TimerForm')
        expect(timerForm.exists()).to.equal(true)
        expect(timerForm.props().title) .to.equal(title)
        
  })

  it('expect a timerform with id', () => {
      var id = uuidv4()
        const editableTimerMount = shallow(<EditableTimer  id = { id } />)
        const instance = editableTimerMount.instance()
        instance.handleEditClick()
       const timerForm = editableTimerMount.find('TimerForm')
       expect(timerForm.props().id).to.equal(id)
  })

  

  it('expect a timer with title Learn Java', () => {
      let title = 'Learn Java'
      expect(mount(<EditableTimer  title = { title }    />)
        .find('Timer')
        .contains( { title } )
      )
      .to.equal(true)
       
  })

  it('expect a timer with id', () => {
      let id = uuidv4()
      expect(mount(<EditableTimer  id = { id }   />)
        .find('Timer')
        .props().id 
      )
      .to.equal(id)
       
  })

 })
    
