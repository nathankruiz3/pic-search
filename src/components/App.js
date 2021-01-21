import React from "react";
// importing API to get random photos
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "../components/ImageList";

class App extends React.Component {
  // state object to hold the images when fetched from the API
  state = {
    images: [],
  };

  // function to run when the user submits a search term
  onSearchSubmit = async (term) => {
    // setting the value of response to the response from my unsplash class
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    // changing the value of the images to the fetched images from the unsplash API
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      // Searchbar is rendered with the onSubmitSearch function as a prop to handle when a user submits a search term
      // ImageList is rendered with the value of images as a prop
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
