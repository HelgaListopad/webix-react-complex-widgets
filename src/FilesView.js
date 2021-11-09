// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as webix from '@xbs/webix-pro';

import '@xbs/webix-pro/webix.css';
import '@xbs/filemanager/codebase/filemanager.css';

// hardcode global value
window.webix = webix;

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

      require("@xbs/filemanager");

      this.ui = webix.ui({ 
        view: "filemanager",
        url: "https://docs.webix.com/filemanager-backend/",
        container: ReactDOM.findDOMNode(this.uiContainer.current)
      });

    })

  }

  componentWillUnmount(){
    if (this.ui){
      this.ui.destructor();
      this.ui = null;
    }
  }

  shouldComponentUpdate(){
  	// as component is not linked to the in-app data model, there is no need in updates
    return false;
  }
}

export default FilesView;
