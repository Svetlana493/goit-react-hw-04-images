import axios from 'axios';

const API_KEY = '27706951-1a7eb37802d35d3c510bc185f';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const getImages = async (searchQuery, page, per_page) => {
  const response = await axios.get(
    `/?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`
  );
  return response.data;
};
