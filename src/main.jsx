import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import {PokemonApp} from './PokemonApp';
import {TodoApp} from './TodoApp';
import './index.css';

import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <TodoApp />
    </Provider>
  </React.StrictMode>
)
