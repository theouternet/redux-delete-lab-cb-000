import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>

<span>{props.band.text}</span>

      </div>
    );
  }
};

export default Band;
