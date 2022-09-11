import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './styles/stylesheet.css'
import rootReducer from './redux/reducer'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { database } from "./database/config";
import App from './Components/App'
const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(thunk))

const container = ReactDOM.createRoot(document.getElementById('root'))
container.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>)
// ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>,document.getElementById('root'))

// const container = document.getElementById('root');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<Main />);