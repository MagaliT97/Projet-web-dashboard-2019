import React from 'react'
import {Card,ProgressBar} from 'react-bootstrap'
import './../css/ProgressBarComponent.css';

const now = 60;

const progressInstance = <ProgressBar now={now} variant="warning" label={`${now}%`}/>;

class ProgressionBarComponent extends React.Component {
  render() {

    return (
      <div className="card-progressbar1">
        <Card  bg="light" style={{ width: '22rem'}}>
            <Card.Body>
            <Card.Title>Dépenses</Card.Title>
            <div className="texte">
            Dépenses réelles à ce jour <span className="restant">Restant</span><br/>
            2416€
            <span className="restant">1104€</span>
            </div>
            <div className="progressInstance">{progressInstance} </div>
          </Card.Body>
        </Card>
      </div>
    )
  }
}
export default ProgressionBarComponent;