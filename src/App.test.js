import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./App";
import * as webix from "@xbs/webix-pro";

it("renders without crashing", () => {
	// hardcode a global variable (required for complex widgeets)
	window.webix = webix;
	webix.CustomScroll.init();

	const div = document.createElement("div");
	const root = ReactDOMClient.createRoot(div);
	root.render(<App />);
});
