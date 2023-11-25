//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Pages
import HomeScreen from './src/pages/Home';
import GeneralScreen from './src/pages/General';
import AddGainScreen from './src/pages/AddGain';
import AddExpenseScreen from './src/pages/AddExpense';

import AuthProvider from './src/contexts/auth';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="General" component={GeneralScreen} />
          <Stack.Screen name="Add gain" component={AddGainScreen} />
          <Stack.Screen name="Add expense" component={AddExpenseScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}