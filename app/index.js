import React from 'react';
import {render} from 'react-dom';

const HelloWorld = React.createClass({
  render: function() {
    return (
      <div>Hello World!</div>
    )
  }
})

render(<HelloWorld />, document.getElementById('app'));
