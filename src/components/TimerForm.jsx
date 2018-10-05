import React from 'react'
import PropTypes from 'prop-types'
import { Card, Form , Button } from 'semantic-ui-react'

export default class TimerForm extends React.Component {
  render () {
     const submitText = this.props.title ? 'Update': 'Create'
    return (
      
      <Card>
        <Card.Content>
          <Form>
            <Form.Field>
              <label>Title</label>
               <input type = 'text' defaultValue = {this.props.title } />
           </Form.Field>
           <Form.Field>
              <label>Project</label>
               <input type = 'text' defaultValue = {this.props.project } />
           </Form.Field>
           </Form>
           <Button basic color= 'blue'>
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

