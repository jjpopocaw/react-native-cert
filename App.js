import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Lista from './Components/Lista'
import Detalles from './Components/Detalles'

const mainNavigator = createStackNavigator({
  List: {screen: Lista},
  Detalle: {screen: Detalles}
});

const App = createAppContainer(mainNavigator);

export default App;
