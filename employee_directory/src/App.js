import React, { Component } from "react";
import Employee from "./components/Employee";
import Container from "./components/Container";
import Header from "./components/Header";
import API from "./utils/API";

class App extends Component {
  state = {
    results: []
  };


  componentDidMount() {
    API.getEmployees()
      .then(res => {
        let results = res.data.results[0];
        this.setState({ results: results })})
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Header></Header>
        <Employee
            id={this.state.results.id}
            key={this.state.results.id}
            name={this.state.results.name}
            // email={this.state.results.email}
            // location={this.state.results.location}
          />
      </Container>
    );
  }
}

export default App;
