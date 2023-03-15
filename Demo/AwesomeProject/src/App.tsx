import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomeScreen from './screens/HomeScreen';
import MoviesScreen from './screens/MoviesScreen';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <MoviesScreen />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});

/**
 * Provider
 *  - Là một component trong React Redux cung cấp
 *  - Giúp mình có thể truy cập và sử dụng Store trong Redux
 *  - Thường sẽ sử dụng nó ở top level trong cây component
 *  - Hook & API cũng có thể kết nối tới store thông qua Provider
 */