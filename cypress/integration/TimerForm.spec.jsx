
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { configure, shallow } from 'enzyme'
import sinon from 'sinon'
import uuidv4 from 'uuid/v4'

import TimerForm from '../../src/components/TimerForm.jsx'
import TogableTimerForm from '../../src/components/TogableTimerForm.jsx'

configure({ adapter: new Adapter() })

describe('Unit test TimerForm', () => {

  var timerForm
  

  context('No properites ', ()=> { 
   
    beforeEach(() => {
      timerForm = shallow(<TimerForm />)
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
  

    it("should contain a red cancel button", () => {
      expect(timerForm
       .find('Button')
       .find({color: 'red' }) // eslint-disable-line
       .contains('Cancel'))
      .to.equal(true)
    })
  })


    it("should contain a blue update button", () => {
         let id = uuidv4()
         timerForm = shallow(<TimerForm  id = { id } />)
      expect(timerForm
        .find('Button')
        .find({ color: 'blue' }) 
        .contains('Update')
      )
      .to.equal(true)
    })



  


  it('should store poperty title', () =>  {

      const title = 'Learn React'
      const titletimerForm = shallow(<TimerForm  title ={title} />)
      expect(titletimerForm.state().title).to.equal(title)
  })

  it('should change title', () =>  {

      const title = 'Learn React'
      const titletimerForm = shallow(<TimerForm title ={title} />)
      const changed = 'changed'
      titletimerForm.find('input').type({changed})
      expect(titletimerForm.find('input')
        .find({value: changed}))
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
        .find('input')
        .find({value: ''})
       )
       bTimerForm
        .find('input')
        .first()
        .simulate('change', {target: {value:'Cool Title'}})
       expect(bTimerForm 
        .find('input')
        .find({value: "Cool Title"})

       )
     })
     it('should call handelSubmit', () => { 
      
       const bTimerFormInstance = bTimerForm.instance()
       var stub = sinon.stub( bTimerFormInstance,'handelSubmit')
       bTimerForm
         .find('input')
         .first()
         .simulate('change', {target: {value:'Cool Title'}})
      bTimerForm 
        .find('Button')
        .find({ color: 'blue' }) 
        .simulate('click')
        expect(stub).to.be.called
        
      })
   })
   
    xit('should call handelFormSubmit with args timer forms id and title', () => { 
      const togableTimerForm = shallow(<TogableTimerForm  />)
      const tTFInstnace = togableTimerForm.instance()
      const timer = { }
      let fake = sinon.fake(tTFInstnace.handelFormSubmit(timer))
      const timerForm = shallow(<TimerForm onFormSubmit= { fake } />)
      console.log(timerForm.debug())// eslint-disable-line
      timerForm
         .find('input')
         .first()
         .simulate('change', {target: {value:'Cool Title'}})
      timerForm 
        .find('Button')
         .find({ color: 'blue' }) 
        .simulate('click')
     // expect(fake).to.be.called
      //expect(fake.withArgs(timerForm.props().id, timerForm.state().title).calledOnce).to.equal(true) 
    })

    it('should close form', () => { 
       var stub = sinon.stub()
       const timerForm = shallow(<TimerForm onFormClose = { stub } />)
       timerForm
        .find('Button')
        .find({ color: 'red' }) 
        .simulate('click')
        expect(stub).to.be.called
    })
})