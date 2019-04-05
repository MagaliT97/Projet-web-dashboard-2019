import React, { Component } from 'react'
import {Container,Form,Col,InputGroup,FormControl,Button,ButtonGroup} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import isAfter from "date-fns/isAfter";
import axios from 'axios';

export default class FormBudget extends Component {
    state = {

        montant:'',
        StartDate:new Date(),
        //EndDate:'',
    };


    /*componentDidMount() {
        this.getDate();
    }*/
    
      getDate = () => {
        var today = new Date();
        //var date = today.getMonth() + 1 + "/" + today.getFullYear();
        console.log('TODAY')
        console.log(today);
        //console.log('DATE')
        //console.log(date);

        //var afterOneMonth = new Date(new Date(today).setMonth(today.getMonth()+1))
        this.setState({ 
            StartDate:today,
            //EndDate:afterOneMonth
        });
      };

    handleChangeMontant=(e)=>{
        this.setState({
            montant: e.target.value,
         })
    }

    handleChangeStartDate=(date)=> {
        this.setState({
          StartDate: date
        });
        
    }

    /*handleChangeEndDate=(date)=> {
        this.setState({
          EndDate: date
        });
    }*/

    handleSubmit= (e) =>{
        e.preventDefault();
        console.log('startDate');
        console.log(this.state);
        console.log('startDate');
        console.log(this.state.StartDate);

  
        const obj = {
          montant: this.state.montant,
          StartDate:this.state.StartDate.toLocaleString().substring(1,10),
          //EndDate:this.state.EndDate.toLocaleString().substring(1,10),
        };

          axios.post('http://localhost:4000/budget/add', obj)
              .then(res => {
                //if (res.dataStartData)
                console.log('res.data')
                console.log(res.data.montant)
                console.log(res.data.StartDate.substring(2))
                console.log(obj) 
              
              });
          
         
      }
  

  render() {
    return (
      <Container>
        <h4>Ajouter un budget mensuel </h4>
        
        <Form onSubmit={this.handleSubmit}>
            <Form.Row>
            <Form.Group as={Col} >
            <Form.Label>Date</Form.Label><br/>
            <DatePicker className="datepicker" dateFormat="dd/MM/yyyy"  selected={this.state.StartDate} onChange={this.handleChangeStartDate}/> 
            </Form.Group>
            {/* <Form.Group as={Col} md="12" >
            <Form.Label>Date de fin</Form.Label><br/>
            <DatePicker className="datepicker" dateFormat="dd/MM/yyyy"  selected={this.state.EndDate} onChange={this.handleChangeEndDate}/> 
            </Form.Group> */}
            </Form.Row>
            <Form.Row>
            <Form.Group as={Col} md="3"  controlId="montant">
            <Form.Label>Montant</Form.Label>
            <Form.Control type="number" placeholder="Montant(€)" required onChange={this.handleChangeMontant} />
            </Form.Group>
            </Form.Row>
            <Button variant="primary" type="submit">
          Ajouter
          </Button>
        </Form>
      </Container>
    )
  }
}