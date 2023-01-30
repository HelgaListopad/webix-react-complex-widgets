// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store

import React from "react";

export const Home = () => (
	<div>
		<p>
			When you are working with a combination of React and Webix, there are 3
			main coding techniques.
		</p>

		<ul>
			<li>Wrapping Webix UI in a custom component</li>
			<li>
				Original example at{" "}
				<a target="blank" href="https://github.com/webix-hub/react-demo">
					github.com/webix-hub/react-demo
				</a>
			</li>
		</ul>
		<hr />
		<p>
			The above listed variants will work fine, if you need to add a few Webix
			widgets to a React-based app.
		</p>
		<p>
			If you are planning to create an app with plenty of Webix widgets, check{" "}
			<a target="blank" href="https://webix.gitbook.io/webix-jet/">
				Webix Jet
			</a>{" "}
			first.{" "}
		</p>
	</div>
);

export default Home;
