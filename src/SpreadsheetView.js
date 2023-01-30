// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store

import React, { Component } from "react";
import ReactDOM from "react-dom";

import "@xbs/webix-pro/webix.css";
import "@xbs/spreadsheet/spreadsheet.css";

class SheetsView extends Component {
	constructor(props) {
		super(props);
		this.uiContainer = React.createRef();
	}

	render() {
		return <div ref={this.uiContainer} style={{ height: "100%" }}></div>;
	}

	componentDidMount() {
		const container = ReactDOM.findDOMNode(this.uiContainer.current);

		webix.ready(() => {
			require("@xbs/spreadsheet");

			this.ui = webix.ui({
				view: "spreadsheet",
				toolbar: "full",
				container,
			});
		});

		this.resObserver = new ResizeObserver(() => {
			if (this.ui) this.ui.adjust();
		});
		this.resObserver.observe(container);
	}

	componentWillUnmount() {
		if (this.ui) {
			this.ui.destructor();
			this.ui = null;
		}
		this.resObserver.disconnect();
	}

	shouldComponentUpdate() {
		// as component is not linked to the in-app data model, there is no need in updates
		return false;
	}
}

export default SheetsView;
