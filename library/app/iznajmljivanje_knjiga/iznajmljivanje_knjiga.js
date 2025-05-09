"use strict";

let booksRented = []
let booksUnrented = []

function bookSort() {
    for (let book of books) {
        if (book.rented) {
            booksRented.push(book)
        }
        else {
            booksUnrented.push(book)
        }
    }
}


function initializeBooksRentedTable(booksRented) {
    let booksRentedTable = document.getElementById("books-rented-table")
    booksRentedTable.innerHTML = ""

    for (let i = 0; i < booksRented.length; i++) {
        let book = booksRented[i];

        let tr = document.createElement("tr") 

        let url = document.createElement("td")
        url.innerHTML = `<img src="${book.url}">`

        let title = document.createElement("td")
        title.innerHTML = `<h2>${book.title}</h2>`

        let description = document.createElement("td")
        description.innerHTML = `<p>${book.description}</p>`

        let date = document.createElement("td")
        date.innerHTML = `<p>Datum štampanja:</p><p>${book.date}</p>`

        let popularity = document.createElement("td")
        popularity.innerHTML = `<p>Popularnost:</p><p>${"★".repeat(book.popularity)}</p>`

        let btn = document.createElement("td")
        btn.innerHTML = `<button type="button" class="returnBookBtn">Return</button>`

        tr.appendChild(url)
        tr.appendChild(title)
        tr.appendChild(description)
        tr.appendChild(date)
        tr.appendChild(popularity)
        tr.appendChild(btn)

        booksRentedTable.appendChild(tr)
        
        let returnBookBtn = btn.querySelector(".returnBookBtn")

        returnBookBtn.addEventListener("click", function() {
            booksUnrented.push(book)
            booksRented.splice(i, 1)
            initializeBooksRentedTable(booksRented)
            initializeBooksUnrentedTable(booksUnrented)
        })
        
    }
}


function initializeBooksUnrentedTable(booksUnrented) {
    let booksUnrentedTable = document.getElementById("books-unrented-table")
    booksUnrentedTable.innerHTML = ""

    for (let i = 0; i < booksUnrented.length; i++) {
        let book = booksUnrented[i];

        let tr = document.createElement("tr") 

        let url = document.createElement("td")
        url.innerHTML = `<img src="${book.url}">`

        let title = document.createElement("td")
        title.innerHTML = `<h2>${book.title}</h2>`

        let description = document.createElement("td")
        description.innerHTML = `<p>${book.description}</p>`

        let date = document.createElement("td")
        date.innerHTML = `<p>Datum štampanja:</p><p>${book.date}</p>`

        let popularity = document.createElement("td")
        popularity.innerHTML = `<p>Popularnost:</p><p>${"★".repeat(book.popularity)}</p>`

        let btn = document.createElement("td")
        btn.innerHTML = `<button type="button" class="rentBookBtn">Rent</button>`

        tr.appendChild(url)
        tr.appendChild(title)
        tr.appendChild(description)
        tr.appendChild(date)
        tr.appendChild(popularity)
        tr.appendChild(btn)

        booksUnrentedTable.appendChild(tr)
        
        let rentBookBtn = btn.querySelector(".rentBookBtn")

        rentBookBtn.addEventListener("click", function() {
            booksRented.push(book)
            booksUnrented.splice(i, 1)
            initializeBooksRentedTable(booksRented)
            initializeBooksUnrentedTable(booksUnrented)
        })
        
    }
}



document.addEventListener("DOMContentLoaded", function() {
    bookSort()
    initializeBooksRentedTable(booksRented)
    initializeBooksUnrentedTable(booksUnrented)
})