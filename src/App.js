import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Screen from './UI/Screen';
import Header from './Header';
import Footer from './Footer';
import CategoryList from './CategoryList';
import Category from './Category';

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <Screen>
          <Header />
          <Route exact path="/" component={CategoryList} />
          <Route path="/categories/:topicId" component={Category} />

          <Footer />
        </Screen>
      </Router>
    );
  }
}

export default App;
