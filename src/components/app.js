import React, { Component } from 'react';
import Navigation from './navigation';
import Content from './content';

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faSignOutAlt);


export default class App extends Component {  
  render() {
    return (
      <div className="app">         
        <Navigation />
        <Content />
      </div>
    );
  }
}
