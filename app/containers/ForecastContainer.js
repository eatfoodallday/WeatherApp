var React = require('react');
var Forecast = require('../components/Forecast');
var getForecast = require('../helpers/api').getForcast;

var ForecastContainer = React.createClass({
   render: function() {
       return (
           <Forecast />
       );
   } 
});
              
module.exports = ForecastContainer;