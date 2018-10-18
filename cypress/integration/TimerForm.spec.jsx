import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { configure, shallow } from 'enzyme'
import uuidv4 from 'uuid/v4'

import TimerForm from '../../src/components/TimerForm.jsx'
configure({ adapter: new Adapter() })

describe('Unit test TimerForm', () => {

  var timerForm
  

  context('With id', ()=> { 
   let id = uuidv4()
    beforeEach(() => {
      timerForm = shallow(<TimerForm id = {id}/>)
    })

    it('should conatin class card', () => {
      expect(timerForm.find('Card').exists()).to.equal(true)
    })

    it('should contain form', () => {
      expect(timerForm.find('Form').exists()).to.equal(true)
    })

    it("should contain 'Title' in a label", () => {
      expect(timerForm.find('Label').contains('Title')).to.equal(true)
    })

    it("should contain 'Project' in a label", () => {
      expect(timerForm.find('Label').contains('Project')).to.equal(true)
     })

    it("should contain a red cancel button", () => {
      expect(timerForm
       .find('Button')
       .find({color: 'red' }) // eslint-disable-line
       .contains('Cancel'))
      .to.equal(true)
    })
 
    it("should contain a blue update button", () => {
      expect(timerForm
        .find('Button')
        .find({ color: 'blue' }) 
        .contains('Update')
      )
      .to.equal(true)
    })

  })

  it('should store poperty title', () =>  {

      const title = 'Learn React'
      const id = uuidv4()
      const titletimerForm = shallow(<TimerForm id = {id} title ={title} />)
      expect(titletimerForm.state().title).to.equal(title)
  })


  context('Blank id', ()=> {

    var bTimerForm

    beforeEach(() => {
      bTimerForm = shallow(<TimerForm id = {null} />)
    })

    it("should contain a blue create button", () => {
       expect(bTimerForm 
        .find('Button')
        .find({ color: 'blue' }) 
        .contains('Create')
       )
       .to.equal(true)
     })

     it('should change title ', () => { 
       expect(bTimerForm
        .find('Input')
        .find({value: ''})
       )
       bTimerForm
        .find('Input')
        .first()
        .simulate('change', {target: {value:'Cool Title'}})
       expect(bTimerForm 
        .find('Input')
        .find({value: "Cool Title"})

       )
     })

     it('shoul call handelSubmit', () => { 
       const bTimerFormInstance = bTimerForm.instance()
       cy.stub( bTimerFormInstance,'handelSubmit')
       bTimerForm
         .find('Input')
         .first()
         .simulate('change', {target: {value:'Cool Title'}})
      bTimerForm 
        .find('Button')
        .find({ color: 'blue' }) 
        .simulate('click')
        expect(bTimerFormInstance.handelSubmit).to.be.called
        
      })
   })
})