import Header from "./components/Header";
// import Navbar from "./components/Navbar";
import Table from "./components/Table";
import SearchResultContainer from "./components/SearchResultContainer"
import './App.css';
import API from "./utils/API.json";


function App() {
  return (
    <SearchResultContainer>
      <Header />
      {/* <Navbar /> */}
      <Table 
        image={API[0].image}
        name={API[0].name}
        occupation={API[0].occupation}
        location={API[0].location}
      />
    </SearchResultContainer>
  );
}

export default App;
