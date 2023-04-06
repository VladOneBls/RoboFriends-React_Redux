import React from 'react';
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import './index.css';
import App from './containers/App';
import { searchRobots } from './reducers';
import 'tachyons';

const logger = createLogger(); // the logger func is a middleware
const store = createStore(searchRobots, applyMiddleware(logger))

const root = createRoot(document.getElementById('root'));
root.render(
			<Provider store={store}>
				<App />
			</Provider>
			);