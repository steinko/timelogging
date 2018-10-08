import React from 'react'
import { Card, Icon, Button, Grid } from 'semantic-ui-react'
import PropTypes from 'prop-types'

// Displays a given timer
export default class Timer extends React.Component {
  render () {
    return (
      <Card centered
         header= { this.props.title }
         meta= { this.props.project }
      >
    <Card.Content>
          <Card.Description textAligment =  'center'>
            <h2>
             02:29:46
           </h2>
          </Card.Description>

          <Card.Content extra>
            <Grid>
               <Grid.Column floated = 'right' width =   { 1 }>
                <Icon  name = 'edit' />
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

Timer.propType = {
  title: PropTypes.string,
  project:PropTypes.string
  }
