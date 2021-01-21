import React from "react";

class SearchBar extends React.Component {
  // state object to get the search term typed into the input by the user
  state = {
    searchTerm: "",
  };

  // when the user submits a term, calls the onSumbit function from the props with the search term as the param
  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={(e) => this.setState({ searchTerm: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
