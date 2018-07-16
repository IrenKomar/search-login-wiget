import React, { Component } from 'react';
import { Host } from './../host/host.component';
import resolveHosts from './../../containers/host-list.container';
import injectSheet from 'react-jss';

class HostList extends Component {
  // render() {
  //   const { data } = this.props;
  //   if (data) {
  //     return (
  //       <div>
  //         <Host />
  //       </div>
  //     );
  //   }
  // }
  render() {
    if (this.props.data) {
      return (
        <div>
          {this.props.data.map((host, i) => {
            <Host hostname={host} key={i}/>
          })}
        </div>
      );
    }
    else {
      return (
        <div>No data! Reload please</div>
      );
    }
  }
}

export default resolveHosts(HostList);
