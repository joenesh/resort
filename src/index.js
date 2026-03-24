import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {RoomProvider} from './context';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = 'dev-wuwoez6ccfowpf23.us.auth0.com';
const clientId = "seackjVWwAnLtBjXBwyNXpEj89uKz2fu";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RoomProvider>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>
  </RoomProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
