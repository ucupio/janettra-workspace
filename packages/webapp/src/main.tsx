import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { store } from '@janettra-workspace/data-access';

import App from './app/app';
import { theme } from './app/theme/default';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MantineProvider
          theme={theme}
          withCSSVariables
          withGlobalStyles
          withNormalizeCSS
        >
          <App />
        </MantineProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
