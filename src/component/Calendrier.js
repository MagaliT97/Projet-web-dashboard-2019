import React, { Component } from 'react'
import {Card} from 'react-bootstrap'
import Calendar from 'react-calendar';
import './../css/Calendrier.css';

export default class Calendrier extends Component {
    state = {
        date: new Date(),
      }

onChange = date => this.setState({ date })
  render() {
    return (
      <div>
          <Card className="calendar" bg="light">
            <Card.Body>
            <Card.Title>Calendrier</Card.Title>
            <Calendar 
                onChange={this.onChange}
                value={this.state.date}
                />
          </Card.Body>
        </Card>
      </div>
    )
  }
}
