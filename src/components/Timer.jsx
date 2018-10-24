// @flow
import * as React from 'react'
import { Card, Button, Grid } from 'semantic-ui-react'
import uuidv4 from 'uuid/v4'


type Props = { 

  /**
   * Identifies
   */
  id: uuidv4,

  /**
   * Titels
   */
  title: string,

  /**
   * Activate edit timer
   */
  onEditClick: any
  
  }


/** 
* Displays a given timer
*/
export default class Timer extends React.Component <Props> { 
 

  render () {
    return (
      <Card centered >
        <Card.Content>
          <Card.Header>
            { this.props.title }
          </Card.Header>


          <Card.Description
             textAlign=  'center'
          >
            <h2>
              02:29:46
            </h2>
          </Card.Description>

          <Card.Content extra>
            <Grid>
               <Grid.Column 
                 floated = 'right' 
                 width =   { 1 }
               >
                  <Button 
                     icon = 'edit' 
                     onClick= { this.props.onEditClick } 
                  />
              </Grid.Column >
              
               <Grid.Column 
                 icon = 'trash'  
                 floated = 'right' 
                 width =   { 1 } 
               > 
               
              </Grid.Column>
            </Grid>
          </Card.Content>
        </Card.Content>
        
        <Button 
          basic 
          color = 'blue'
        >
           Start
        </Button>
         
      </Card>
    )
  }
}


