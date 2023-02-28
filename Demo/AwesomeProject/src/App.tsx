import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return(
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

/**
 * Provider
 *  - Là một component trong React Redux cung cấp
 *  - Giúp mình có thể truy cập và sử dụng Store trong Redux
 *  - Thường sẽ sử dụng nó ở top level trong cây component
 *  - Hook & API cũng có thể kết nối tới store thông qua Provider
 */