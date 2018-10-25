// @flow
import * as React from 'react'
import { Card, Form , Button, Label  } from 'semantic-ui-react'
import uuidv4 from 'uuid/v4'

type Props = { id: ?uuidv4,
               title: ?string,
               onFormSubmit: any ,
               onFormClose:any 
              }

type State = { title: string }

/**
 * Displayes the time's edit form
 */
export default class TimerForm extends React.Component <Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      title: this.props.title || ''
     }
   }

  handelTitleChange = (e:any) => { 
      this.setState(  
        { title: e.target.value }
      )
  }

  handelSubmit = () => {
   // console.log(this.props.onFormSubmit.debug())
    this.props.onFormSubmit({
      id: this.props.id,
      title: this.state.title
      })
    }
      
  render()  {
     const submitText = this.props.id ? 'Update': 'Create'
     return (
      
      <Card>
        <Card.Content>
          <Form>
            <Form.Field>
              <Label>Title</Label>
              <input type = 'text' id = 'titleField'
                value = { this.state.title } 
                onChange = { this.handelTitleChange } />
           </Form.Field>
           </Form>

          <Button 
            basic 
            color= 'blue'
            onClick = { this.handelSubmit } >
            { submitText }
          </Button>

          <Button 
            basic 
            color = 'red'
            onClick = { this.props.onFormClose }
          >
            Cancel
          </Button>
        </Card.Content>
      </Card>
    )
  }
}
