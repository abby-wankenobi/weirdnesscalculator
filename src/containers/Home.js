import React, { Component } from 'react';
import Aux from '../hoc/Aux';
import Search from '../components/Search/Search';
import SearchResult from '../components/Search/SearchResult';
import LikedGifs from '../components/Gifs/LikedGifs.js';
import { Container, Row, Col } from "react-bootstrap";
import apiCall from '../components/apiCall';
import classes from './Home.css';


class Home extends Component {

  state = {
    searchTerm: "",
    weirdnessScale: 0,
    searchResult: null
  }

  // Function being passed to Search.js
  handleSearchTermChange = (e) => {
    e.preventDefault();
    this.setState({
      searchTerm: e.target.value
    })
  }

  // On submission of search term, calls giphy API passing in search term and weirdness level
  // Function being passed to Search.js
  handleSearchTermSubmit = async () => {
    const result = await apiCall(this.state.searchTerm, this.state.weirdnessScale, this.setSearchResult);
  }

  // Passed into API call to set search result to state
  setSearchResult = (searchResult) => {
    this.setState({
      searchResult
    })
  }

  // Sets weirdness scale and calls API again to return a new GIF
  setWeirdnessScale = (e) => {
    this.setState({
      weirdnessScale: e
    }, () => {this.handleSearchTermSubmit()})
  }

  // Conditionally renders SearchResult component depending on results from the API
  renderSearchResult = () => {
    let title = "Please enter a search term";
    let url = "https://via.placeholder.com/150";
    let id
    let hasData = false;

    if (this.state.searchResult) {
      title = this.state.searchResult.data.title;
      url = this.state.searchResult.data.images.original.url;
      id = this.state.searchResult.data.id;
      hasData = true;
    }
    return (
      <SearchResult
        title={title}
        url={url}
        id={id}
        setWeirdness={this.setWeirdnessScale}
        weirdness={this.state.weirdnessScale}
        hasData={hasData}
        searchTerm={this.state.searchTerm}
      />
    );
  }

  render () {
    return (
      <Aux>
        <Container fluid={true}>
          <Row noGutters={true}>
            <Col sm={6} xs={12}>
              <Search
                handleChange={this.handleSearchTermChange}
                handleSubmit={this.handleSearchTermSubmit}
              />

              {this.renderSearchResult()}
            </Col>
            <Col sm={6} xs={12}>
              <LikedGifs />
            </Col>
          </Row>
        </Container>
      </Aux>
    );
  }
}

export default Home;
