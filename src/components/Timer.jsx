import React from 'react'
import { Card } from 'semantic-ui-react'
import PropTypes from 'prop-types'

export default class Timer extends React.Component {
  render () {
    return (
      <Card centered>
        <Card.Content>
          <Card.Header>
               { this.props.title } // eslint-disable-line
         </Card.Header>
          <Card.Meta>
               { this.props.project } // eslint-disable-line
          </Card.Meta>
          <Card.Description textAligment =  'center'>
            <h2>
             02:29:46
           </h2>
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

Timer.propType = {
  title: PropTypes.string,
  project:PropTypes.string
  }
