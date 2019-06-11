import React, { Component } from "react";
import API from "../utils/API"
import SearchInput from "./SearchInput"
import Books from "./Books"
import socketIOClient from "socket.io-client"

const PORT = process.env.PORT || "http://localhost:3001";

class Search extends Component {

    // constructor(props) {
    //     super(props);
    //     this.modalToggle = this.modalToggle.bind(this);
    //     this.state = { modalToggled: false }
    // }

    
    constructor() {
        super();
        this.state = {
            booksInput: "",
            books: [],
            searched: false,
            modalToggled: false,
            response: false,
            endpoint: PORT
        }
    }

    componentDidMount() {
        API.getBooks()
            .then(
                res => (console.log(res.data))

            );

        // socket 
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.emit("add book","socket working")
        socket.on("book added", data => this.setState({ response: data }))
    }

    // modalToggle = event => {
    //     this.setState(prevState => {
    //         modalToggled: !prevState.modalToggled
    //     })
    // }

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
        this.bookQuery(this.state.booksInput)
        this.setState(
            {
                booksInput: "",
                searched: true,
            }
        )
    };

    bookQuery = query => {
        console.log(query)
        API.googleBooks(query).then(
            res => {
                console.log(res.data)
                this.setState({ books: res.data.items })

                // console.log("title" + res.data.items[0].volumeInfo.title)
                // console.log("author" + res.data.items[0].volumeInfo.authors)
                // console.log("image" + res.data.items[0].volumeInfo.imageLinks.thumbnail)
                // console.log("link" + res.data.items[0].volumeInfo.infoLink)
                // console.log("description" + res.data.items[0].volumeInfo.description)
            }
        )
    }

    render() {
        const { response } = this.state
        return (
            <div>
                <h2>Search for a Book</h2>
                <h5>Use the search bar to look for books, feel free to save them to the saved list.</h5>
                <SearchInput
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    booksInput={this.state.booksInput}
                />


                {
                    this.state.searched && (
                        this.state.books.length ? (
                            this.state.books.map(
                                books => (
                                    < Books
                                        key={books.volumeInfo.infoLink}
                                        title={books.volumeInfo.title}
                                        authors={books.volumeInfo.authors}
                                        image={books.volumeInfo.imageLinks.thumbnail}
                                        link={books.volumeInfo.infoLink}
                                        description={books.volumeInfo.description}
                                        saving={true}
                                        saveBook={API.saveBook}
                                        // socketBookResponse={response}
                                    />
                                )
                            )
                        ) : (<h3>No results</h3>)
                    )

                }


                {/* <a className="btn" onClick={this.modalToggle}>Modal Test</a> */}

            </div >
        )
    }
}



export default Search
