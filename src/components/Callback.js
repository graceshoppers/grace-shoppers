import React, { Component } from 'react';

class Callback extends Component {

  render() {
    return (
      <div style={{
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        height: '98vh',
        width: '98vw',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
      }}
      >
        <img src="Spinner-1s-200px.svg" alt="loading" />
      </div>
    );
  }
}

export default Callback;
