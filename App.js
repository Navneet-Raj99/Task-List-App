import React from "react"
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from "react-native"
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Splash from "./src/screens/Splash";
import Home from "./src/screens/Home";
import Done from "./src/screens/Done";
import Camera from "./src/screens/Camera";
import TodoPage from "./src/screens/TodoPage";
import Task from "./src/screens/Task";
import { TodoProvider } from "./src/context/TodoContext";

const Stack = createStackNavigator();


const Tab = createBottomTabNavigator();

function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let icon;
            if (route.name == "Todo") {
              icon = "clipboard-list"
              size = focused ? 25 : 22
              color = focused ? "lightgreen" : "black"
            }
            else if (route.name == "Done") {
              icon = "clipboard-check"
              size = focused ? 25 : 22
              color = focused ? "lightgreen" : "black"
            }
            return (
              <FontAwesome5 name={icon} size={size} color={color} />
            )
          }
        })
      }
    >
      <Tab.Screen name="Todo" component={TodoPage} options={{ headerShown: false }} />
      {/* <Tab.Screen name="Task" component={Task}  /> */}
      <Tab.Screen name="Done" component={Done} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
function App() {

  return (
    <TodoProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "lightgreen",

          }
        }}>
          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false, gestureEnabled:false }} />
          <Stack.Screen name="My Task" component={HomeTab} />
          <Stack.Screen name="Create Task" component={Task} />
          <Stack.Screen name="Done" component={Done} options={{ headerShown: false }} />
          <Stack.Screen name="Todo" component={TodoPage} options={{ headerShown: false }} />
          <Stack.Screen name="Camera" component={Camera} />
        </Stack.Navigator>
      </NavigationContainer>
    </TodoProvider >
  )
}

const styles = StyleSheet.create({

})

export default App
