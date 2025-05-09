"use strict";

class Book {
    constructor (id, url, title, description, date, popularity, rented) {
        this.id = id
        this.url = url
        this.title = title
        this.description = description
        this.date = date
        this.popularity = popularity
        this.rented = rented
    }
}

let books = []

function updateLocalStorage() {
    localStorage.setItem("books", JSON.stringify(books))
    initializeBookAllTable()
}

function loadLocalStorage() {
    let data = localStorage.getItem("books")
    books = data ? JSON.parse(data) : []
}

loadLocalStorage()