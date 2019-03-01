import React, { Component } from 'react';
import NavigationBar from './component/layout/NavigationBar';
import Home from './component/Home';
import DashBoard from './component/layout/DashBoard';
import {BrowserRouter,Route} from 'react-router-dom';
import FormProject from './component/FormProject';

class App extends Component {
  render() {
    return (
     
        <BrowserRouter>
        <div>
            <NavigationBar/>
            <switch>
            <Route exact path='/' component={Home}/>
            <Route path='/FormProject' component={FormProject}/>
            </switch>
        </div>
        </BrowserRouter>
    
    );
  }
}

export default App;
