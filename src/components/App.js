import React, { Component } from "react";
import Loader from "./Loader/Loader";
import Notification from "./Notification/Notification";
import ImageGallery from "./ImageGallery/ImageGallery";
import imageApi from "./services/imageApi";
import Searchbar from "./Searchbar/Searchbar";
import Modal from "./Modal/Modal";
import Button from "./Button/Button";

export default class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    searchQuery: "",
    page: 0,
    largeImage: ""
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const prevImages = prevState.images;
    const nextImages = this.state.images;

    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }

    if (prevImages !== nextImages) {
      this.scrollToBottom();
    }
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;

    this.setState({ loading: true });

    imageApi
      .fetchImagesWithQuery(searchQuery, page)
      .then(images =>
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1
        }))
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchBarSubmit = query => {
    this.setState({
      searchQuery: query,
      page: 1,
      images: []
    });
  };

  scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  };

  setLargeImage = largeImage => {
    this.setState({ largeImage });
  };

  closeModal = () => {
    this.setState({ largeImage: "" });
  };

  render() {
    const { images, loading, error, largeImage } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSearchBarSubmit} />
        {error && (
          <Notification
            message={`Whoops, something went wrong: ${error.message}`}
          />
        )}
        {images.length > 0 && (
          <ImageGallery images={images} onSetLargeImage={this.setLargeImage} />
        )}
        {loading && <Loader />}
        {largeImage && (
          <Modal onClose={this.closeModal} largeImage={largeImage} />
        )}
        {images.length > 0 && !loading && (
          <Button onLoadMore={this.fetchImages} />
        )}
      </>
    );
  }
}
