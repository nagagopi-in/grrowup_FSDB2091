let library = [];

document.getElementById('add-book-btn').addEventListener('click', addBook);
document.getElementById('search-btn').addEventListener('click', searchBooks);

function addBook(e) {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = parseInt(document.getElementById('pages').value);
    let genre = document.getElementById('genre').value;

    if (title && author && pages && genre) {
        let book = {
            title: title,
            author: author,
            pages: pages,
            genre: genre
        };
        library.push(book);
        displayBooks();
    } else {
        alert('Please fill in all fields.');
    }
}

function searchBooks(e) {
    e.preventDefault();
    let searchTitle = document.getElementById('search-title').value.toLowerCase();
    let searchResult = library.filter(book => book.title.toLowerCase().includes(searchTitle));
    displayBooks(searchResult);
}

function displayBooks(books = library) {
    let bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    books.forEach(book => {
        let bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Genre: ${book.genre}</p>
        `;
        bookList.appendChild(bookDiv);
    });
}