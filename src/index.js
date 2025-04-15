import React from 'react';
import ReactDOM from 'react-dom/client';
import pracRouter from './router/pracRouter'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider } from 'react-router';
import './css/style.css'
import Mystore from './redux/MyStore';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store ={Mystore}>
    <RouterProvider router={pracRouter} />
    </Provider>
);
