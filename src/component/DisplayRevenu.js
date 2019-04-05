import React, { Component } from 'react'
import '../css/FormProject.css'
import {Container} from 'react-bootstrap';
import axios from 'axios';
import TableRowRevenu from './TableRowRevenu';

export default class DisplayDepense extends Component {
    state={
        revenu:[]
    }

    componentDidMount(){
      axios.get('http://localhost:4000/revenu')
        .then(response => {
          console.log('STATE')
          console.log(response.data)

        var i=0;
        var copy = [];
        for (i=0 ; i < response.data.length ; i++){
          copy.push({_id:response.data[i]._id, description:response.data[i].description, montant:response.data[i].montant+"€", date:response.data[i].date.substring(0,10)});
        }
        console.log('copy');
        console.log(copy);

          this.setState({revenu: copy });
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    tabRow(){
      return this.state.revenu.map(function(object, i){
          return <TableRowRevenu obj={object} key={i} />;
      });
    }

  render() {
    return (
        <Container>
          <h3 align="center">Affichage des revenus</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Description</th>
                <th>Montant</th>
                <th>Date</th>
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