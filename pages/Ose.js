import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SectionList } from 'react-native';
import { useFonts } from 'expo-font';
import { Divider } from 'react-native-paper';
import Passive from '../assets/passive.png';
import Boost from '../assets/boost.png';
import Slice from '../assets/attack_slice.png';

export default function Ose({ }) {

  const [fontsLoaded] = useFonts({
    'NudMotoyaEx': require('../assets/fonts/NudMotoyaExCedarW6.ttf'),
    'MgOpen': require('../assets/fonts/MgOpenCosmeticaBold.ttf'),
  });

  const dataose = [
    {
      title: 'Learned Skills',
      data: [
        { name: 'Blade Of Fury', image: Slice },
        { name: 'Matarunda', image: Boost },
        { name: 'Multi-Target Boost', image: Passive },
        { name: 'Deathbound', image: Slice },
        { name: 'Null Rage', image: Passive },
        { name: 'Life Aid', image: Passive },
        { name: 'Tempest Slash', image: Slice },
      ]
    },
    {
      title: 'Fusions',
      data: [
        { name: 'Jack Frost' },
        { name: 'X' },
        { name: 'Hell Biker'},
        { name: 'Legion' },
        { name: 'X' },
        { name: 'Decarabia' },
        { name: 'Kikuri-Hime'},
        { name: 'X'},
        { name: 'Zouchouten'},
        { name: 'Matador'},
        { name: 'X'},
        { name: 'Uriel'},
      ]
    },
  ]

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.textheader}>Ose</Text>
        <StatusBar style="auto" />
      </View>

      <View style={styles.banner}>
        <Image
          source={require('../assets/personas/Ose.png')}
          style={styles.image}
        />
        <Text style={styles.textbanner}>
          Ose
        </Text>
        
      </View>
      <View style={styles.bannerdown}>
        <Text style={styles.textdownbanner}>
          Fool, Lvl 41
        </Text>

      </View>

      <SectionList
        sections={dataose}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (

          <View style={styles.item}>
            {item.image && (
              <Image source={item.image} style={styles.icon} />
            )}
            <Text style={styles.title}>{item.name}</Text>
          </View>
        )}

        renderSectionHeader={({ section: { title } }) => (
          <View>
            <Divider style={styles.divider} />
              <Text style={styles.headerlist}>{title}</Text>
            <Divider style={styles.divider} />
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
  image: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
  },
  banner: {
    backgroundColor: '#1c1c1c',
    justifyContent: 'center',
    marginTop: 30,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textbanner: {
    fontFamily: 'MgOpen',
    color: '#ffffff',
    fontSize: 27,
  },
  bannerdown: {
    backgroundColor: '#1c1c1c',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textdownbanner: {
    fontFamily: 'MgOpen',
    color: '#ffffff',
    fontSize: 20,
  },
  divider: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginTop: 10,
  },
  title: {
    
    fontFamily: 'MgOpen',
    marginVertical: 10,
    fontSize: 19,
    color: "#ffff"
  },
  headerlist: {
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'MgOpen',
    fontSize: 22,
    color: '#ffff'
  },
  icon: {
    width: 50,
    height: 50,
  },
  item: {
      padding: 3,
      alignItems:'center',
      flexDirection: 'row',
      justifyContent: 'center',
  }
});