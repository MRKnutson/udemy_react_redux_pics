import "./App.css";
import React from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID zmhjhsdx1EPawfCIXsS_2a0QDrbU8hMSEeO-OZXygpc",
      },
    });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
