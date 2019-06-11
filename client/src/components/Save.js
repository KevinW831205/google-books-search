import React, { Component } from "react";
import API from "../utils/API"
import Books from "./Books"


class Save extends Component {

    state = {
        booksInput: "",
        books: [],
    }


    componentDidMount() {
        // on load get books data and set state for render
        API.getBooks()
            .then(
                res => {
                    console.log(res.data)
                    this.setState({ books: res.data })
                }
            );
    }

    // function to remove a book from mongodb by passing in the book data.
    deleteBook = id => {
        console.log(id)
        API.deleteBook(id)
            .then(
                res => {
                    console.log(res.data);
                    this.setState({ books: res.data })
                }
            )
    }

    render() {
        return (
            <div>
                <h1 className="center-align">Google Books Saved</h1>
                {this.state.books.length ? (
                    this.state.books.map(
                        books => (
                            < Books
                                key={books.link}
                                id={books._id}
                                title={books.title}
                                authors={books.authors}
                                image={books.image}
                                link={books.link}
                                description={books.description}
                                deleteBook={this.deleteBook}
                                saving={false}
                            />
                        )
                    )
                ) : (<h3>No saved Books</h3>)}


            </div >
        )
    }


}

export default Save


