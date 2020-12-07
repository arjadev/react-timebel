import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from 'src/serviceWorker';
import { SettingsProvider } from 'src/context/SettingsContext';
import { restoreSettings } from 'src/utils/settings';
import App from 'src/App';

const settings = restoreSettings();

ReactDOM.render(
    <SettingsProvider settings={settings}>
      <App />
    </SettingsProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
