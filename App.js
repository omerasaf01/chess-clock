import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './components/app/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/home/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    marginTop: StatusBar.currentHeight,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  PlayerBlack: {
    width: "100%",
    height: "40%",
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  PlayerWhite: {
    backgroundColor: "white",
    width: "100%",
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  Menu: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: "blue",
    height: "20%",
    justifyContent: "center",
  }
});
