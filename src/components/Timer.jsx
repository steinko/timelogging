// @flow
import * as React from 'react'
import { Card, Icon, Button, Grid } from 'semantic-ui-react'


type Props = { 
  title: string,
  project: string,
  onEditClick: any
  
  }

// Displays a given timer
export default class Timer extends React.Component<Props> { 
  render () {
    return (
      <Card centered >
        <Card.Content>
          <Card.Header>
            { this.props.title }
          </Card.Header>

          <Card.Meta>
            { this.props.project }
          </Card.Meta>

          <Card.Description textAligment =  'center'>
            <h2>
              02:29:46
            </h2>
          </Card.Description>

          <Card.Content extra>
            <Grid>
               <Grid.Column floated = 'right' width =   { 1 }>
                 <Button icon = 'edit' onClick= { this.props.onEditClick } />
              </Grid.Column>
              
               <Grid.Column floated = 'right' width =   { 1 } > 
                 <Icon name = 'trash' />
              </Grid.Column>
            </Grid>
          </Card.Content>
        </Card.Content>
        
        <Button basic color = 'blue'>
           Start
        </Button>
         
      </Card>
    )
  }
}


