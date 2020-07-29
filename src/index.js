import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/index'

const store = createStore(
    reducers,
    {
      data: []
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ) 

const homeContainer = document.getElementById('root')

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
,homeContainer);
