import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import EditableTimerList from '../../src/components/EditableTimerList.jsx'
configure({ adapter: new Adapter() })

describe('Unit Test Editable Timer List', () => {
  var timers = [ 

       { title: 'Practice squat',
         openForm:true
       },

       { title: 'Bake squash',
        openForm:false 
      }
    ]

     var editableTimerList

  beforeEach( () => { 
     editableTimerList = shallow(<EditableTimerList timers = { timers } />)

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
})
