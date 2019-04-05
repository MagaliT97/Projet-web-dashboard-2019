import React, { Component } from 'react'
import '../css/FormProject.css'
import {Container,Row,Col} from 'react-bootstrap';
import axios from 'axios';
import TableRowDepense from './TableRowDepense';

export default class DisplayDepense extends Component {
    state={
        depense:[],
    }

    componentDidMount(){
      axios.get('http://localhost:4000/depense')
        .then(response => {
          console.log('STATE')
          console.log(response.data)

        var i=0;
        var copy = [];
        for (i=0 ; i < response.data.length ; i++){
          copy.push({_id:response.data[i]._id, categorie:response.data[i].categorie, description:response.data[i].description, montant:response.data[i].montant+"€", date:response.data[i].date.substring(0,10)});
        }
        console.log('copy');
        console.log(copy);

            this.setState({depense: copy });
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    handleChangeDate=(date)=> {
      this.setState({
        sort_date: date
      });

    }

    tabRow(){
      return this.state.depense.map(function(object, i){
          return <TableRowDepense obj={object} key={i} />;
      });
    }

  render() {
    return (
      <div>
        <Container>
        <h3 align="center">Affichage des dépenses</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Catégorie</th>
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
      </div>
    );
  }
}