import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, FlatList } from 'react-native';
import { useFonts } from 'expo-font';
import SL from '../components/sl';
import data from '../data';

export default function HomePage({ navigation }) {

  const [fontsLoaded] = useFonts({
    'NudMotoyaEx': require('../assets/fonts/NudMotoyaExCedarW6.ttf'),
  });

  

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.textheader}>Social Links</Text>
        <StatusBar style="auto" />
      </View>


      <FlatList
        data={data}
        renderItem={({ item }) => (
          <SL
            imagePath={item.imagePath}
            buttonText={item.buttonText}
            screen={item.screen}
            navigation={navigation}
          />
        )}
        numColumns={3}
        contentContainerStyle={styles.flatListContainer}
      />
      
      <View style={styles.footer}>
      </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
  },
  header: {
    backgroundColor: '#1269cc',
  },
  flatListContainer: {
    flexGrow: 0,

  },
  textheader: {
    fontFamily: 'NudMotoyaEx',
    color: '#ffffff',
    marginTop: 90,
    marginLeft: 20,
    marginBottom: 27,
    fontSize: 27,
  },
});