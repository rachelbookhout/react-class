var React = require('react');
var ReactDOM = require('react-dom');
var products = require('./products.js');
var Search = require('./components/search.js');
var Result = require('./components/result.js');
var Results = require('./components/results.js');
var Searchbar = require('./components/searchbar.js');



ReactDOM.render(<Search products={products} />, document.getElementById('app'));


