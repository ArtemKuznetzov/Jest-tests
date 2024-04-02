import axios from 'axios';

export const API = 'https://hn.algolia.com/api/v3';

export const fetchQuery = async (query: string) => {
    const url = `${API}/search?query=${query}`;

    return await axios.get(url);
};

fetchQuery('react');
