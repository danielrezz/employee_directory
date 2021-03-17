import React, { Component } from "react";
import Employee from "./components/Employee";
import Container from "./components/Container";
import Header from "./components/Header";
import API from "./utils/API";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    results: {}
  };

  // componentDidMount() {
  //   this.getEmployees();
  // };

  componentDidMount() {
    API.getEmployees()
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  };

  // Map over this.state.friends and render a Employee component for each friend object
  render() {
    return (
      <Container>
        <Header></Header>
        <Employee
            id={this.state.results.id}
            key={this.state.results.id}
            name={this.state.results.name}
            email={this.state.results.email}
            location={this.state.results.location}
          />
      </Container>
    );
  }
}

export default App;
