/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './App.scss';

require('file-loader?name=[name].[ext]!./index.html');

const appElement = document.getElementById('app');

ReactDOM.render(<App />, appElement);