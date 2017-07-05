import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';  
import store from './store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Text>asdasdasD</Text>
      </Provider>
    );
  }
}
 
