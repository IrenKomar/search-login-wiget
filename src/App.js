import React, { Component } from 'react';
import './App.css';
import { Search } from './components/search/search.component';
import HostList from './components/host-list/host-list.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <HostList />
      </div>
    );
  }
}

export default App;
