/*
  Header
*/

import React from 'react';

var Header = React.createClass({
  render: function() {
    return (
      <header className="top">
        <h1>Catch
          <span className="ofThe">
            <span className="of">Of</span>
            <span className="the">The</span>
          </span> Day
        </h1>
        <h3 className="tagline">{this.props.tagline}</h3>
      </header>
    )
  },

  propTypes: {
    tagline: React.PropTypes.string.isRequired
  }
});

export default Header;
