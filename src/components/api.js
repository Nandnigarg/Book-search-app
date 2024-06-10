import axios from 'axios';

const API_KEY = 'AIzaSyCG9HU7uUOUHJu-hQrPM_IsiblZw6-9_7U';
const API_URL = 'https://www.googleapis.com/books/v1/volumes';

const searchBooks = async (searchTerm) => {
    try {
      const response = await axios.get(`${API_URL}?q=${searchTerm}&key=${API_KEY}`);
      return response.data.items;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return []; // No search results found
      } else {
        console.error(error);
        return []; // API request failed
      }
    }
};

export default searchBooks;