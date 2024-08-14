import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import { useFonts } from 'expo-font';
import { TextInput, Divider } from 'react-native-paper';
import dataanswers from '../dataanswers';

export default function Answers() {
  const [fontsLoaded] = useFonts({
    'NudMotoyaEx': require('../assets/fonts/NudMotoyaExCedarW6.ttf'),
    'MgOpen': require('../assets/fonts/MgOpenCosmeticaBold.ttf'),
  });

  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(dataanswers);

  useEffect(() => {
    if (searchText === '') {
      setFilteredData(dataanswers);
    } else {
      const newData = dataanswers.filter(item =>
        item.title.toLowerCase().includes(searchText.toLowerCase()) ||
        item.data[0].toLowerCase().includes(searchText.toLowerCase()) ||
        item.data[1].toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredData(newData);
    }
  }, [searchText]);

  if (!fontsLoaded) {
    return null; // Retorne null ou um indicador de carregamento enquanto as fontes estão carregando
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textheader}>Answers</Text>
        <StatusBar style="auto" />
      </View>

      <TextInput  theme={{ colors: { text: '#fff' } }}
          autoCorrect={false}
        label="Search"
        value={searchText}
        onChangeText={text => setSearchText(text)}
        style={styles.searchInput}
      />

      <SectionList
        sections={filteredData}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
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
  searchInput: {
    fontFamily: 'MgOpen',
    margin: 20,
    backgroundColor: '#ffffff',
  },

  title: {
    fontFamily: 'MgOpen',
    marginLeft: 20,
    marginVertical: 10,
    fontSize: 16,
    color: "#ffff"
  },
  headerlist: {
    padding: 10,
    marginTop: 10,
    fontFamily: 'MgOpen',
    fontSize: 22,
    color: '#ffff'
  },
  divider: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginTop: 10,
  },
});