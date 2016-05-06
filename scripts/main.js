var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;

var createBrowserHistory = require('history/lib/createBrowserHistory');

/*
  App
*/


var App = React.createClass({
  render: function() {
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order/>
        <Inventory/>
      </div>
    )
  }
});

/*
  Header
*/

var Header = React.createClass({
  render: function() {
    console.log(this.props);
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
  }
});

/*
  Order
*/

var Order = React.createClass({
  render: function() {
    return(
      <p>Order</p>
    )
  }
});

/*
  Inventory
*/

var Inventory = React.createClass({
  render: function() {
    return(
      <p>Inventory</p>
    )
  }
});

/*
  StorePicker component
*/

var StorePicker = React.createClass({
  render: function() {
    return (
      <form className="store-selector">
        <h2>Please Enter A Store</h2>
        <input type="text" ref="storeId" required />
        <input type="Submit" />
      </form>
    )
  }
});

var NotFound = React.createClass({
  render: function() {
    return (
      <h1>Not Found</h1>
    )
  }
})


/*
  Routes
*/

var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={StorePicker} />
    <Route path="/store/:storeId" component={App} />
    <Route path="*" component={NotFound} />
  </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));
