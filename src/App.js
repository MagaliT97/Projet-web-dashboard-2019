import React, { Component } from 'react';
import NavigationBar from './component/layout/NavigationBar';
import Home from './component/Home';
import {BrowserRouter,Route} from 'react-router-dom';
import FormProject from './component/FormProject';
import FormDepenses from './component/FormDepenses';
import FormRevenu from './component/FormRevenu';
import PieChartCategory from './component/PieChartCategory';
import GraphCurve from './component/GraphCurve';
import PieChartBudget from './component/PieChartBudget';
import ProgressBarComponent from './component/ProgressBarComponent';
import TodoList from './component/TodoList';
import Calendrier from './component/Calendrier';
import DisplayDepense from './component/DisplayDepense';
import EditDepense from './component/EditDepense';
import DisplayRevenu from './component/DisplayRevenu';
import EditRevenu from './component/EditRevenu';
import FormBudget from './component/FormBudget';
import DisplayBudget from './component/DisplayBudget';
import EditBudget from './component/EditBudget';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <div>
            <NavigationBar/>
            <switch>
            <Route exact path='/' component={Home}/>
            <Route path='/FormProject' component={FormProject}/>
            <Route path='/FormDepenses' component={FormDepenses}/>
            <Route path='/FormRevenu' component={FormRevenu}/>
            <Route path='/PieChartCategory' component={PieChartCategory}/>
            <Route path='/GraphCurve' component={GraphCurve}/>
            <Route path='/PieChartBudget' component={PieChartBudget}/>
            <Route path='/ProgressBarComponent' component={ProgressBarComponent}/>
            <Route path='/TodoList' component={TodoList}/>
            <Route path='/Calendrier' component={Calendrier}/>
            <Route path='/DisplayDepense' component={DisplayDepense}/>
            <Route path='/edit/:id' component={EditDepense} />
            <Route path='/DisplayRevenu' component={DisplayRevenu}/>
            <Route path='/FormBudget' component={FormBudget}/>
            <Route path='/editRevenu/:id' component={EditRevenu} />
            <Route path='/DisplayBudget' component={DisplayBudget}/>
            <Route path='/editBudget/:id' component={EditBudget} />

            </switch>
        </div>
        </BrowserRouter>
    
    );
  }
}

export default App;
