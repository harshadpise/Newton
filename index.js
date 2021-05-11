import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {
  render() {
    return <div id="root">
        <p>I am learning React. My life is getting better.</p>
    </div>

  }
}

ReactDOM.render(<Test />, document.getElementById('root'));
