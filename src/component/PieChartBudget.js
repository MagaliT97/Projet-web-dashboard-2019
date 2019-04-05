import React, { Component }  from 'react';
import {Card} from 'react-bootstrap';
import { PieChart, Pie, Cell,Label,Text} from 'recharts';
import '../css/PieChartBudget.css'

var displayRevenu;
var displayBudget;
var displayTitle;
var BudgetActuel;
var pourcentageString=null;
 



class PieChartBudget extends Component {
    
    solde=(revenu,budget)=>{
      return revenu-budget;
    }

    pourcentage=(depense,budget)=>{
      if(!budget){
        return null
      }
      else{
        return Math.round((depense/budget)*100)
      }
    }

    pourcentageColor=(pourcentage)=>{
      if(pourcentage<60){
        return "#00C49F"
      }
      else if(pourcentage>59&&pourcentage<80){
        return "#ffa500"
      }
      else{
        return "#FF0000"
      }
    }

    //Detect if a variable is not defined
    DetectBudgetUndefined=(budget,depense)=>{
      if(!budget){
        pourcentageString=""
        displayBudget="Ajouter un budget"
        displayTitle="Veuillez saisir l'/les information(s) manquante(s) :)"
      }
      else{
        pourcentageString="%"
        BudgetActuel="Budget Actuel"
        displayBudget=null;
        displayTitle=null;
        return budget
      }
    }

    DetectRevenuUndefined=(revenu)=>{
      if (!revenu){
        displayTitle="Veuillez saisir l'/les information(s) manquante(s) :)"
        displayRevenu="Ajouter un revenu"
      }
      else{
        displayRevenu=null
        return revenu
      }
    }

    DetectDepenseUndefined=(depense)=>{
      if (!depense){
        displayTitle="Veuillez saisir l'/les information(s) manquante(s) :)"
        BudgetActuel=null;
      }
    }

    render() {
      const COLORS = [this.pourcentageColor(this.pourcentage(this.props.montantDepense,this.props.montantBudget)),'#F8F8F8'];
      const data = [
        { name: 'total_depense', value: this.props.montantDepense },
         {name: 'budget', value: this.props.montantBudget-this.props.montantDepense}
      ]
      {this.DetectDepenseUndefined(this.props.montantDepense)}
      return(
          <Card bg="Secondary" style={{ width: '23rem'}}>
            <Card.Body>
              <Card.Title>{BudgetActuel}{displayTitle}</Card.Title>
              <PieChart width={320} height={210}  >
              <Pie
                  data={data}
                  cx={140}
                  cy={88}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  
                  dataKey="value"
                  >
                  <Label value={this.pourcentage(this.props.montantDepense,this.props.montantBudget)+pourcentageString} position="center"/>
                  {
                      data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                  }
              </Pie>  
              </PieChart>
               <Card.Text>
                  Revenu : <span className="data-user"> {this.DetectRevenuUndefined(this.props.montantRevenu)} 
                  {displayRevenu}</span> <br/>
                  Budget prévisionnel : <span className="data-user">{this.DetectBudgetUndefined(this.props.montantBudget)}
                  {displayBudget}</span> <br/>
                  Solde prévisionnel : <span className="data-user">{this.solde(this.props.montantRevenu,this.props.montantBudget)}</span><br/> 
              </Card.Text>
            </Card.Body>
          </Card>

      );
  }
}

export default PieChartBudget;