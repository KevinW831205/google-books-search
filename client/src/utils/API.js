import axios from "axios";

export default {
    googleBooks: function (query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    },

    getBooks: function () {
        return axios.get("/api/books")
    },

    saveBook: function (bookData) {
        console.log(bookData)
        return axios.post("/api/books", bookData)
    }
}