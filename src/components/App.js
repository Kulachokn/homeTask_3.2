import React, {Component} from "react";
import Loader from "./Loader/Loader";
import Notification from "./Notification";
import ImageGallery from "./ImageGallery";
import imageApi from "./services/imageApi";
import SearchBar from "./Searchbar";


export default class App extends Component {
    state = {
        images: [],
        loading: false,
        error: null,
        searchQuery: '',
        page: 0
    };

    // componentDidMount() {
    //     // this.setState({loading: true});
    //
    //     // this.fetchImages('nature');
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const prevQuery = prevState.searchQuery;
        const nextQuery = this.state.searchQuery;

        if (prevQuery !== nextQuery) {
            this.fetchImages();
        }
    }

    fetchImages = () => {
        const {searchQuery, page} = this.state;

        this.setState({ loading: true });

        imageApi
            .fetchImagesWithQuery(searchQuery, page)
            .then(images =>
                this.setState(prevState => ({
                    images: [...prevState.images, ...images],
                    page: prevState.page +1
                })))
            .catch(error => this.setState({error}))
            .finally(() => this.setState({loading: false}))
    };

    handleSearchBarSubmit = query => {
        this.setState({
            searchQuery: query,
            page: 0,
            images: []
        });
    };

    render() {
        const {images, loading, error} = this.state;

        return (
            <>
                <SearchBar onSubmit={this.handleSearchBarSubmit}/>
                {error && <Notification message={`Whoops, something went wrong: ${error.message}`}/>}
                {loading && <Loader message="Loading..."/>}
                {images.length > 0 && <ImageGallery images={images}/>}
                {images.length > 0 && !loading && <button type="button" onClick={this.fetchImages}>Load more</button>}
            </>
        )
    }
}

