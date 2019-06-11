import React from "react";
import "./SearchInput.css"

const PORT = process.env.PORT || 3001;


function SearchInput(props) {
    return (<form className="form">
        <div className="row">
            <div className="input-field">
                <input
                    value={props.booksInput}
                    name="booksInput"
                    onChange={props.handleInputChange}
                    type="text"
                    id="bookSearchInput"
                />
                <label htmlFor="bookSearchInput">Search for a Book</label>
            </div>
            <button className="btn waves-effect waves-light" onClick={props.handleFormSubmit}>Submit</button>
        </div>
    </form>
    )
}

export default SearchInput;
