var React = require('react');

function Forecast (props) {
    console.log(props)
  return props.isLoading === true
    ? <div> Loading </div>
    : <div> Forecase Component </div>
}

module.exports = Forecast;