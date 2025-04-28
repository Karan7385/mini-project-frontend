import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App';
import * as serviceWorker from './serviceWorker';
import { SnackbarProvider } from 'notistack';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Create a root

root.render( // Use root.render
  <React.StrictMode>
    <SnackbarProvider maxSnack={3}>
      <App />
    </SnackbarProvider>
  </React.StrictMode>
);

serviceWorker.unregister();