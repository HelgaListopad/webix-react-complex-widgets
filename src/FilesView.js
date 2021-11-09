// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '@xbs/webix-pro/webix.css';
import '@xbs/filemanager/codebase/filemanager.css';

class FilesView extends Component {
  constructor(props) {
    super(props);
    this.uiContainer = React.createRef();
  }

  render() {
    return (
      <div ref={this.uiContainer} style={{height:"100%"}}></div>
    );
  }

  componentDidMount(){

    webix.ready(() => {

      if (!webix.env.touch && webix.env.scrollSize){
        webix.CustomScroll.init();
      }

      const fManager = require("@xbs/filemanager");

      this.app = new fManager.App({ webix, url: "https://docs.webix.com/filemanager-backend/" })
      this.app.render( ReactDOM.findDOMNode(this.uiContainer.current) );

    })

  }

  componentWillUnmount(){
    if (this.app){
      this.app.destructor();
      this.app = null;
    }
  }

  shouldComponentUpdate(){
  	// as component is not linked to the in-app data model, there is no need in updates
    return false;
  }
}

export default FilesView;
