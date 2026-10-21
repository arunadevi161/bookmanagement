import { useState, useEffect } from 'react';
import './App.css';

// Child Component
function Book(props) {
  return (
    <div className="book-card">
      <h3>Book Title: {props.title}</h3>
      <p>Author: {props.author}</p>
    </div>
  );
}

// Parent Component
function App() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Wings of Fire',
      author: 'A. P. J. Abdul Kalam'
    },
    {
      id: 2,
      title: 'Ponniyin Selvan',
      author: 'Kalki Krishnamurthy'
    },
    {
      id: 3,
      title: 'The Alchemist',
      author: 'Paulo Coelho'
    }
  ]);

  // Welcome message when the page loads
  useEffect(() => {
    console.log('Welcome to the Book Management System');
  }, []);

  // Notification when the page loads or book count changes
  useEffect(() => {
    alert(`Notification: ${books.length} book(s) available.`);
  }, [books.length]);

  return (
    <div className="container">
      <h1>Book Management System</h1>

      {/* Conditional rendering */}
      <h2>
        {books.length > 0
          ? 'Books Available'
          : 'No Books Available'}
      </h2>

      {/* Display books using child component */}
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
        />
      ))}

      <button onClick={() => setBooks([])}>
        Remove All Books
      </button>

      <button
        onClick={() =>
          setBooks((previousBooks) => [
            ...previousBooks,
            {
              id: Date.now(),
              title: 'New Book',
              author: 'Unknown Author'
            }
          ])
        }
      >
        Add Book
      </button>
    </div>
  );
}

export default App;