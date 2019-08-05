import React, { Component } from 'react';
import Aux from '../hoc/Aux';
import Search from '../components/Search/Search';
import SearchResult from '../components/Search/SearchResult';
import LikedGifs from '../components/Gifs/LikedGifs.js';
import { Container, Row, Col } from "react-bootstrap";


class Home extends Component {

  render () {

    return (
      <Aux>
        <Container fluid={true}>
          <Row noGutters={true}>
            <Col sm={6} xs={12}>
              <Search />
              <SearchResult />
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
