import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { configure, shallow } from 'enzyme'
import TimerForm from '../../src/components/TimerForm'
configure({ adapter: new Adapter() })

describe('Unit test TimerForm', () => {

  var timerForm
  var title = 'Learn React'

  context('With Title', ()=> { 

    beforeEach(() => {
      timerForm = shallow(<TimerForm title = {title}/>)
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

    it('should store poperty tite', () =>  {
      expect(timerForm.state().title).to.equal('Learn React')
    })


  context('Blank Title', ()=> {

    var bTimerForm

    beforeEach(() => {
      bTimerForm = shallow(<TimerForm title = ''/>)
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
})