import React from "react";

function SearchInput(props) {
    return (<form className="form">
        <input
            value={props.booksInput}
            name="booksInput"
            onChange={props.handleInputChange}
            type="text"
            placeholder="Search for a Book"
        />
        <button onClick={props.handleFormSubmit}>Submit</button>
    </form>
    )
}

export default SearchInput;
