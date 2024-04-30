import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";  
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
      <App />
    </Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);




