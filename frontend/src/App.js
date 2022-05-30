import Navbar from './components/navbar';
import Home from './components/home';
import How from './components/how'
import AboutUs from './components/aboutus';
import './App.css';
import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
    this.state = { page: 1}
    
  }

  switchPage = () => {
    switch (this.state.page) {
      case 1:
        return <Home/>
      case 2:
        return <AboutUs/>;
      case 3:
        return <How/>;
    }
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App" >
        <Navbar click1={() => this.setState({ page: 1})}
                click2={() => this.setState({ page: 2})}
                click3={() => this.setState({page: 3})} />

        {/* <p className="App-intro">{this.state.apiResponse}</p> */}
        {this.switchPage()}
      </div>
    );
  }


}

export default App;
