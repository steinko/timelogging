import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { configure, shallow } from 'enzyme'
import TimerForm from '../../src/components/TimerForm'
configure({ adapter: new Adapter() })

describe('Unit test TimerForm', () => {
  var timerForm
  var title = 'Learn React'

  beforeEach(() => {
    timerForm = shallow(<TimerForm title = {title}/>)
  })


  it('should conatin class card', () => {
    expect(timerForm.find('Card').exists()).to.equal(true)
  })
   it('should contain form', () => {
    expect(timerForm.find('Form').exists()).to.equal(true)
  })
    xit("should contain 'Title' in a label", () => {
    expect(timerForm.find('label').to.contain('Title')).to.equal(true)
  })

   xit("should contain 'Project' in a label", () => {
    expect(timerForm.find('label').to.contain('Project')).to.equal(true)
  })

   xit("should contain a red cancel button", () => {
    expect(timerForm
      .find('Button')
      .find([ color= 'red' ]) // eslint-disable-line
      .to.contain('Cancel'))
      .to.equal(true)
  })

   xit("should contain a blue create button", () => {
    const blueCreateButton = shallow(<TimerForm title = ''/>)
    expect(blueCreateButton
      .find('Button')
      .find([ color= 'blue' ]) // eslint-disable-line
      .to.contain('Create'))
      .to.equal(true)
  })

  xit("should contain a blue update button", () => {
    const blueCreateButton = shallow(<TimerForm title = 'Update'/>)
    expect(blueCreateButton
      .find('Button')
      .find([ color= 'blue' ]) // eslint-disable-line
      .to.contain('Update')).to.equal(true)
  })

  xit('should conatin  default value Learn React', () => {
    expect(timerForm
      .find('label')
      .to.contain('Title')
      .containsMatchingElement(<input defaultValue={title} />)).to.equal(true)
  })

   xit('should conatin  default value Learn React', () => {
    expect(timerForm.
      find('label').to.contain('Project').containsMatchingElement(<input defaultValue={title} />)).to.equal(true)
  })
})
