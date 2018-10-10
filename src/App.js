import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Screen from './UI/Screen';
import Header from './UI/Header';
import Footer from './UI/Footer';
import CategoryList from './category/CategoryList';
import Category from './category/Category';
import Company from './company/Company';

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <Screen>
          <Header />
          <Route exact path="/" component={CategoryList} />
          <Route path="/categories/:topicId" component={Category} />
          <Route path="/companies/:companyId" component={Company} />

          <Footer />
        </Screen>
      </Router>
    );
  }
}

export default App;
