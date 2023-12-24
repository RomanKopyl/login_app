import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { RootNavigator } from './src/navigation/RootNavigator';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  // const theme = useTheme();
  const theme = {
    main: 'white'
    // main: '#EB0057'
  };

  return (
    // <ThemeProvider theme={theme}>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
    // </ThemeProvider>
  );
}
export default App;
