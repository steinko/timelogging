import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import  uuidv4 from 'uuid/v4'
import  sinon from 'sinon'

import EditableTimerList from '../../src/components/EditableTimerList.jsx'
configure({ adapter: new Adapter() })

describe('Unit Test Editable Timer List', () => {
  var timers = [ 

       {  id:uuidv4(),
          title: 'Practice squat',
        
       },

       { id: uuidv4(),
         title: 'Bake squash',
      
      }
    ]

     var editableTimerList

  beforeEach( () => { 
     editableTimerList = shallow(<EditableTimerList   timers = { timers } />)

  })

  it('should contain <div id = timers>    </div>', () => {
    expect(editableTimerList.is('div#timers')).to.equal(true)
  })


  it('should display timers', () => {
      expect(
        editableTimerList
          .find('#timers')
          .children()).to.have.lengthOf(2);
       
  })

  it('should display timer  with key, id, title', () => {
    const meditableTimerList = shallow(<EditableTimerList   timers = { timers } />)
     const timer =
        meditableTimerList
          .find('#timers')
          .children()
          .first()
      expect(timer.is('EditableTimer')).to.equal(true)
      //expect (timer.prop('key')).to.equal(timers[0].id)
      expect (timer.props().id).to.equal(timers[0].id)
      expect (timer.props().title).to.equal(timers[0].title)
       
  })

   it('should connect function to onformSubmit of Editable Timer', () =>  {

    var stub = sinon.stub()
    const editableTimerList = shallow(<EditableTimerList timers = { timers }  onFormSubmit = { stub } />)
    expect(editableTimerList.find('EditableTimer').first().props().onFormSubmit).to.equal(stub)

   })

})
