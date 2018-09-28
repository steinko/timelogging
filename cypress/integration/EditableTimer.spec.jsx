import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { configure, shallow } from 'enzyme';
import EditTableTimerList from '../../src/components/EditTableTimerList'
configure({ adapter: new Adapter() });


describe('Unit Test Editable Timer List', () => { 
    it('should render', () => { 
       const  editTableTimerList  = shallow(<EditTableTimerList />)
       expect(editTableTimerList.is('div')).to.equal(true)
     })
 })