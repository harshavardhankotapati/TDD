import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Calculator from './Caluclator/caluclator';

interface componentNameProps {}

const App = (props: componentNameProps) => {
  return (
    <>
       <Calculator/>
    </>

  );
};

export default App;

const styles = StyleSheet.create({
  container: {}
});
