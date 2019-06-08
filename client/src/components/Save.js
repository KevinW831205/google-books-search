import React, { Component } from "react";
import API from "../utils/API"
import Books from "./Books"


class Save extends Component {

    state = {
        booksInput: "",
        books: [],
    }


    componentDidMount() {
        API.getBooks()
            .then(
                res => {
                    console.log(res.data)
                    this.setState({books: res.data})
                }
            );
    }

    render() {
        return (
            <div>
                <h1>Google Books Saved</h1>
                {this.state.books.length ? (
                    this.state.books.map(
                        books => (
                            < Books
                                key={books.link}
                                title={books.title}
                                authors={books.authors}
                                image={books.image}
                                link={books.link}
                                description={books.description}
                                saving={false}
                            />
                        )
                    )
                ) : (<h3>No results</h3>)}


            </div >
        )
    }


}

export default Save


