import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import uuidv4 from 'uuid/v4'
import Timer from '../../src/components/Timer.jsx'
configure({ adapter: new Adapter() })

describe('Unit test Timer', () => {
  context('no props', () => { 
    var timer
    beforeEach( () => {
      timer = shallow(<Timer />)
    }) 
    it('should contain a Card', () => {
      expect(timer.is('Card')).to.equal(true)
    })


     xit('should contain a Card Content', () => {
      expect(timer.is('Card.Content')).to.equal(true)
     }) 

    xit('should contain a button with a edit icon', () => {
      expect(timer.find('Button').find({ icon: 'edit' }) ).to.equal(true)
    })

    xit('should contain a Card meta with prject', () => {
      expect(timer
        .find('Card')
        .find('Description')
        .find([ textAligment= 'centered' ]) // eslint-disable-line
        .contains( '02:29:46' ))
      .to.equal(true)
    })

   })

  xit('should contain a Card Header', () => {
    const header = shallow(<Timer  title = 'blue'/>)
    expect(header
      .find('Card')
      .find({ header: 'blue' })) // eslint-disable-line
      .to.equal(true)
  })

  xit('should contain a id ', () => {
    //const id = uuidv4();
    const timer = mount(<Timer  id  = { uuidv4()} />)
    expect(timer.props().id.exists()).to.equal(true)
      
  })
  xit('should contain a Card meta with project', () => {
    const meta = shallow(<Timer  project = 'blue'/>)
    expect(meta
      .find('Card')
      .find([meta= 'blue' ])) // eslint-disable-line
      .to.equal(true)
      
  })
  
 

    it('should  call on edit click', () => {
      const obj = { // eslint-disable-line
        handelEditClick() { console.log('called') }// eslint-disable-line
        }
      const stub = cy.stub(obj,'handelEditClick').as('handelEditClickStub') // eslint-disable-line
      const timerClick = shallow(<Timer  onEditClick = {stub} />)

       timerClick.find('Button').first().simulate('click')
      //expect(stub).to.be.called()
  }) 


})
