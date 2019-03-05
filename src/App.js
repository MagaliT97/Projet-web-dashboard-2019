import React, { Component } from 'react';
import NavigationBar from './component/layout/NavigationBar';
import Home from './component/Home';
import {BrowserRouter,Route} from 'react-router-dom';
import FormProject from './component/FormProject';
import FormDepenses from './component/FormDepenses';
import FormRevenu from './component/FormRevenu';

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
            </switch>
        </div>
        </BrowserRouter>
    
    );
  }
}

export default App;
