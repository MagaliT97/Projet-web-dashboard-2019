import React, { Component } from 'react'
import {Card} from "react-bootstrap";
import '../css/PieChartCategory.css'
import { PieChart, Pie, Sector, Cell,Legend} from 'recharts';
import axios from 'axios';

export default class PieChartCategory extends Component {


  

  state = {
  
    data : [{name: 'Divertissement', value: 50},
          {name: 'Maison/Habitat', value: 50}, 
          {name: 'Obligation financière', value: 50},
          {name: 'Sports/Loisirs/Culture', value: 50}, 
          {name: 'Transports', value: 50}]
  };
  


  componentDidMount(){
    axios.get('http://localhost:4000/user/piechart/')
        .then(response => {

          let copy = [{name: 'Divertissement', value: response.data[0].total},
          {name: 'Maison/Habitat', value: response.data[1].total}, 
          {name: 'Obligation financière', value: response.data[2].total},
          {name: 'Sports/Loisirs/Culture', value: response.data[3].total}, 
          {name: 'Transports', value: response.data[4].total}];

            this.setState({ 
              data : copy,
            });
          
            console.log('response.data')
            console.log(response.data);
            
            console.log('this.state')
            console.log(this.state)

            console.log('this.data.value')
            console.log(this.state.data);

          })
        .catch(function (error) {
            console.log(error);
        })
  }

  
 
  
COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#413EA0'];

style = {
top: 40,
left: 176,
lineHeight: '24px',
};

RADIAN = Math.PI / 180;                    
renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
const x  = cx + radius * Math.cos(-midAngle * this.RADIAN);
const y = cy  + radius * Math.sin(-midAngle * this.RADIAN);

return (
<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
{`${(percent * 100).toFixed(0)}%`}
</text>
);
};



  render() {
    return (
      <div>
          <Card className="card-credit" bg="Secondary" style={{ width: '23rem'}}>
          <Card.Body>
            <Card.Title>Catégorie de dépenses</Card.Title>
            <Card.Subtitle>Juin</Card.Subtitle>
            <PieChart width={400} height={190}>
        <Pie
          data={this.state.data}
          cx={81}
          cy={90}
          labelLine={false}
          label={this.renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value">
          {
            this.state.data.map((entry, index) => <Cell key={`cell-${index}`} fill={this.COLORS[index % this.COLORS.length]} />)
          }
        </Pie>
        <Legend iconSize={10} width={180} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={this.style} />
        </PieChart>
          </Card.Body>
        </Card>
      </div>
    )
  }
}
//<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>