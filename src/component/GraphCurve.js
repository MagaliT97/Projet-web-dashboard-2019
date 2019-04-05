import React, { Component } from 'react'
import {Card} from "react-bootstrap";
import {ComposedChart, Line, Legend, Bar, XAxis, YAxis, CartesianGrid, Tooltip,ReferenceLine} from 'recharts';
import axios from "axios"

const style = {
  top: 50,
  left: 600,
  lineHeight: '24px',
};
var copyDepense=[]
var copyRevenu=[]

let graph=[{
  name: '01', depenses: 590, solde: 256,
},
{
  name: '02', depenses: 868, solde: -453, 
},
{
  name: '03', depenses: 900, solde: 234, 
},
{
  name: '04', depenses: 1232, solde: 678, 
},
{
  name: '05', depenses: 978, solde: 100, 
},
{
  name: '06', depenses: 1400, solde: 680,  
},
{
  name: '07', depenses: 790, solde: 209,
},
{
  name: '08', depenses: 234, solde: 1000, 
},
{
  name: '09', depenses: 900, solde: 23, 
},
{
  name: '10', depenses: 1670, solde: 123, 
},
{
  name: '11', depenses: 1789, solde: -456, 
},
{
  name: '12', depenses: 1000, solde: 680,  
},]

export default class GraphCurve extends Component {


  componentDidMount(){
    var month;
    var montantDepense;
    var montantRevenu;
    var tab_depense=[]
    axios.get('http://localhost:4000/depense/montantPerMonth')
      .then(response => {
        console.log("REPONSE DEPENSE")
      console.log(response.data)

        for(var i=0;i<response.data.length;i++){
          copyDepense.push({mois: response.data[i]._id,total: response.data[i].total})
          month=copyDepense[i].mois
          montantDepense=copyDepense[i].total
          for(var j=0;j<graph.length;j++){
            if(graph[j].name===month){
              tab_depense.push(montantDepense)
              graph[j].depenses = montantDepense
            }
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      console.log(tab_depense)
      axios.get('http://localhost:4000/revenu/montantPerMonth')
      .then(response => {
        console.log("REPONSE REVENU")
        console.log(response.data)

        for(var i=0;i<response.data.length;i++){
          copyRevenu.push({mois: response.data[i]._id,total: response.data[i].total})
          month=copyRevenu[i].mois
          montantRevenu=copyRevenu[i].total
          console.log( "Revenu " +montantRevenu)
          for(var j=0;j<graph.length;j++){
            if(graph[j].name===month){
              graph[j].solde = montantRevenu - graph[j].depenses
            }
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  render() {
    return (
      <div>
        <Card bg="light">
            <Card.Body>
            <Card.Title>Graphique présentant les soldes et le total des dépenses par mois</Card.Title>
            <Card.Subtitle>2019</Card.Subtitle>
            <ComposedChart
            width={600}
            height={190}
            data={graph.slice()}>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend iconSize={10} width={180} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="solde" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="depenses" stroke="#ff7300" />
      </ComposedChart>
             
          </Card.Body>
        </Card>
        </div>
      
    )
  }
}

//export default GraphCurve;

