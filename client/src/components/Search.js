import SearchInput from "./SearchInput"
import React, { Component } from "react";
import API from "../utils/API"


class Search extends Component {

    state = {
        booksInput: "",
    }

    componentDidMount() {
        API.getBooks()
            .then(
                res => (console.log(res.data))

            );
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("submit")
        this.setState(
            { booksInput: "" }
        )
    };

    render() {
        return (
            <div>
                <h1>Google Books Search</h1>
                <SearchInput
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    booksInput={this.state.booksInput}
                />
            </div >
        )
    }
}



export default Search
