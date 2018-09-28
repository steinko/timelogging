import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { configure, shallow } from 'enzyme';
import TimerForm from '../../src/components/TimerForm'
configure({ adapter: new Adapter() });


describe('Unit test TimerForm', () => { 
    var timerForm
    beforeEach(()=> { 
         timerForm  = shallow(<TimerForm />)
    })

    it('should render', () => { 
       expect(timerForm.is('div')).to.equal(true)
     })

     it('should render', () => { 
       expect(timerForm.find('.ui_centered_card').exists()).to.equal(true)
     })
 })