import React, { Component } from 'react'
import {Card} from "react-bootstrap";
import '../css/PieChartCategory.css'
import { PieChart, Pie, Sector, Cell,Legend} from 'recharts';

const data = [{name: 'Maison/Habitat', value: 400}, {name: 'Obligation financières', value: 300},
                  {name: 'Activités ordinaires', value: 240}, {name: 'Divertissement', value: 90}];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const style = {
  top: 40,
  left: 176,
  lineHeight: '24px',
};

const RADIAN = Math.PI / 180;                    
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);
 
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
    	{`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class PieChartCategory extends Component {
  render() {
    return (
      <div>
          <Card className="card-credit" bg="Secondary" style={{ width: '23rem'}}>
          <Card.Body>
            <Card.Title>Catégorie de dépenses</Card.Title>
            <Card.Subtitle>Juin</Card.Subtitle>
            <PieChart width={400} height={190}>
        <Pie
          data={data}
          cx={81}
          cy={90}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value">
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        <Legend iconSize={10} width={180} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        </PieChart>
          </Card.Body>
        </Card>
      </div>
    )
  }
}
//<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>