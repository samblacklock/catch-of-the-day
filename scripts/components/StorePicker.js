/*
  StorePicker component
*/

import React from 'react';
import { History } from 'react-router';
import helpers from '../helpers';

var StorePicker = React.createClass({
  mixins: [History],

  goToStore: function(e) {
    e.preventDefault();

    //get data from input
    //transition from <StorePicker/> to <App/>
    var storeId = this.refs.storeId.value;
    this.history.pushState(null, '/store/' + storeId);
  },

  render: function() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" ref="storeId" defaultValue={helpers.getFunName()} required />
        <input type="Submit" />
      </form>
    )
  }
});

export default StorePicker;
