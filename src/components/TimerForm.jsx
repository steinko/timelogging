// @flow
import * as React from 'react'
import { Card, Form , Button, Label , Input } from 'semantic-ui-react'
import uuidv4 from 'uuid/v4'

type Props = { id: uuidv4,
               title: string,
               project: string,
               onFormSubmit: any }
type State = { title: string }

//Displayes the time's edit form
export default class TimerForm extends React.Component <Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      title: this.props.title || ''
    }
    console.log(this.state.title)
  }

  handelTitleChange = (e:any) => { 
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
     const submitText = this.props.id ? 'Update': 'Create'
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


