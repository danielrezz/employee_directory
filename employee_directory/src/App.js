import React, { Component } from "react";
import Employee from "./components/Employee";
import Container from "./components/Container";
import Header from "./components/Header";
// import Navbar from "./components/Navbar";
import API from "./utils/API";

class App extends Component {
  state = {
    results: []
  };


  componentDidMount() {
    API.getEmployees()
      .then(res => {
        let results = res.data.results;
        console.log(res.data.results)
        this.setState({ results: results })
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <Header>
          
        </Header>
        <Container>
        {/* <Navbar></Navbar> */}
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Photo</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Location</th>
            </tr>
          </thead>
        </table>
        {this.state.results.map(employee => (
          <Employee
            id={employee.id}
            key={employee.id}
            picture={employee.picture}
            name={employee.name}
            email={employee.email}
            location={employee.location}
          />
        ))}
      </Container>
      </>
    );
  }
}

export default App;
