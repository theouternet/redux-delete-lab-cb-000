import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>

<li> <span>{this.props.band.name}</span> <button onClick={() => props.delete(props.band.id)}>DELETE</button> </li>

      </div>
    );
  }
};

export default Band;
