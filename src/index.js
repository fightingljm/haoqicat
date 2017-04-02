import React from 'react';
import {render} from 'react-dom';
import Routers from './routes.js';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import './main.css'

import {Provider} from 'react-redux';
import store from './store/store.js'

render(<Provider store={store}><Routers /></Provider>,document.getElementById('root'));
