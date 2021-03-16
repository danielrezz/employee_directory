import React, {Component} from 'react';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import SearchResultContainer from "./components/SearchResultContainer"
import './App.css';
import API from "./utils/API.json";


class App extends Component {

state = {
  employees: API
};

  render() {
    return (
      <SearchResultContainer>
        <Header />
        <Navbar />
        {this.state.employees.map(employee => <Table
          image={employee.image}
          name={employee.name}
          occupation={employee.occupation}
          location={employee.location}
        />)}
      </SearchResultContainer>
    );
  }
}

export default App;
