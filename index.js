const React = require('react');
const ReactDOM = require('react-dom');

import 'whatwg-fetch'

const LatestMovieReviewsContainer = require(
  './components/LatestMovieReviewsContainer'
);
const SearchableMovieReviewsContainer = require(
  './components/SearchableMovieReviewsContainer'
);

ReactDOM.render(
  <div className="app">
    <LatestMovieReviewsContainer />
    <SearchableMovieReviewsContainer />
  </div>,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
