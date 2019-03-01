import React from 'react'
import {Card,Button,Form,Col} from 'react-bootstrap'
import './../css/TodoList.css';
import '../css/TodoItems.css';
import TodoItems from '../component/TodoItems'
import { Scrollbars } from 'react-custom-scrollbars';

class TodoList extends React.Component {
 
  render() {
    return (
        <Card className="card-progressbar2"  bg="light" style={{ width: '22rem'}}>
            <Card.Body>
            <Card.Title>Todo List</Card.Title>
            <Form className="todoListMain" onSubmit={this.props.addItem}>
            <Form.Row>
              <Col>
            <Form.Control type="text" placeholder="Ajouter une note" 
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput} />
            </Col>
            <Col>
            <Button variant="primary" type="submit">Créer</Button>
            </Col>
            </Form.Row>
            </Form>
            <Scrollbars style={{height:70}}>
            <TodoItems  entries={this.props.entries} deleteItem={this.props.deleteItem} />
            </Scrollbars>
          </Card.Body>
        </Card>
    )
  }
}
export default TodoList;