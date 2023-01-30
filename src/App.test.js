import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = ReactDOMClient.createRoot(div);
  root.render(<App />)
});
