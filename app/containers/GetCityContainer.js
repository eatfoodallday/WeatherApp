var React = require('react');
var GetCity = require('../components/GetCity');
var PropTypes = React.PropTypes;

var GetCityContainer = React.createClass({
    contextTypes: {
    router: React.PropTypes.object.isRequired
  },
    
    getDefaultProps: function () {
          return {
              direction: 'column'
          };
      },
    
    propTypes: {
        direction: PropTypes.string
    },
    
    handleUpdateCity: function (e) {
          this.setState({
              city: e.target.value
          });
      },
    
    handleSubmitCity: function (e) {
        e.preventDefault()
        this.context.router.push('/forecast/' + this.state.city)
      },
    
    getInitialState: function () {
          return {
              city: ''
          };
      },
    
    render: function () {
        return (
          <GetCity 
            direction={this.props.direction}
            onSubmitCity={this.handleSubmitCity}
            onUpdateCity={this.handleUpdateCity}
            city={this.state.city} />
        );
  }
});

module.exports = GetCityContainer;