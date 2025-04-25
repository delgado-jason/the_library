// Dom Elements
const section = document.getElementById('cards');
const submitBtn = document.getElementById('submit-btn');
const button = document.getElementsByName('button');

// Library that holds book objects
let myLibrary = [
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

// Add new book to library
function addBookToLibrary(title, author, year, genre, desc) {

    // Create a uniquie ID
    id = myLibrary.length + 1;

    const newBook = new Book(id, title, author, year, genre, desc);

    // Add new book to the front of the array.
    myLibrary.unshift(newBook)

}

// Display Books
function displaybooks(lib) {

    // Refactor to dynamically display the books in the library
    lib.forEach((book) => {
      const cardElem = document.createElement('div');
      cardElem.innerHTML = `
        <div id="${book.id}" class="book">
          <h3 class="book-title">${book.title}</h3>
          <p class="book-author">${book.author}</p>
          <p class="book-genre">${book.genre}</p>
          <p class="book-year">${book.year}</p>
          <p class="book-desc">${book.desc}</p>
          <button onclick="deleteBook(${myLibrary.indexOf(book)})">Delete Book</button>
        </div>
      `
      cardElem.className = 'card';
      section.appendChild(cardElem);
    })
}

displaybooks(myLibrary);

// Resets the screen
function resetScreen() {
  section.innerHTML = '';
}


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

  resetScreen();
  myLibrary.sort((a, b) => b.id - a.id)
  displaybooks(myLibrary);
})

// Delete a book
function deleteBook(i) {
  
  myLibrary.splice(i, 1)
  
  resetScreen();
  displaybooks(myLibrary);
}

