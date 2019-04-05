import React, { Component } from 'react'
import '../css/FormProject.css'
import {Container} from 'react-bootstrap';
import axios from 'axios';
import TableRowBudget from './TableRowBudget';

export default class DisplayBudget extends Component {
    state={
        budget:[]
    }

    componentDidMount(){
      axios.get('http://localhost:4000/budget')
        .then(response => {

        var i=0;
        var copy = [];
        var date;
        console.log('STATE')
        console.log(response.data)
        console.log(response.data[0].StartDate)

        var j = response.data[0].StartDate.substring(1);
        console.log(j)
        for (i=0 ; i < response.data.length ; i++){
          copy.push({_id:response.data[i]._id, StartDate:response.data[i].StartDate.substring(2), montant:response.data[i].montant+"€"});
        }
        console.log('copy');
        console.log(copy);

          this.setState({budget: copy });
          console.log('RESPONSE.DATA')
          console.log(response.data)
          console.log('budget')
          console.log(this.state)


        })
        .catch(function (error) {
          console.log(error);
        })
    }

    tabRow(){
      return this.state.budget.map(function(object, i){
          return <TableRowBudget obj={object} key={i} />;
      });
      
    }
    

  render() {
    return (
        <Container>
          <h3 align="center">Affichage des budgets</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Montant</th>
                <th>Date</th>
                {/* <th>Date Fin</th> */}
                <th  colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
      </Container>
    );
  }
}