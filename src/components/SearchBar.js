import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from './BookList';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [cachedBooks, setCachedBooks] = useState(() => {
        const cached = localStorage.getItem('cachedBooks');
        return cached ? JSON.parse(cached) : {};
    });

    useEffect(() => {
        // Load cached data from localStorage
        console.log('Loaded cached data from localStorage:', cachedBooks);
    }, []);

    useEffect(() => {
        // Store cached data to localStorage
        localStorage.setItem('cachedBooks', JSON.stringify(cachedBooks));
        console.log('Cached data stored:', cachedBooks);
    }, [cachedBooks]);

    const handleSearch = async () => {
        try {
            if (cachedBooks[query]) {
                // Use cached results if available
                setSearchResults(cachedBooks[query]);
            } else {
                // Fetch new results and update cache
                console.log(`Fetching data for ${query}`);
                const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
                const books = response.data.items;

                // Update search results
                setSearchResults(books);

                // Update cache
                setCachedBooks(prevState => {
                    return { ...prevState, [query]: books };
                });
            }
        } catch (error) {
            console.error('Error fetching book data:', error);
        }
    };

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div className="search-bar">
            <form onSubmit={e => { e.preventDefault(); handleSearch(); }}>
                <input type="text" value={query} onChange={handleInputChange} />
                <button type="submit">Search</button>
                <BookList books={searchResults} />
            </form>
        </div>
    );
};

export default SearchBar;
