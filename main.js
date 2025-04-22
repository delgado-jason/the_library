// Dom Elements
const cardDiv = document.querySelector('.card');
const bookDiv = document.querySelector('.book');
const bookTitle = document.querySelector('.book-title');
const bookAuthor = document.querySelector('.book-author');
const bookYear = document.querySelector('.book-year');
const bookGenre = document.querySelector('.book-genre');
const bookDesc = document.querySelector('.book-desc');

// Library that holds book objects
const myLibrary = [];

// Fake Book Data
const bookData = [
    {
      "id": 1,
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "publication_year": 1960,
      "genre": [
        "Fiction",
        "Classic"
      ],
      "description": "A classic novel depicting racial injustice in the American South.",
      "cover_image": "https://fakeimg.pl/667x1000/cc6600"
    },
    {
      "id": 2,
      "title": "1984",
      "author": "George Orwell",
      "publication_year": 1949,
      "genre": [
        "Dystopian",
        "Science Fiction"
      ],
      "description": "A dystopian novel portraying a totalitarian society.",
      "cover_image": "https://fakeimg.pl/667x1000/cc6600"
    },
    {
      "id": 3,
      "title": "Pride and Prejudice",
      "author": "Jane Austen",
      "publication_year": 1813,
      "genre": [
        "Classic",
        "Romance"
      ],
      "description": "A classic novel exploring themes of love, marriage, and social norms.",
      "cover_image": "https://fakeimg.pl/667x1000/cc6600"
    },
    {
      "id": 4,
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "publication_year": 1925,
      "genre": [
        "Fiction",
        "Classic"
      ],
      "description": "A tale of the American Dream, wealth, and love during the Roaring Twenties.",
      "cover_image": "https://fakeimg.pl/667x1000/cc6600"
    },
    {
      "id": 5,
      "title": "Moby-Dick",
      "author": "Herman Melville",
      "publication_year": 1851,
      "genre": [
        "Fiction",
        "Adventure"
      ],
      "description": "The epic tale of Captain Ahab's obsession with the white whale.",
      "cover_image": "https://fakeimg.pl/667x1000/cc6600"
    },
    {
      "id": 6,
      "title": "The Lord of the Rings",
      "author": "J.R.R. Tolkien",
      "publication_year": 1954,
      "genre": [
        "Fantasy",
        "Adventure"
      ],
      "description": "An epic fantasy saga about the quest to destroy the One Ring.",
      "cover_image": "https://fakeimg.pl/667x1000/cc6600"
    },
    {
      "id": 7,
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "publication_year": 1951,
      "genre": [
        "Fiction",
        "Coming-of-age"
      ],
      "description": "A classic coming-of-age novel following Holden Caulfield's journey.",
      "cover_image": "https://fakeimg.pl/667x1000/cc6600"
    },
    {
      "id": 8,
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "publication_year": 1937,
      "genre": [
        "Fantasy",
        "Adventure"
      ],
      "description": "The prequel to The Lord of the Rings, following Bilbo Baggins' journey.",
      "cover_image": "https://fakeimg.pl/667x1000/cc6600"
    },
    {
      "id": 9,
      "title": "One Hundred Years of Solitude",
      "author": "Gabriel Garcia Marquez",
      "publication_year": 1967,
      "genre": [
        "Magical Realism",
        "Literary Fiction"
      ],
      "description": "A multi-generational saga of the Buendía family in the fictional town of Macondo.",
      "cover_image": "https://fakeimg.pl/667x1000/cc6600"
    }
  ]

// The Book constructor
function Book(id, title, author, year, genre, desc, img) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.desc = desc;
    this.img = img;
}

// Add Book object to the library
function addToLibrary(title, author, year, genre, desc, img) {
    const newBook = new Book(title, author, year, genre, desc, img);
    myLibrary.push(newBook);
}

// Loop through book data and populate library
bookData.forEach((book) => {
    title = book.title;
    author = book.author;
    year = book["publication_year"];
    genre = book.genre[0];
    desc = book.description;
    image = book["cover_image"];

    addToLibrary(title, author, year, genre, desc, image);
})

// Display Books
function displaybooks() {
    myLibrary.forEach((book) => {
        bookTitle.innerHTML = book.title;
        bookAuthor.innerHTML = book.author;
        bookGenre.innerHTML = book.genre;
        bookYear.innerHTML = book.year;
        bookDesc.innerHTML = book.desc;
    })
}

displaybooks();
