import Header from "./components/Header";
// import Navbar from "./components/Navbar";
import Table from "./components/Table";
import SearchResultContainer from "./components/SearchResultContainer"
import './App.css';

function App() {
  return (
    <>
      <Header />
      {/* <Navbar /> */}
      <SearchResultContainer />
      <Table />
    </>
  );
}

export default App;
