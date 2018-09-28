import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { configure, shallow } from 'enzyme';
import EditableTimer from '../../src/components/EditableTimer'
import Timer from '../../src/components/Timer'
import TimerForm from '../../src/components/TimerForm'
configure({ adapter: new Adapter() });


describe('Unit Test Editable Timer List', () => { 
      

     it('should render timer', () => { 
         const  editableTimer  = shallow(<EditableTimer editFormOpen = { false }  />)
       expect(editableTimer.is('Timer')).to.equal(true)
     })

      it('should render timerform', () => { 
          const editableTimer  = shallow(<EditableTimer editFormOpen = { true }/>)
       expect(editableTimer.is('TimerForm')).to.equal(true)
     })
 })