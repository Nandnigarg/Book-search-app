import React from 'react';

const BookItem = ({ book }) => {
  return (
    <div>
      <h2>{book.volumeInfo.title}</h2>
      {book.volumeInfo.authors && (
        <p>Authors: {book.volumeInfo.authors.join(', ')}</p>
      )}
      {book.volumeInfo.publisher && (
        <p>Publisher: {book.volumeInfo.publisher}</p>
      )}
      {book.volumeInfo.publishedDate && (
        <p>Published Date: {book.volumeInfo.publishedDate}</p>
      )}
    </div>
  );
};

export default BookItem;