import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import mainReducer from "./redux/mainReducer";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

const initState = {
	data: [],
};

const getCorrectState = () => {
	let temporaryArr = JSON.parse(localStorage.getItem("dataEmployees"));
	return { data: [...temporaryArr] };
};

const persistedState = localStorage.getItem("dataEmployees")
	? getCorrectState()
	: initState;

const store = createStore(mainReducer, persistedState);

store.subscribe(() => {
	localStorage.setItem("dataEmployees", JSON.stringify(store.getState()));
});

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
