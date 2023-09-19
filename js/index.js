document.addEventListener("DOMContentLoaded", function() {
    fetchBooks()
});


function fetchBooks() {
    fetch("http://localhost:3000/books")
    .then(resp => resp.json())
    .then(booksArr => booksArr.forEach(renderBookTitle))
}


function renderBookTitle(book) {
    
    const bookTitleList = document.getElementById("list")    

    const bookTitle = document.createElement("li")
    bookTitle.innerText = book.title
    bookTitleList.append(bookTitle)

    bookTitle.addEventListener("click", () => renderBookDetails(book))

}


function renderBookDetails(book) {
    const bookDetailsDiv = document.querySelector('#show-panel')

    bookDetailsDiv.innerHTML = ""

    const {title, subtitle, description, author, img_url, users} = book
    

    const bookTitle = document.createElement('h1')
    const bookSub = document.createElement('h3')
    const bookDes = document.createElement('p')
    const bookAuthor = document.createElement('h3')
    const bookImg = document.createElement('img')

    bookTitle.textContent = title
    bookSub.textContent = subtitle
    bookDes.textContent = description
    bookAuthor.textContent = author
    bookImg.src = img_url

    const usersContainer = document.createElement('ul')

    users.forEach((user) => {
        const userLi = document.createElement('li')
        userLi.textContent = user.username
        usersContainer.append(userLi)
    })

    bookDetailsDiv.append(bookImg, bookTitle, bookSub, bookAuthor, bookDes, usersContainer)
    
}

