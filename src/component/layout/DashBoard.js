import React, { Component } from 'react'
import {Row,Col,Container} from 'react-bootstrap'
import PieChartCategory from '../PieChartCategory';
import GraphCurve from '../GraphCurve';
import './../../css/DashBoard.css'
import PieChartBudget from '../PieChartBudget';
import ProgressionBarComponent from '../ProgressBarComponent';
import TodoList from '../TodoList';
import Calendrier from '../Calendrier';

class DashBoard extends Component {
  
  state = {
    items: [],
    currentItem: {text:'', key:''},
  }

  handleInput = (e) => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }
  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' }
      })
    }
  }
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }



  render() {
    return (
      <div>
          <Container className="main-content">
            <Row>
                <Col md={4}> <PieChartCategory/> </Col>
                <Col md={8}> <GraphCurve/> </Col>
            </Row>
            <Row className="Second-Row">
                <Col md={4}><PieChartBudget/></Col>
                <Col className="row2-col2" md={4} >
                  <Row className="progress1">
                    <ProgressionBarComponent/>
                   
                  </Row>
                  <Row className="progress2">
                    <TodoList  addItem={this.addItem}
                                   inputElement={this.inputElement}
                                   handleInput={this.handleInput}
                                    currentItem={this.state.currentItem}
                                    entries={this.state.items}
                                    deleteItem={this.deleteItem}/>
                  </Row>
                </Col>
                <Col md={4}>
                   <Calendrier/>
                </Col>
            </Row>
        </Container>
        </div>
        
    )
  }
}
export default DashBoard;
