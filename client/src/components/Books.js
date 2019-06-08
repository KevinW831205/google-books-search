import React from "react";

function Books(props) {
    return (
        <div>
            <p>Title: {props.title}</p>
            <p>Authors: {props.authors.join()}</p>
            <img src={props.image} />
            <a href={props.link}>link to google books</a>
            <p>Description: {props.description}</p>
            {props.saving
                &&
                <button onClick={
                    () =>

                        props.saveBook({
                            title: props.title,
                            authors: props.authors,
                            image: props.image,
                            link: props.link,
                            description: props.description
                        })
                            .then(res => console.log(res))
                            .catch(err => console.log(err))

                }>Save</button>}
        </div>
    )
}

export default Books;
