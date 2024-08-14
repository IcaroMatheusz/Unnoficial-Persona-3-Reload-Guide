import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { Divider } from 'react-native-paper';
import datapersona from '../datapersona';

export default function Personas({navigation}) { 
  const [fontsLoaded] = useFonts({
    'NudMotoyaEx': require('../assets/fonts/NudMotoyaExCedarW6.ttf'),
    'MgOpen': require('../assets/fonts/MgOpenCosmeticaBold.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Mostrar um indicador de carregamento enquanto as fontes estão carregando
  }

  return ( 
    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.textheader}>Personas</Text>

        <StatusBar style="auto" />

      </View>

      <SectionList

        sections={datapersona}
        
        renderItem={({ item }) => (

          <View style={styles.item}>
             <TouchableOpacity onPress={() => { // Use TouchableOpacity ao redor da Image
              if (item.screen) {
                navigation.navigate(item.screen);
              } else {
                console.log('Nenhuma tela especificada');
              }
            }}>
              <Image source={item.image} style={styles.image} />
            </TouchableOpacity>
            
            <Text style={styles.title}>{item.title}</Text>

          </View>

        )}
        renderSectionHeader={({ section: { title } }) => (

          <View>

            <Divider style={styles.divider} />

            <Text style={styles.headerlist}>{title}</Text>

          </View>

        )}
      />
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
  textheader: {
    fontFamily: 'NudMotoyaEx',
    color: '#ffffff',
    marginTop: 90,
    marginLeft: 20,
    marginBottom: 27,
    fontSize: 27,
  },
  title: {
    fontFamily: 'MgOpen',
    marginLeft: 20,
    marginVertical: 10,
    fontSize: 16,
    color: "#ffffff",
  },
  headerlist: {
    textAlign: 'center',
    padding: 10,
    marginTop: 10,
    fontFamily: 'MgOpen',
    fontSize: 22,
    color: '#ffffff',
  },
  divider: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginTop: 10,
  },
  image: {
    width: 150, 
    height: 150,
    resizeMode: 'contain'
  },
  item: {
    alignItems: 'center',
  }
});