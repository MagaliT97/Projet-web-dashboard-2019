import React from 'react'
import {Card,ProgressBar} from 'react-bootstrap'
import './../css/ProgressBarComponent.css';

var pourcentageBar;
var displayTitle;
var displayDepense;
var montantDepense;

class ProgressionBarComponent extends React.Component {
  solde=(revenu,depense)=>{
    return revenu-depense;
  }

  //Detect if a variable is not defined
  DetectVariableUndefined=(depense,revenu)=>{
    if(!depense && !revenu){
      displayTitle="Veuillez saisir l'/les information(s) manquante(s) :)"
      montantDepense="Ajouter une dépense"
      displayDepense=null
      pourcentageBar=0
      
    }
    else if (!revenu){
      pourcentageBar=0 
      montantDepense=depense
      displayDepense=null;
      displayTitle="Veuillez saisir l'/les information(s) manquante(s) :)"
    }
    else if(!depense){
      displayTitle="Veuillez saisir l'/les information(s) manquante(s) :)"
      displayDepense=null
      montantDepense="Ajouter une dépense"
    }
    else{
      displayDepense="Dépenses"
      displayTitle=null
      montantDepense=depense
      pourcentageBar = Math.round((this.props.montantDepense/this.props.montantRevenu)*100);
    }
  }

  variantColor=(pourcentage)=>{
    if(pourcentage<60){
      return "success"
    }
    else if(pourcentage>59&&pourcentage<80){
      return "warning"
    }
    else{
      return "danger"
    }
  }

  render() {
    {this.DetectVariableUndefined(this.props.montantDepense,this.props.montantRevenu)}
    const progressInstance = <ProgressBar now={pourcentageBar} variant={this.variantColor(pourcentageBar)} label={`${pourcentageBar}%`}/>;

    return (
      <div className="card-progressbar1">
        <Card  bg="light" style={{ width: '22rem'}}>
            <Card.Body>
            <Card.Title>{displayDepense}{displayTitle}</Card.Title>
            <div className="texte">
            Dépenses réelles à ce jour <span className="restant">Restant</span><br/>
            {montantDepense+"€"}
            <span className="restant"> {this.solde(this.props.montantRevenu,this.props.montantDepense)+"€"} </span>
            </div>
            <div className="progressInstance">{progressInstance} </div>
          </Card.Body>
        </Card>
      </div>
    )
  }
}
export default ProgressionBarComponent;