import Navbar from './components/navbar';
import Home from './components/home';
import './App.css';
import React, {Component} from 'react';
import { Button } from 'react-bootstrap'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render(){
    return(
      <div className = "App" >
        <Navbar click1 = {() => this.setState(<Home/>)}/>
        <Home/>
        {/* <p className="App-intro">{this.state.apiResponse}</p> */}
      </div>
    );
  }

  
}

export default App;
