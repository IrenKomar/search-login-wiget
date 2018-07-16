import React, { Component } from 'react';
import injectSheet from 'react-jss';

export class Search extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="hostname" />
      </div>
    );
  }
}
