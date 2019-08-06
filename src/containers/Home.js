import React, { Component } from 'react';
import Aux from '../hoc/Aux';
import Search from '../components/Search/Search';
import SearchResult from '../components/Search/SearchResult';
import LikedGifs from '../components/Gifs/LikedGifs.js';
import { Container, Row, Col } from "react-bootstrap";
import apiCall from '../components/apiCall';


class Home extends Component {

  state = {
    searchTerm: "",
    weirdnessScale: 0,
    searchResult: null
  }

  handleSearchTermChange = (e) => {
    e.preventDefault();
    this.setState({
      searchTerm: e.target.value
    })
  }

  // On submission of search term, calls giphy API passing in search term and weirdness level
  handleSearchTermSubmit = async (e) => {
    e.preventDefault();
    const result = await apiCall(this.state.searchTerm, this.state.weirdnessScale, this.setSearchResult);
  }

  // Passed into API call to set search result to state
  setSearchResult = (searchResult) => {
    this.setState({
      searchResult
    })
  }

  renderSearchResult = () => {
    let title = "Please enter a search term";
    let url = "default";
    if (this.state.searchResult) {
      title = this.state.searchResult.data.title;
      url = this.state.searchResult.data.embed_url;
    }

    return (
      <SearchResult
        title={title}
        url={url}
      />
    );
  }

  render () {
    console.log(this.state.searchResult)

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
