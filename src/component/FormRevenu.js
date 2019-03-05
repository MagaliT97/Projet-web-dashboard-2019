import React, { Component } from 'react'
import {Container,Form,Col,InputGroup,FormControl,Button,ButtonGroup} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../css/FormDepenses.css';

var displayDatePicker;
var label_transaction;

export default class FormRevenu extends Component {

    state = {
        startDate: new Date(),
        show:true,
        LastInput:false,
      };
    
      Display= () =>{
        if(this.state.show==true){
          displayDatePicker= <DatePicker className="datepicker" dateFormat="dd/MM/yyyy" selected={this.state.startDate} onChange={this.handleChange}/> 
          label_transaction= <Form.Label>Date de la transaction</Form.Label>
        }
        else{
          displayDatePicker=null;
          label_transaction=null;
        }
    
      }
    
      handleChange = (date) => {
        this.setState({
          startDate: date
        });
        this.toggleCalendarButton()
      }
      toggleCalendar= () => {
        if(this.state.show==true){
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
                <DatePicker className="datepicker2" dateFormat="dd/MM/yyyy h:mm aa" selected={this.state.startDate} onChange={this.handleChange}  
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
             {this.state.LastInput==true && this.displayLastInput()}
             <br/>
          </div>
        )
      }
    

  render() {
    this.Display();
    return (
       <Container>
       <h4>Ajouter un revenu</h4>
        <Form>
       <Form.Group controlId="description">
              <Form.Label>
               Description
              </Form.Label>
                <Form.Control type="text" placeholder="Description"/>
              </Form.Group>
              <Form.Row>
            <Form.Group as={Col} md="3" controlId="montant">
            <Form.Label>Montant</Form.Label>
            <Form.Control type="number" placeholder="Montant(€)" required />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="dateTransaction">
            {label_transaction}
            {displayDatePicker}
          </Form.Group>
        </Form.Row>
          <Form.Check onClick={this.toggleCalendar}
          label="Cette transaction est récurrente"
          />

          {this.state.show==false&&this.displayTransactionModif()}

          <Button variant="primary" type="submit">
          Ajouter
          </Button>

        </Form>
      
       </Container>
    )
  }
}
