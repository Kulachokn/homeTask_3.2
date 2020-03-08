import axios from "axios";

const fetchImagesWithQuery = (searchQuery, page = 1) => {
  return axios
    .get(
      ` https://pixabay.com/api/?q=${searchQuery}&page=${page}&per_page=12&key=15482023-2b053900c18c0e4b941c4a2ed&image_type=photo&orientation=horizontal&`
    )
    .then(response => response.data.hits);
};

export default {
  fetchImagesWithQuery
};
