import React from "react";
import "./Books.css"

function Books(props) {
    return (
        <div className="card horizontal">
            <div className="card-image">
                <img class="book-image" src={props.image} alt={`${props.title}`} />
            </div>
            <div className="card-stacked">
                <div className="card-content">
                    <h5>Title: {props.title}</h5>
                    <p>Authors: {props.authors.join()}</p>
                    <p>Description: {props.description}</p>
                </div>
                <div className="card-action" >
                    <div className="row">
                        <a className="left-align col s10" href={props.link}>link to google books</a>

                        {/* a boolean saving props is passed in, render a save button for true and unsave button for false*/}
                        {props.saving
                            ?
                            (
                                <a className="waves-effect waves-light btn" onClick={
                                    () =>
                                        props.saveBook({
                                            title: props.title,
                                            authors: props.authors,
                                            image: props.image,
                                            link: props.link,
                                            description: props.description
                                        })
                                            .then(res => console.log(res))
                                            .catch(err => console.log(err))}

                                >Save</a>
                            ) : (
                                <a className="waves-effect waves-light btn red col s1" onClick={() => props.deleteBook(props.id)}>delete</a>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Books;
