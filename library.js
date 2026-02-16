const myLibrary = []

function Book(title, year, publisher, pages){
    //this.id = crypto.randomUUID()
    this.title = title,
    this.year = year,
    this.publisher = publisher,
    this.pages = pages
}

function addBookToLib(title, year, publisher, pages){
    const newBook = new Book(title, year, publisher, pages)
    myLibrary.push(newBook)
    displayBooks()//rerender
}

function displayBooks(){
    const container = document.getElementById("library-container")
    // Clear container first
    container.innerHTML = ""

    myLibrary.forEach(book => {
        //create card
        const card = document.createElement("div")
        card.classList.add("book-card")

        //fill card
        // title, year, publisher, pages
        card.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Year:</strong> ${book.year}</p>
            <p><strong>Publisher:</strong> ${book.publisher}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
        
        `
        container.appendChild(card)
    })
}
//title, year, publisher, pages
addBookToLib("gft",2019, "peter",200)
addBookToLib("progress",2026, "peter",100)
