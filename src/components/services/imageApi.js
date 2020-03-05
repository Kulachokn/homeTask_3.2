import axios from "axios";

const fetchImagesWithQuery = (searchQuery, page = 0) => {
    return axios
        .get(
            ` https://pixabay.com/api/?key=15482023-2b053900c18c0e4b941c4a2ed&q=${searchQuery}&page=${page}&per_page=12&image_type=photo&orientation=horizontal&`
        )
        .then(response => response.data.hits);
};

export default {
    fetchImagesWithQuery
};

// https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=14234855-711e9a9449f1d753999c1992c



// https://hn.algolia.com/api/v1/search?query=${searchQuery}
// https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12

// https://pixabay.com/api/?key=15482023-2b053900c18c0e4b941c4a2ed



// https://pixabay.com/api/?image_type=photo&key=15482023-2b053900c18c0e4b941c4a2ed&search?query=${searchQuery}