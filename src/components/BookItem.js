import React from 'react';

const BookItem = ({ book }) => {
  return (
    <li>
      <h2>{book.title}</h2>
      <p>Author: {book.authors.join(', ')}</p>
      {book.thumbnail && (
        <img src={book.thumbnail} alt={book.title} />
      )}
    </li>
  );
};

export default BookItem;