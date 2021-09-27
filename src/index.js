import React from  'react' ;
import ReactDOM from 'react-dom';
import App from './App';
import './_base.scss';
import store from './redux/store'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
   <Provider store={store}>
      <Router>
         <App />
      </Router>
   </Provider>,

   document.getElementById('root')
)
