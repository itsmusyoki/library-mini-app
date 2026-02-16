let myLibrary = []

const dialog = document.getElementById("book-dialog")
const form = document.getElementById("book-form")
const newBtn = document.getElementById("new-book-btn")

newBtn.addEventListener("click",() => {
    dialog.showModal()
} )
//the modal
form.addEventListener("submit", (e) =>{
    e.preventDefault()

    const formData  = new FormData(form)
    //title, year, publisher, pages, read
    const title = formData.get("title")
    const year = formData.get("year")
    const publisher = formData.get("publisher")
    const pages = formData.get("pages")
    const read = formData.get("read") === 'on'

    addBookToLib(title, year, publisher, pages, read)
    form.reset()
    dialog.close()

})



function Book(title, year, publisher, pages, read){
    this.id = crypto.randomUUID()
    this.title = title,
    this.year = year,
    this.publisher = publisher,
    this.pages = pages,
    this.read = read

}
Book.prototype.toggleRead = function(){
    this.read = !this.read
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
        card.setAttribute("data-id", book.id)

        //fill card
        // title, year, publisher, pages
        card.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Year:</strong> ${book.year}</p>
            <p><strong>Publisher:</strong> ${book.publisher}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Status:</strong> ${book.read ? "Read" : "Not Read"}</p>
            <button class="toggle-btn">Toggle Read</button>
            <button class="remove-btn">Remove</button>
        `
        container.appendChild(card)
    })
}

function removeBook(id){
    myLibrary = myLibrary.filter(book => book.id !== id);
    displayBooks()
}
document.getElementById("library-container").addEventListener("click", function(e){
    const card = e.target.closest(".book-card")
    if(!card) return

    const id = card.dataset.id
    const book = myLibrary.find(b => b.id === id)

    if(e.target.classList.contains("remove-btn")){
        removeBook(id)
    }
    if(e.target.classList.contains("toggle-btn")){
        book.toggleRead()
        displayBooks()
    }
})  
document.getElementById("close-dialog")
.addEventListener("click", () => {
    document.getElementById("book-dialog").close()
})


//title, year, publisher, pages

/* after every update:
git add .
git commit -m "Added displayBooks function"
git push */