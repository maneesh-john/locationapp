/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView } from 'react-native';

import { AppProvider } from './app/contexts/AppContext';
import styles from './app/styles';

import Main from "./app/screens/Main";

const App = () => {

  return (
    <SafeAreaView style={styles.safeArea}>
      <AppProvider>
        <Main />
      </AppProvider>
    </SafeAreaView>
  );
};

export default App;
