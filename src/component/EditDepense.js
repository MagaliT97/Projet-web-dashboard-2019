import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import {Container,Form,Col,Button} from 'react-bootstrap';

export default class EditDepense extends Component {

    state = {
        categorie: '',
        description: '',
        montant:'',
        date:''
      };

    convertDate=(inputFormat)=> {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var d = new Date(inputFormat);
        return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
    }

     componentDidMount(){
        axios.get('http://localhost:4000/depense/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({ 
                  categorie: response.data.categorie, 
                  description: response.data.description,
                  montant: response.data.montant,
                  date: new Date(this.convertDate(response.data.date.substring(0,10)))})
            })
            .catch(function (error) {
                console.log(error);
            })
      }

    handleChange=(e)=>{
      this.setState({
        [e.target.id]: e.target.value,
      });
    }

    handleChangeDate = (date) => {
        this.setState({
          date:date
        });
    }

    handleSubmit= (e) =>{
      e.preventDefault();
      console.log(this.state);

      const obj = {
        categorie: this.state.categorie,
        description: this.state.description,
        montant: this.state.montant,
        date:this.state.date.toLocaleString().substring(0,10),
      };
      axios.post('http://localhost:4000/depense/update/'+this.props.match.params.id, obj)
          .then(res => {
          console.log(res.data);
          window.location.reload();
          })
      
      this.props.history.push('/DisplayDepense');
  }

  render() {
    return (
        <Container>
              <h4>Modifier la dépense</h4>
              <Form onSubmit={this.handleSubmit} >
              <Form.Group  controlId="categorie">
                <Form.Label>Choissisez une catégorie</Form.Label>
                <Form.Control value={this.state.categorie} as="select" onChange={this.handleChange}>
                  <option>Alimentation/Supermarché</option>
                  <option>Habillement</option>
                  <option>Internet/TV/Téléphone</option>
                  <option>Tabac</option>
                  <option>Impôts</option>
                  <option> Logement/immobilier</option>
                  <option>Sports/Loisirs/Culture</option> 
                  <option>Enfants</option>
                  <option>Transports</option> 
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="description">
              <Form.Label>
               Description
              </Form.Label>
                <Form.Control type="text" value={this.state.description} placeholder="Description" onChange={this.handleChange}/>
              </Form.Group>
              <Form.Row>
            <Form.Group as={Col} md="3" controlId="montant">
            <Form.Label>Montant</Form.Label>
            <Form.Control type="number" value={this.state.montant} placeholder="Montant(€)" onChange={this.handleChange} required />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="dateTransaction">
            <Form.Label>Date de la transaction</Form.Label>
             <DatePicker className="datepicker" dateFormat="dd/MM/yyyy" selected={this.state.date} onChange={this.handleChangeDate}/> 
          </Form.Group>
        </Form.Row>
          <Button variant="primary" type="submit" onChange={this.handleSubmit}>
          Modifier 
          </Button>

        </Form>
        </Container>
    )
  }
};