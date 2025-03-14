import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import './global.css';

const App = () => {
  return (
    <View className="bg-slate-700 flex-1 items-center justify-center">
      <Text className="text-6xl text-white">Comenzando...</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
