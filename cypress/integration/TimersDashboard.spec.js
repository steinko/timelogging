import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { configure, shallow } from 'enzyme';
import TimersDashboard from '../../src/components/TimersDashboard'
configure({ adapter: new Adapter() });

describe('Unit test TimeDashboard', ()=> {
    var  timersDashboard 

    beforeEach(()=> {
        timersDashboard = shallow(<TimersDashboard />)
    })

    it('should conation <div></div>', ()=> {
     expect(timersDashboard.is('div')).to.equal(true)
    })

    it('should render', ()=> {
        expect(timersDashboard.exists()).to.equal(true)
        expect(timersDashboard.find('.other-class').exists()).to.equal(false);
    })
    xit('shouls exist a class "ui three column centered grid"', () => { 
        expect(timersDashboard.find('.ui three column centered grid').exists()).to.equal(true)
    })  
     it('shouls exist a class "column"', () => { 
        expect(timersDashboard.find('.column').exists()).to.equal(true)
     })
 } )