import React, { useState } from 'react';
import BookList from './BookList';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState([]);

    function handleSearch(event) {
        event.preventDefault();
        const query = searchTerm;
        const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setBooks(data.items);
            })
            .catch((error) => console.error(error));
    }

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="search-bar">
            <form>
                <input type="text" value={searchTerm} onChange={handleInputChange} />
                <button onClick={handleSearch}>Search</button>
                <BookList books={books} />
            </form>
        </div>
    );
};

export default SearchBar;