import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import uuidv4 from 'uuid/v4'
import Timer from '../../src/components/Timer.jsx'
import CardHeader from 'semantic-ui-react';
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


     it('should contain a Card Content', () => {
      expect(timer.find('CardContent').exists()).to.equal(true)
     }) 

    it('should contain a button with a edit icon', () => {
      expect(timer.find('Button').find({ icon: 'edit' }).exists() ).to.equal(true)
    })

    it('should diplay time', () => {
      expect(timer
        .find('h2') 
        .contains( '02:29:46' ))
      .to.equal(true)
    })

    it('should diplay time in card description', () => {
      expect(timer
        .find('CardDescription') 
        .contains( '02:29:46' ))
      .to.equal(true)
    })

    it('should display a blue button with description start', () => {
    
    expect(timer
      .find('Button')
      .find({ color: 'blue' })
      .contains('Start')) // eslint-disable-line
      .to.equal(true)
  })

   })

  

  it('should contain a id ', () => {
    const id = uuidv4();
    const timer = mount(<Timer  id  = {id} />)
    expect(timer.exists()).to.equal(true)
    expect(timer.props().id).to.equal(id)
      
  })

  context('with title' , () => {
    var timer
    var  title = 'Title';

    beforeEach(() => {
      timer = mount(<Timer  title  = {title} />)
    })

    it('should contain title ', () => {
      expect(timer.exists()).to.equal(true)
      expect(timer.props().title).to.equal(title)    
    })

    it('shoul display title in header', () => { 
      expect(timer.find('CardHeader').contains(title))
    })

  })

  it('should  call on edit click', () => {
      const obj = { // eslint-disable-line
        handelEditClick() {  }// eslint-disable-line
        }
      const stub = cy.stub(obj,'handelEditClick').as('handelEditClickStub') // eslint-disable-line
      const timerClick = shallow(<Timer  onEditClick = {stub} />)
       timerClick.find('Button').first().simulate('click')
     })
  })