import React from 'react'
import {Card} from "react-bootstrap";
import {ComposedChart, Line, Legend, Bar, XAxis, YAxis, CartesianGrid, Tooltip,ReferenceLine} from 'recharts';
import '../css/ComposedChart.css'

const style = {
  top: 50,
  left: 600,
  lineHeight: '24px',
};

const data = [
  {
    name: '01', dépenses: 590, soldes: 256,
  },
  {
    name: '02', dépenses: 868, soldes: -453, 
  },
  {
    name: '03', dépenses: 900, soldes: 234, 
  },
  {
    name: '04', dépenses: 1232, soldes: -678, 
  },
  {
    name: '05', dépenses: 978, soldes: 100, 
  },
  {
    name: '06', dépenses: 1400, soldes: 680,  
  },
  {
    name: '07', dépenses: 790, soldes: 209,
  },
  {
    name: '08', dépenses: 234, soldes: 1000, 
  },
  {
    name: '09', dépenses: 900, soldes: 23, 
  },
  {
    name: '10', dépenses: 1670, soldes: 123, 
  },
  {
    name: '11', dépenses: 1789, soldes: -456, 
  },
  {
    name: '12', dépenses: 1400, soldes: 680,  
  },
];


const GraphCurve= () => {
    return(
        <div>
        <Card bg="light">
            <Card.Body className="ComposedChart">
            <Card.Title>Graphique présentant les soldes et le total des dépenses</Card.Title>
            <Card.Subtitle>2019</Card.Subtitle>
            <ComposedChart className="ComposedChart"
            width={600}
            height={190}
            data={data}
            mdheight={200}>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend iconSize={10} width={180} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="soldes" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="dépenses" stroke="#ff7300" />
      </ComposedChart>
             
          </Card.Body>
        </Card>
        </div>


    );
}
export default GraphCurve;
