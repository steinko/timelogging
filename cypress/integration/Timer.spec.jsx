import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { configure, shallow } from 'enzyme'
import Timer from '../../src/components/Timer'
configure({ adapter: new Adapter() })

describe('Unit test Timer', () => {
  it('should render', () => {
    const timer = shallow(<Timer />)
    expect(timer.is('div')).to.equal(true)
  })
})
