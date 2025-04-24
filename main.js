// Dom Elements
const section = document.getElementById('cards');
const submitBtn = document.getElementById('submit-btn');

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
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.desc = desc;
    this.img = img;
}

// Add Book object to the library
function generateLibrary(id, title, author, year, genre, desc, img) {
    const newBook = new Book(id, title, author, year, genre, desc, img);
    myLibrary.push(newBook);
}

// Loop through book data and populate library
bookData.forEach((book) => {
    id = book.id;
    title = book.title;
    author = book.author;
    year = book["publication_year"];
    genre = book.genre[0];
    desc = book.description;
    image = book["cover_image"];

    generateLibrary(id, title, author, year, genre, desc, image);
})

// Add new book to library
function addBookToLibrary(title, author, year, genre, desc) {

    // Create a uniquie ID
    id = myLibrary.length + 1;

    const newBook = new Book(id, title, author, year, genre, desc);

    // Add new book to the front of the array.
    myLibrary.unshift(newBook)

}

// Display Books
function displaybooks() {

    // Refactor to dynamically display the books in the library
    myLibrary.forEach((book) => {
      const cardElem = document.createElement('div');
      cardElem.innerHTML = `
        <div id="${book.id}" class="book">
          <h3 class="book-title">${book.title}</h3>
          <p class="book-author">${book.author}</p>
          <p class="book-genre">${book.genre}</p>
          <p class="book-year">${book.year}</p>
          <p class="book-desc">${book.desc}</p>
        </div>
      `
      cardElem.className = 'card';
      section.appendChild(cardElem);

    })
    
    

}

displaybooks();


// Add event listener
submitBtn.addEventListener('click', (e) => {
  // Prevents form from submitting
  e.preventDefault();

  // Get new book values to add
  titleInput = document.getElementById('title').value;
  authorInput = document.getElementById('author').value;
  genreInput = document.getElementById('genre').value;
  yearInput = document.getElementById('year').value;
  descInput = document.getElementById('desc').value;

  addBookToLibrary(titleInput, authorInput, yearInput, genreInput, descInput);
  
  // Update display 
  myLibrary.forEach((book) => {
    const cardElem = document.createElement('div');
      cardElem.innerHTML = `
        <div id="${book.id}" class="book">
          <h3 class="book-title">${book.title}</h3>
          <p class="book-author">${book.author}</p>
          <p class="book-genre">${book.genre}</p>
          <p class="book-year">${book.year}</p>
          <p class="book-desc">${book.desc}</p>
        </div>
      `
      cardElem.className = 'card';
      section.prepend(cardElem);
  })
  
})