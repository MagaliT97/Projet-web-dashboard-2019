import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import {Container,Form,Col,Button} from 'react-bootstrap';

export default class EditBudget extends Component {

    state = {
        montant:'',
        //StartDate:'',
        //EndDate:''
      };

    /*convertDate=(inputFormat)=> {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var d = new Date(inputFormat);
        return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
    }*/

     componentDidMount(){
        axios.get('http://localhost:4000/budget/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({ 
                  montant: response.data.montant})
                  console.log('RES.DATA')
                  console.log(response.data)

                  //StartDate: new Date(this.convertDate(response.data.StartDate.substring(0,10))),
                  //EndDate: new Date(this.convertDate(response.data.EndDate.substring(0,10)))})
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

    /*handleChangeDate = (date) => {
        this.setState({
          StartDate:date,
          EndDate:date
        });
    }*/

    handleSubmit= (e) =>{
      e.preventDefault();
      console.log(this.state);

      const obj = {
        montant: this.state.montant,
        //StartDate:this.state.StartDate.toLocaleString().substring(0,10),
        //EndDate:this.state.EndDate.toLocaleString().substring(0,10)
      };
      axios.post('http://localhost:4000/budget/update/'+this.props.match.params.id, obj)
          .then(res => {
          //console.log(res.data);
          window.location.reload();
          })
      
      this.props.history.push('/DisplayBudget');
  }

  render() {
    return (
        <Container>
              <h4>Modifier le budget</h4>
              <Form onSubmit={this.handleSubmit} >
              <Form.Row>
            <Form.Group as={Col} md="3" controlId="montant">
            <Form.Label>Montant</Form.Label>
            <Form.Control type="number" value={this.state.montant} placeholder="Montant(€)" onChange={this.handleChange} required />
          </Form.Group>
          {/* <Form.Group as={Col} md="3" controlId="dateTransaction">
            <Form.Label>Date debut</Form.Label>
             <DatePicker className="datepicker" dateFormat="dd/MM/yyyy" selected={this.state.StartDate} onChange={this.handleChangeDate}/> 
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="dateTransaction">
            <Form.Label>Date fin</Form.Label>
             <DatePicker className="datepicker" dateFormat="dd/MM/yyyy" selected={this.state.EndDate} onChange={this.handleChangeDate}/> 
          </Form.Group> */}
        </Form.Row>
          <Button variant="primary" type="submit" onChange={this.handleSubmit}>
          Modifier 
          </Button>

        </Form>
        </Container>
    )
  }
};