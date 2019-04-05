import React, { Component } from 'react'
import {Container,Form,Col,InputGroup,FormControl,Button,ButtonGroup} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../css/FormDepenses.css';
import axios from 'axios';

var displayDatePicker;
var label_transaction;

export default class FormRevenu extends Component {

    state = {
        show:true,
        LastInput:false,

        description:'',
        montant:'',
        startDate:new Date(),
      };

    handleChange= (e) =>{
      this.setState({
          [e.target.id]: e.target.value,
      })
    }

    handleChangeDate = (date) => {
      this.setState({
        startDate: date
      });
    }

    handleSubmit= (e) =>{
      e.preventDefault();
      console.log(this.state);

      const obj = {
        description: this.state.description,
        montant: this.state.montant,
        date:this.state.startDate.toLocaleString().substring(0,10),
      };
      axios.post('http://localhost:4000/revenu/add', obj)
          .then(res => {
            console.log('add res')
            console.log(res.data)});
          
      
    }

  /**
   *On affiche juste la date dans le cas ou l'utilisateur ne coche pas "transaction récurrente" 
   */
    
  Display= () =>{
        if(this.state.show===true){
          displayDatePicker=  <DatePicker className="datepicker" dateFormat="dd/MM/yyyy"  
          selected={this.state.startDate} onChange={this.handleChangeDate}/> 
          label_transaction= <Form.Label>Date de la transaction</Form.Label>
        }
        else{
          displayDatePicker=null;
          label_transaction=null;
        }
    
  }

      /**
       * Fonction qui est appelée quand on coche -> cette transaction est récurrente
       * Détecte si on a coché ou pas en mettant à jour le state de show
       */

      toggleCalendar= () => {
        if(this.state.show===true){
          console.log("Je suis dans le cas ou c'est true")
          this.setState({
            show:false,
          })
        }
        else{
          console.log("Je suis dans le cas ou c'est pas true")
          this.setState({
            show:true,
          })
        }
        this.Display();
        console.log("Etat après avoir appuyé "+this.state.show) 
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
    console.log("Etat au début "+this.state.show)
    this.Display();
    return (
       <Container>
       <h4>Ajouter un revenu</h4>
        <Form onSubmit={this.handleSubmit}>
       <Form.Group controlId="description">
              <Form.Label>
               Description
              </Form.Label>
                <Form.Control type="text" placeholder="Description" onChange={this.handleChange}/>
              </Form.Group>
              <Form.Row>
            <Form.Group as={Col} md="3" controlId="montant">
            <Form.Label>Montant</Form.Label>
            <Form.Control type="number" placeholder="Montant(€)" required onChange={this.handleChange} />
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
    )
  }
}