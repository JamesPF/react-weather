var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a basic React application that allows the user to search for and view the current weather in a given location.</p>
      <p>The main purpose of building this app was to get more familiar with components, routes, and Foundation.</p>
      <p>Here are some of the tools I used.</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JavaScript used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
