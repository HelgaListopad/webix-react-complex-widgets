import React from "react";
import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import Home from "./Home";
import FilesView from "./FilesView";
import SheetsView from "./SpreadsheetView";

import logo from "./assets/logo.svg";
import "./assets/App.css";

const App = () => (
	<Router>
		<div className="app">
			<div className="app-header">
				<img src={logo} className="app-logo" alt="logo" />
				<h2>React + Webix</h2>
			</div>
			<div className="content-box">
				<div className="menu">
					<ul>
						<li>
							<NavLink
								to="/"
								exact="true"
								className={({ isActive }) => (isActive ? "active" : undefined)}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/files"
								className={({ isActive }) => (isActive ? "active" : undefined)}
							>
								File Manager
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/spreadsheet"
								className={({ isActive }) => (isActive ? "active" : undefined)}
							>
								Spreadsheet
							</NavLink>
						</li>
					</ul>
				</div>
				<div className="content">
					<Routes>
						<Route exact="true" path="/" element={<Home />} />
						<Route path="/files" element={<FilesView />} />
						<Route path="/spreadsheet" element={<SheetsView />} />
					</Routes>
				</div>
			</div>
			<div className="footer">
				<p>
					Get more info at{" "}
					<a target="blank" href="http://webix.com">
						http://webix.com
					</a>
				</p>
			</div>
		</div>
	</Router>
);

export default App;
