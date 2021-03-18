import React, { Component } from "react";
import Employee from "./components/Employee";
import Container from "./components/Container";
import Header from "./components/Header";
import SortButton from "./components/SortButton";
import Search from "./components/Search";
import API from "./utils/API";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    results: []
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.results);
    
    this.setState({ results: this.state.results.slice().sort((a, b) => {
      if (a.name.first < b.name.first) {
        return -1
      } if (a.name.first > b.name.first) {
        return 1;
      } return 0
    }) }, () => {console.log(this.state.results)});
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
        <Search />
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Photo</th>
              <th scope="col">Name<SortButton handleFormSubmit={this.handleFormSubmit}/></th>
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
