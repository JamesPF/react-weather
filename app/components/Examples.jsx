var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out</p>
      <ol>
        <li>
          <Link to="/?locatio=Boston">Boston, MA</Link>
        </li>
        <li>
          <Link to="/?New%20York">New York, NY</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
