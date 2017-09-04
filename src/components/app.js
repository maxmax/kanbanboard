import React, { Component } from 'react';
import {connect} from 'react-redux';
import TrelloWr from './modules/trello';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { trello } = this.props;

    return (
      <div className='app'>
        <TrelloWr data={trello} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { trello } = state;
  return {
    trello: trello
  };
}

export default connect(mapStateToProps)(App);
