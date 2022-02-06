import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <App />
    {/* </PersistGate> */}
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root'),
);
