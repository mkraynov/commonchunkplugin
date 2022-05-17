import obj from './library';

var React = require('react');
var ReactDOM = require('react-dom');
obj.abc += "b";

ReactDOM.render(
  <h2>Hello Webpack {obj.abc}</h2>,
  document.getElementById('b')
);
