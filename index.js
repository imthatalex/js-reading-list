let Library = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary() {
    const BookTitle = document.getElementById('BookTitle');
    const BookAuthor = document.getElementById('BookAuthor');
    const BookPages = document.getElementById('BookPages');
    const BookRead = document.getElementById('BookRead');

    let NewBook = new Book(BookTitle.value, BookAuthor.value, BookPages.value, BookRead.checked);
    Library.push(NewBook);
    render();
    reset();
}


function render() {
    const BookShelf = document.getElementById('BookShelf');
    const Books = document.querySelectorAll('.book');
    Books.forEach((book) => BookShelf.removeChild(book));
    for (let i = 0; i < Library.length; i++) {
        createBook(Library[i]);
    }
}

function createBook(book) {
    const BookShelf = document.getElementById('BookShelf');

    const BookDiv = document.createElement('div');
    const TitleDiv = document.createElement('div');
    const AuthorDiv = document.createElement('div');
    const PagesDiv = document.createElement('div');
    const BookRead = document.createElement('div');
    const RemoveBttn = document.createElement('button');

    BookDiv.classList.add('book');
    BookDiv.setAttribute('id', Library.indexOf(book));

    TitleDiv.textContent = book.title;
    AuthorDiv.textContent = book.author;
    PagesDiv.textContent = book.pages;

    if (book.read) {
        BookRead.textContent = 'Read'
    }
    else {
        BookRead.textContent = 'Not Read'
    }

    RemoveBttn.textContent = 'Delete';
    RemoveBttn.classList.add('button-83')
    RemoveBttn.addEventListener('click', () => {
        Library.splice(Library.indexOf(book), 1);
        render();
    })

    BookDiv.appendChild(TitleDiv);
    BookDiv.appendChild(AuthorDiv);
    BookDiv.appendChild(PagesDiv);
    BookDiv.appendChild(BookRead);
    BookDiv.appendChild(RemoveBttn);


    BookShelf.appendChild(BookDiv);
}

function reset() {
    const BookTitle = document.getElementById('BookTitle');
    const BookAuthor = document.getElementById('BookAuthor');
    const BookPages = document.getElementById('BookPages');
    const BookRead = document.getElementById('BookRead');

    BookTitle.value = '';
    BookAuthor.value = '';
    BookPages.value = '';
    BookRead.checked = false;

    closeForm();
}

function openForm() {
    const Form = document.querySelector('Form');
    Form.classList.remove('closed');
    Form.classList.add('open');
}

function closeForm() {
    const Form = document.querySelector('Form');
    Form.classList.remove('open');
    Form.classList.add('closed');
}