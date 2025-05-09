"use strict"

function initializeBookAllTable() {
    let booksAllTable = document.getElementById("books-all-table");
    booksAllTable.innerHTML = ""

    for (let i = 0; i < books.length; i++) {
        let book = books[i];

        let tr = document.createElement("tr") 

        let url = document.createElement("td")
        url.innerHTML = `<img src="${book.url}">`

        let title = document.createElement("td")
        title.innerHTML = `<p>Naslov:</p><p>${book.title}</p>`

        let description = document.createElement("td")
        description.innerHTML = `<p>Opis:</p><p>${book.description}</p>`

        let date = document.createElement("td")
        date.innerHTML = `<p>Datum štampanja:</p><p>${book.date}</p>`

        let popularity = document.createElement("td")
        popularity.innerHTML = `<p>Popularnost:</p><p>${"★".repeat(book.popularity)}</p>`

        let btn = document.createElement("td")
        btn.innerHTML = `<button type="button" class="deleteBookBtn">Delete</button>`

        tr.appendChild(url)
        tr.appendChild(title)
        tr.appendChild(description)
        tr.appendChild(date)
        tr.appendChild(popularity)
        tr.appendChild(btn)

        booksAllTable.appendChild(tr)

        const deleteBtn = btn.querySelector(".deleteBookBtn")
        const bookId = book.id

        deleteBtn.addEventListener("click", function() {
            books = books.filter(book => book.id !== bookId)
            updateLocalStorage()
            initializeBookAllTable()
        })
    }
}




function loadEvents() {
    document.getElementById("submitBtn").addEventListener("click", function() {
        let form = document.getElementById("books-form")
        let formData = new FormData(form)

        let id = 1;
        let usedIds = books.map(book => book.id);
        
        while (usedIds.includes(id)) {
            id++;
        }

        let urlInput = formData.get("url")
        let url = `../../assets/images/book${urlInput}.jpg`
        
        let title = formData.get("title")
        let description = formData.get("description")
        let date = formData.get("date")
        let popularity = formData.get("popularity")
        let rented = false


        let newBook = new Book(id, url, title, description, date, popularity, rented)
        books.push(newBook)
        updateLocalStorage()
    })
}


document.addEventListener("DOMContentLoaded", function() {
    loadEvents()
    initializeBookAllTable()
})