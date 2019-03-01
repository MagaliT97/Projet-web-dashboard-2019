import React, { Component } from 'react'
import '../css/FormProject.css'
import {Container,Form,Button} from 'react-bootstrap';

export default class FormProject extends Component {
    state={
        title: '',
        content:''
    }
    handleChange= (e) =>{
        this.setState({
           [e.target.id]: e.target.value
        })
    }
    handleSubmit= (e) =>{
        e.preventDefault();
        console.log(this.state);
    }

  render() {
    return (
      <div className="form-project">
          <Container>
              <h4>Nouveau projet</h4>
              <Form onSubmit={this.handleSubmit} style={{ width: '40rem'}}>
              <Form.Group controlId="formGroupEmail">
             <Form.Label>Titre</Form.Label>
             <Form.Control type="title" id="title" placeholder="" onChange={this.handleChange}/>
             </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" id="content" rows="3" onChange={this.handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
             Créer
            </Button>
           </Form>

          </Container>
        
      </div>
    )
  }
}
