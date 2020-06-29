import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>

<li><span>{this.props.band.name}</span>

</li>

      </div>
    );
  }
};

export default Band;
