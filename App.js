import { SafeAreaView,
   StyleSheet,
    Text,
     View,
     Platform,
     StatusBar
} from 'react-native';

const isAndroid=Platform.OS==='android';
export default function App() {
  return (
    <>
      <SafeAreaView style={{flex:1,marginTop:isAndroid?StatusBar.currentHeight:0}}>
        <View style={{backgroundColor:'red',padding:16}}>
          <Text>Search</Text>
        </View>
        <View style={{backgroundColor:'green',flex:1,padding:16}}>
        <Text>List</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  
});
