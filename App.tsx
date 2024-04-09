// App.js
import React from 'react';
import {Provider} from 'react-redux';
import MyComponent from './src/MyComponent';
import {persistor, store} from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MyComponent />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
