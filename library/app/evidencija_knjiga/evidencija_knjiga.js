"use strict"

function initializeBookList () {
    let bookList = document.getElementById("book-list");
    bookList.innerHTML = ""
    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        const bookDiv = document.createElement("div");
        bookDiv.className = "book-row"
        bookDiv.innerHTML = `  
            <img src="${book.url}">
            <h2>${book.title}</h2><br>
            <p>${book.description}</p><br>
            <small>Datum štampanja: ${book.date}</small><br>
            <p>Popularnost: ${"★".repeat(book.popularity)}</p>
            <button type="button" class="deleteBtn">Delete</button>
        `;

        bookList.appendChild(bookDiv);

        const deleteBtn = bookDiv.querySelector(".deleteBtn")
        const bookId = book.id

        deleteBtn.addEventListener("click", function () {
            books = books.filter(book => book.id !== bookId)
            initializeBookList ()
        })

    }
}

document.addEventListener("DOMContentLoaded", function() {
    initializeBookList()
})