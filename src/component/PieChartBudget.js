import React  from 'react';
import {Card} from 'react-bootstrap';
import { PieChart, Pie, Cell,Label,Text} from 'recharts';
import '../css/PieChartBudget.css'

const RADIAN = Math.PI / 180; 
const data = [
    { name: 'Group A', value: 750 },
    { name: 'Group C', value: 250 },
  ];

const PieChartBudget = () => {
    const COLORS = ['#00C49F','#F8F8F8'];
    return(
        <Card bg="Secondary" style={{ width: '23rem'}}>
          <Card.Body>
            <Card.Title>Budget actuel</Card.Title>
            <PieChart width={320} height={210}  >
            <Pie
            data={data}
            cx={140}
            cy={88}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            
            dataKey="value"
            >
            <Label value="75%" position="center"/>
            {
                data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
            </Pie>
             </PieChart>
             <Card.Text>
                Revenu: <span className="data-user">3810,00€</span> <br/>
                Budget prévisionnel: <span className="data-user">3425,00€</span> <br/>
                Solde prévisionnel: <span className="data-user">385€</span><br/> 
            </Card.Text>
          </Card.Body>
        </Card>
    );        
};

export default PieChartBudget;