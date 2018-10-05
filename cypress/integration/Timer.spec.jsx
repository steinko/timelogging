import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { configure, shallow } from 'enzyme'
import Timer from '../../src/components/Timer'
configure({ adapter: new Adapter() })

describe('Unit test Timer', () => {
  var timer
  beforeEach( () => {
     timer = shallow(<Timer />)
  }) 
  it('should contain a Card', () => {
    expect(timer.is('Card')).to.equal(true)
  })
  xit('should contain a Card Header', () => {
    const header = shallow(<Timer  title = 'blue'/>)
    expect(header
      .find('Card')
      .find([header= 'blue' ])) // eslint-disable-line
      .to.equal(true)
  })
  xit('should contain a Card meta with prject', () => {
    const meta = shallow(<Timer  project = 'blue'/>)
    expect(meta
      .find('Card')
      .find([meta= 'blue' ])) // eslint-disable-line
      .to.equal(true)
  })
  xit('should contain a Card meta with prject', () => {
    const meta = shallow(<Timer  project = 'blue'/>)
    expect(meta
      .find('Card')
      .find('Description')
      .find([ textAligment= 'centered' ]) // eslint-disable-line
      .contains( '02:29:46' ))
      .to.equal(true)
  })
  xit('should contain a Card Content', () => {
    expect(timer.is('Card.Content')).to.equal(true)
  }) 
})
