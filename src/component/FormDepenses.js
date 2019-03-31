import React, { Component } from 'react'
import {Container,Form,Col,InputGroup,FormControl,Button,ButtonGroup} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../css/FormDepenses.css';
import axios from 'axios';

var displayDatePicker;
var label_transaction;

export default class FormDepenses extends Component {

  
  state = {
    startDate: new Date(),
    show:true,
    LastInput:false,

    categorie:'',
    description:'',
    montant:'',
    date:'',
  };

  handleChange= (e) =>{
    this.setState({
       [e.target.id]: e.target.value,
       date:this.state.startDate
    })
  }
  handleSubmit= (e) =>{
      e.preventDefault();
      console.log(this.state);

      const obj = {
        categorie: this.state.categorie,
        description: this.state.description,
        montant: this.state.montant,
        date:this.state.date
      };
      axios.post('http://localhost:4000/user/add', obj)
          .then(res => console.log(res.data));
      
      this.setState({
        categorie: '',
        description: '',
        montant: '',
        date:''
      })
  }


  /*On affiche juste la date dans le cas ou l'utilisateur ne coche pas "transaction récurrente" */

  Display= () =>{
    if(this.state.show===true){
      displayDatePicker= <DatePicker className="datepicker" dateFormat="dd/MM/yyyy" selected={this.state.startDate} onChange={this.handleChangeDate}/> 
      label_transaction= <Form.Label>Date de la transaction</Form.Label>
    }
    else{
      displayDatePicker=null;
      label_transaction=null;
    }
  }

  handleChangeDate = (date) => {
    this.setState({
      startDate: date,
      date:date
    });
    //this.toggleCalendarButton()
  }
  toggleCalendar= () => {
    if(this.state.show===true){
      this.setState({
        show:false
      })
    }
    else{
      this.setState({
        show:true
      })
    }
    this.Display();
    console.log(this.state.show)
    
  }
  displayLastInput= ()=>{
      return(
        <div>
        <Form.Control type="number" placeholder="2" required />
        </div>
      );
  }

  ChangeStateLastButton= () =>{
      this.setState({
        LastInput:true
      })
  }

  RemoveLastInput = ()=>{
    this.setState({
      LastInput:false
    })

  }

  displayTransactionModif = () =>{
    return(
      <div>
         <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon3">
                Première occurence le:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <DatePicker className="datepicker2" dateFormat="dd/MM/yyyy h:mm aa" selected={this.state.startDate} onChange={this.handleChangeDate}  
            showTimeSelect
            timeFormat="HH:mm"
            timeCaption="time"/>
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon3">
                Répétez chaque:
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control type="number" placeholder="1" />
          </InputGroup>

          <ButtonGroup  className="mt-3">
            <Button>Jour</Button>
            <Button>Semaine</Button>
            <Button>Mois</Button>
            <Button>Année</Button>
         </ButtonGroup> <br/>

         <ButtonGroup  className="mt-3">
            <Button onClick={this.RemoveLastInput}>Pour toujours</Button>
            <Button onClick={this.ChangeStateLastButton}>Nombre de fois</Button>
         </ButtonGroup> 
          <br/><br/>
         {this.state.LastInput===true && this.displayLastInput()}
         <br/>
      </div>
    )
  }

  render() {
    this.Display();
    return (
        <Container>
              <h4>Ajouter une dépense</h4>
              <Form onSubmit={this.handleSubmit} >
              <Form.Group  controlId="categorie">
                <Form.Label>Choissisez une catégorie</Form.Label>
                <Form.Control as="select" onChange={this.handleChange}>
                  <option>Maison/Habitat</option>
                  <option>Obligation financière</option>
                  <option>Sports/Loisirs/Culture</option> 
                  <option>Divertissement</option>
                  <option>Transports</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="description">
              <Form.Label>
               Description
              </Form.Label>
                <Form.Control type="text" placeholder="Description" onChange={this.handleChange}/>
              </Form.Group>
              <Form.Row>
            <Form.Group as={Col} md="3" controlId="montant">
            <Form.Label>Montant</Form.Label>
            <Form.Control type="number" onChange={this.handleChange} placeholder="Montant(€)" required />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="dateTransaction">
            {label_transaction}
            {displayDatePicker}
          </Form.Group>
        </Form.Row>
          <Form.Check onClick={this.toggleCalendar}
          label="Cette transaction est récurrente"
          />

          {this.state.show===false&&this.displayTransactionModif()}

          <Button variant="primary" type="submit">
          Ajouter
          </Button>

        </Form>
        </Container>
    )}
}