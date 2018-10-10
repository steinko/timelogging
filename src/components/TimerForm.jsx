import React from 'react'
import PropTypes from 'prop-types'
import { Card, Form , Button, Label , Input } from 'semantic-ui-react'

//Displayes the time's edit form
export default class TimerForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: this.props.title || ''
    }
    console.log(this.state.title)
  }

  handelTitleChange = (e) => { 
      this.setState(  
        { title: e.target.value }
      )
  }

  handelSubmit = () => {
    this.props.onFormSubmit({
      title: this.state.title
      })
    }
      

  render () {
     const submitText = this.props.title ? 'Update': 'Create'
    return (
      
      <Card>
        <Card.Content>
          <Form>
            <Form.Field>
              <Label>Title</Label>
              <Input type = 'text' 
                value = { this.props.title } 
                onChange = { this.handelTitleChange } />
           </Form.Field>

           <Form.Field>
              <Label>Project</Label>
              <Input type = 'text' defaultValue = {this.props.project } />
           </Form.Field>
           </Form>

          <Button 
            basic 
            color= 'blue'
            onClick = { this.handelSubmit }
          >
            { submitText }
          </Button>

          <Button basic color = 'red'>
            Cancel
          </Button>
        </Card.Content>
      </Card>
    )
  }
}

TimerForm.propTypes = {
  title: PropTypes.string,
  project: PropTypes.string
}

