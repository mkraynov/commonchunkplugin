import obj from './library';

var React = require('react');
var ReactDOM = require('react-dom');
obj.abc += "a";

ReactDOM.render(
  <h1>Hello World {obj.abc}</h1>,
  document.getElementById('a')
);
