import React, { Component } from 'react';

// If change do something.
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }
    // Value of input is changed only by state.
    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
    // If input changed sets up search_term state and fires function
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    };

}

export default SearchBar;
