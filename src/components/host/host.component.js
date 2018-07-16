import React, { Component } from 'react';
import injectSheet from 'react-jss';

export class Host extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <div>{data.hostname}</div>
      </div>
    );
  }
}
